import mongoose from "mongoose";
import { Webhook } from "svix";  // مكتبة للتفاعل مع Webhooks

// تعريف الـ Schema للمستخدم في MongoDB
const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  role: { 
    type: String, 
    enum: ["Tourist", "Company", "Admin"], 
    default: "Tourist" 
  },
  phoneNumber: { type: String, required: false },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// Webhook handler
const clerkWebhooks = async (req, res) => {
  try {
    // إنشاء كائن من Webhook للتحقق من سرية Webhook
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // الحصول على البيانات من الطلب
    const { data, type } = req.body;

    // التحقق من رؤوس الطلب
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // التحقق من صحة Webhook
    await whook.verify(JSON.stringify(req.body), headers);

    // إنشاء كائن للمستخدم بناءً على البيانات الواردة من Clerk
    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    // معالجة الأحداث بناءً على نوع الحدث
    switch (type) {
      case "user.created": {
        // إضافة مستخدم جديد إلى قاعدة البيانات
        await User.create(userData);
        break;
      }

      case "user.updated": {
        // تحديث مستخدم موجود في قاعدة البيانات
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      default:
        break;
    }

    // إرسال استجابة إيجابية بعد معالجة Webhook
    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    // التعامل مع الأخطاء وإرسال الاستجابة السلبية
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
