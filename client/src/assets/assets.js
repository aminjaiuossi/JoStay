import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'

import Img11 from './Amman_1.png'
import Img21 from './Amman_2.png'
import Img31 from './Amman_3.png'
import Img41 from './Amman_4.png'

import Img12 from './Aqaba_1.png'
import Img22 from './Aqaba_2.png'
import Img32 from './Aqaba_3.png'
import Img42 from './Aqaba_4.png'

import Img13 from './Ded_sea_1.png'
import Img23 from './Ded_sea_2.png'
import Img33 from './Ded_sea_3.png'
import Img43 from './Ded_sea_4.png'

import Img14 from './Karak_Castle_1.png'
import Img24 from './Karak_Castle_2.png'
import Img34 from './Karak_Castle_3.png'
import Img44 from './Ajloun_Castel_1.png'

import Amin_2 from './Amin_2.png';  
import Sami from './Sami.png';
import Hamza from './Hamza.png';
import Hassan from './Hassan.png';
import Mona from './Mona.png';
import Mohannad from './Mohannad.png';

import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import dallas from "./dallas.png"
import joo from "./JoStay_logo (1).svg"
import jou from "./h6i5Kc01.svg"

export const assets = {
    dallas,
    jou,
    Img24,
    Img22,
    Img23,
    Img21,
    joo,
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    Amin_2,
    Sami,
    Hamza,
    Hassan,
    Mona,
    Mohannad,
}

export const cities = [
    "Amman",
    "Aqaba",
    "Karak",
    "Dead Sea",
    "Ajloun",
    "Ajloun Castel",
    "Aqaba Castel",
    "Petra",
    "Qaser Azraq",
    "Qaser Amra",
    "Wadi Mujib",
    "Wadi Rum",

];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Hamza Abu Jeish", address: "Amman, Jordan", image:Hamza, rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Amin Jaiosy", address: "Irbid, Jordan", image: Amin_2, rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Mona Al-Bahloul", address: "Amman, Jordan", image: Mona, rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Wi-Fi": assets.freeWifiIcon,
    "Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool": assets.poolIcon,
    "Spa":assets.spa
};



// For Room Details Page
export const tripCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Mohammad",
    "email": "Mohd55@gmail.com",
    "image": [dallas],
    "role": "CompaniOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "Amman"
    ]
}

// compani1 Dummy Data
export const companiDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Dalas",
    "address": "Amman-macca street",
    "contact": "+962797648086",
    "owner": userDummyData,
    "city": "Amman",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const tripFlowSteps = {
  cultural: [
    {
      id: 1,
      phase: "Day 1",
      title: "Heritage Welcome",
      description: "Immerse yourself in local culture from the moment you arrive",
      icon: "🏺",
      details: [
        "Traditional welcome ceremony",
        "Cultural orientation & customs briefing",
        "Meet local historians & guides",
        "Heritage hotel check-in"
      ],
      timeline: "Day 1 - Morning"
    },
    {
      id: 2,
      phase: "Day 1-3",
      title: "Ancient Discoveries",
      description: "Explore archaeological sites and historical monuments",
      icon: "🏛️",
      details: [
        "UNESCO World Heritage sites visit",
        "Archaeological museum tours",
        "Ancient architecture workshops",
        "Traditional craft demonstrations"
      ],
      timeline: "Day 1-3"
    },
    {
      id: 3,
      phase: "Day 4-6",
      title: "Living Culture",
      description: "Experience authentic traditions and local lifestyle",
      icon: "🎭",
      details: [
        "Traditional festivals participation",
        "Local family home visits",
        "Artisan workshops & masterclasses",
        "Regional cuisine cooking classes"
      ],
      timeline: "Day 4-6"
    },
    {
      id: 4,
      phase: "Day 7-8",
      title: "Cultural Exchange",
      description: "Connect with local communities and share experiences",
      icon: "🤝",
      details: [
        "Community service projects",
        "Cultural performance evenings",
        "Language exchange sessions",
        "Traditional music & dance lessons"
      ],
      timeline: "Day 7-8"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Legacy & Farewell",
      description: "Reflect on cultural insights and preserve memories",
      icon: "📜",
      details: [
        "Cultural reflection ceremony",
        "Artisan souvenir shopping",
        "Photo exhibition of journey",
        "Cultural ambassador certificates"
      ],
      timeline: "Final Day"
    }
  ],
  
  adventure: [
    {
      id: 1,
      phase: "Day 1",
      title: "Base Camp Setup",
      description: "Gear up and prepare for your ultimate adventure challenge",
      icon: "⛺",
      details: [
        "Equipment check & fitting",
        "Safety briefing & protocols",
        "Team building exercises",
        "Base camp accommodation"
      ],
      timeline: "Day 1 - Afternoon"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Skill Building",
      description: "Master essential techniques and build confidence",
      icon: "🧗",
      details: [
        "Rock climbing & rappelling training",
        "Navigation & survival skills",
        "Emergency response drills",
        "Wilderness photography basics"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-7",
      title: "Peak Adventures",
      description: "Push your limits with challenging expeditions",
      icon: "🏔️",
      details: [
        "Multi-day trekking expeditions",
        "Summit attempts & challenges",
        "White water rafting adventures",
        "Cave exploration & spelunking"
      ],
      timeline: "Day 4-7"
    },
    {
      id: 4,
      phase: "Day 8-9",
      title: "Extreme Challenges",
      description: "Test your skills with advanced adventure activities",
      icon: "🚁",
      details: [
        "Helicopter mountain tours",
        "Paragliding & skydiving",
        "Ice climbing expeditions",
        "Night survival challenges"
      ],
      timeline: "Day 8-9"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Victory Celebration",
      description: "Celebrate achievements and bond with fellow adventurers",
      icon: "🏆",
      details: [
        "Achievement ceremony & medals",
        "Adventure video compilation",
        "Gear maintenance workshop",
        "Alumni network invitation"
      ],
      timeline: "Final Day"
    }
  ],
  
  wellness: [
    {
      id: 1,
      phase: "Day 1",
      title: "Mindful Arrival",
      description: "Begin your wellness journey with peaceful transitions",
      icon: "🕯️",
      details: [
        "Meditation welcome ceremony",
        "Health assessment & consultation",
        "Peaceful accommodation setup",
        "Sunset yoga introduction"
      ],
      timeline: "Day 1 - Evening"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Body Awakening",
      description: "Rejuvenate your physical being with holistic treatments",
      icon: "💆",
      details: [
        "Daily yoga & tai chi sessions",
        "Therapeutic massage treatments",
        "Detox nutrition programs",
        "Nature walk meditations"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-6",
      title: "Mind Clarity",
      description: "Achieve mental balance through mindfulness practices",
      icon: "🧘",
      details: [
        "Silent meditation retreats",
        "Breathwork & pranayama",
        "Stress management workshops",
        "Digital detox activities"
      ],
      timeline: "Day 4-6"
    },
    {
      id: 4,
      phase: "Day 7-8",
      title: "Spirit Connection",
      description: "Deepen spiritual awareness and inner peace",
      icon: "🌸",
      details: [
        "Chakra balancing sessions",
        "Sound therapy & healing bowls",
        "Energy healing treatments",
        "Gratitude & intention ceremonies"
      ],
      timeline: "Day 7-8"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Integration & Renewal",
      description: "Integrate learnings and plan your continued wellness journey",
      icon: "🌅",
      details: [
        "Personal wellness plan creation",
        "Mindfulness toolkit preparation",
        "Community circle sharing",
        "Renewal commitment ceremony"
      ],
      timeline: "Final Day"
    }
  ],
  
  culinary: [
    {
      id: 1,
      phase: "Day 1",
      title: "Taste Bud Awakening",
      description: "Embark on a flavorful journey of culinary discovery",
      icon: "👨‍🍳",
      details: [
        "Welcome feast with local specialties",
        "Palate training & tasting techniques",
        "Meet renowned local chefs",
        "Culinary history orientation"
      ],
      timeline: "Day 1 - Evening"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Market Adventures",
      description: "Explore vibrant markets and source fresh ingredients",
      icon: "🥕",
      details: [
        "Early morning market tours",
        "Ingredient identification workshops",
        "Vendor interaction & sourcing",
        "Seasonal produce education"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-6",
      title: "Culinary Mastery",
      description: "Learn authentic cooking techniques from master chefs",
      icon: "🍳",
      details: [
        "Hands-on cooking masterclasses",
        "Traditional technique workshops",
        "Recipe development sessions",
        "Professional kitchen experiences"
      ],
      timeline: "Day 4-6"
    },
    {
      id: 4,
      phase: "Day 7-8",
      title: "Flavor Exploration",
      description: "Discover regional specialties and hidden culinary gems",
      icon: "🍷",
      details: [
        "Wine & beverage pairing sessions",
        "Street food adventure tours",
        "Family recipe exchanges",
        "Regional specialty tastings"
      ],
      timeline: "Day 7-8"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Culinary Graduation",
      description: "Showcase your skills and take home culinary treasures",
      icon: "🎓",
      details: [
        "Final cooking competition",
        "Recipe book compilation",
        "Culinary equipment shopping",
        "Chef certification ceremony"
      ],
      timeline: "Final Day"
    }
  ],
  religious: [
    {
      id: 1,
      phase: "Day 1",
      title: "Sacred Arrival",
      description: "Begin your spiritual journey with a moment of reverence",
      icon: "🕌",
      details: [
        "Welcome prayer session",
        "Orientation on local religious customs",
        "Visit to a nearby spiritual site",
        "Peaceful lodging check-in"
      ],
      timeline: "Day 1 - Evening"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Pilgrimage & Practice",
      description: "Explore ancient temples and engage in rituals",
      icon: "🕍",
      details: [
        "Pilgrimage to sacred locations",
        "Ritual participation with local clergy",
        "Scripture reading sessions",
        "Guided meditative walks"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-5",
      title: "Spiritual Wisdom",
      description: "Learn from scholars and experience inner reflection",
      icon: "📿",
      details: [
        "Talks with spiritual leaders",
        "Faith-based philosophy workshops",
        "Personal reflection journaling",
        "Sacred music & chants exposure"
      ],
      timeline: "Day 4-5"
    },
    {
      id: 4,
      phase: "Day 6-7",
      title: "Cultural Harmony",
      description: "Connect religion with culture and community",
      icon: "🕊️",
      details: [
        "Interfaith dialogue sessions",
        "Religious art and architecture tours",
        "Traditional spiritual meals",
        "Volunteer service at sacred sites"
      ],
      timeline: "Day 6-7"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Blessed Farewell",
      description: "Conclude your journey with spiritual fulfillment",
      icon: "🙏",
      details: [
        "Farewell prayer and blessings",
        "Souvenir from holy sites",
        "Final reflection group circle",
        "Certificate of pilgrimage"
      ],
      timeline: "Final Day"
    }
  ],

  natural: [
    {
      id: 1,
      phase: "Day 1",
      title: "Nature's Welcome",
      description: "Ease into your adventure surrounded by serene beauty",
      icon: "🏕️",
      details: [
        "Scenic welcome point arrival",
        "Campfire orientation",
        "Eco-lodge check-in",
        "Evening stargazing session"
      ],
      timeline: "Day 1 - Night"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Nature Immersion",
      description: "Discover forests, rivers, and native ecosystems",
      icon: "🌲",
      details: [
        "Guided forest hikes",
        "Bird watching & photography",
        "River kayaking sessions",
        "Local flora & fauna briefing"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-5",
      title: "Geological Wonders",
      description: "Marvel at landscapes shaped by time",
      icon: "🪨",
      details: [
        "Canyon and valley explorations",
        "Natural cave tours",
        "Geology and conservation talks",
        "Rock formation photography"
      ],
      timeline: "Day 4-5"
    },
    {
      id: 4,
      phase: "Day 6-7",
      title: "Eco Discovery",
      description: "Understand sustainability and nature preservation",
      icon: "🌍",
      details: [
        "Visit eco-farms & greenhouses",
        "Sustainable living workshops",
        "Eco-friendly meals & cooking",
        "Tree planting & clean-up drives"
      ],
      timeline: "Day 6-7"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Nature Reflection",
      description: "Embrace your connection to the Earth",
      icon: "🌳",
      details: [
        "Sunrise yoga in nature",
        "Nature journal reflections",
        "Group gratitude circle",
        "Eco-certification ceremony"
      ],
      timeline: "Final Day"
    }
  ],

  resorts: [
    {
      id: 1,
      phase: "Day 1",
      title: "Luxury Check-In",
      description: "Start your relaxing stay with five-star comfort",
      icon: "🏨",
      details: [
        "Resort welcome drink",
        "Spa tour & orientation",
        "Room service indulgence",
        "Evening poolside dinner"
      ],
      timeline: "Day 1 - Afternoon"
    },
    {
      id: 2,
      phase: "Day 2-3",
      title: "Relax & Recharge",
      description: "Indulge in world-class spa and leisure facilities",
      icon: "💆‍♀️",
      details: [
        "Daily spa treatments",
        "Thermal baths & hydrotherapy",
        "Private beach or pool relaxation",
        "Health bar & organic snacks"
      ],
      timeline: "Day 2-3"
    },
    {
      id: 3,
      phase: "Day 4-5",
      title: "Resort Adventures",
      description: "Explore activities within the resort environment",
      icon: "🎯",
      details: [
        "Golf or tennis sessions",
        "Outdoor yoga or fitness classes",
        "Resort-based excursions",
        "Evening entertainment shows"
      ],
      timeline: "Day 4-5"
    },
    {
      id: 4,
      phase: "Day 6-7",
      title: "Custom Experiences",
      description: "Personalize your stay with tailored services",
      icon: "🛎️",
      details: [
        "Private butler & concierge service",
        "Custom dining experiences",
        "Personalized spa packages",
        "VIP beach cabana access"
      ],
      timeline: "Day 6-7"
    },
    {
      id: 5,
      phase: "Final Day",
      title: "Farewell Indulgence",
      description: "Savor your final moments in comfort",
      icon: "🍾",
      details: [
        "Late check-out relaxation",
        "Farewell brunch buffet",
        "Memories video recap",
        "Luxury gift takeaway"
      ],
      timeline: "Final Day"
    }
  ]
}

// trips compani1 Dummy Data
export const tripsDummyData = [
        {
         "_id": "67f7647c197ac559e4089b96",
        "images": [Img11,Img12,Img13,Img14],
        "TripPrice": 199,
        "rating": 4.9,
        "adults": 3, // 1-3 people
        "catogery":"Adventure",
        "description": "Immerse yourself in luxury with this downtown penthouse featuring panoramic city views.",
        "amenities": ["Wi-Fi", "Breakfast", "Pool", "Mountain View"],
        "name": "Urban Penthouse",
        "city": "Amman",
        "address": "789 Broadway Ave, New York, NY",
        "isAvailable": true,
        "Compani":companiDummyData,
        "chickin":"23-7-2025",
        "chickout":"30-7-2025",
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    
    },

    {
        "_id": "67f76452197ac559e4089b8e",
       "images": [Img21,Img22,Img23,Img24],
        "TripPrice": 199,
        "rating": 4.9,
        "adults": 6, // 4-6 people
        "catogery":"Adventure",
        "description": "Immerse yourself in luxury with this downtown penthouse featuring panoramic city views.",
        "amenities": ["Wi-Fi", "Breakfast", "Pool", "Mountain View"],
        "name": "Urban Penthouse",
        "city": "Amman",
        "address": "789 Broadway Ave, New York, NY",
        "isAvailable": true,
        "Compani":companiDummyData,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "images": [Img31,Img32,Img33,Img34],
        "TripPrice": 199,
        "rating": 4.9,
        "adults": 9, // 7-9 people
        "catogery":"Resorts",
        "description": "Immerse yourself in luxury with this downtown penthouse featuring panoramic city views.",
        "amenities": ["Wi-Fi", "Breakfast", "Pool", "Mountain View"],
        "name": "Urban Penthouse",
        "city": "Aqaba",
        "address": "789 Broadway Ave, New York, NY",
        "isAvailable": true,
        "Compani":companiDummyData,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "images": [Img41,Img42,Img43,Img44],
        "TripPrice": 199,
        "rating": 4.9,
        "adults": 12, // 10+ people
        "catogery":"Cultural",
        "description": "Immerse yourself in luxury with this downtown penthouse featuring panoramic city views.",
        "amenities": ["Wi-Fi", "Breakfast", "Pool", "Mountain View"],
        "name": "Urban Penthouse",
        "city": "Amman",
        "address": "789 Broadway Ave, New York, NY",
        "isAvailable": true,
        "Compani":companiDummyData,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "trip": tripsDummyData[1],
        "compani": companiDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "adults": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "trip": tripsDummyData[0],
        "hotel": companiDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "adults": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "trip": tripsDummyData[3],
        "hotel": companiDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "adults": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}
