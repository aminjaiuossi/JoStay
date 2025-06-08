import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Filter, Download, PieChart, RefreshCw, Users, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

// Sample data - replace with your actual data fetching logic
const companiesData = [
  { id: 1, name: 'Adventure Tours', profits: 125000, bookings: 450, avgRating: 4.7, region: 'Amman' },
  { id: 2, name: 'Luxury Escapes', profits: 210000, bookings: 320, avgRating: 4.9, region: 'Aqaba' },
  { id: 3, name: 'Budget Travels', profits: 87000, bookings: 620, avgRating: 4.2, region: 'Irbid' },
  { id: 4, name: 'Family Vacations', profits: 162000, bookings: 380, avgRating: 4.5, region: 'Petra' },
  { id: 5, name: 'Exotic Getaways', profits: 195000, bookings: 290, avgRating: 4.8, region: 'Jerash' },
  { id: 6, name: 'Desert Adventures', profits: 145000, bookings: 410, avgRating: 4.6, region: 'Madaba' },
  { id: 7, name: 'Historical Tours', profits: 176000, bookings: 350, avgRating: 4.4, region: 'Karak' },
  { id: 8, name: 'Jordan Explorers', profits: 152000, bookings: 390, avgRating: 4.3, region: 'Zarqa' },
  { id: 9, name: 'Petra Wonders', profits: 185000, bookings: 330, avgRating: 4.7, region: 'Petra' },
  { id: 10, name: 'Dead Sea Relaxation', profits: 220000, bookings: 270, avgRating: 4.9, region: 'Balqa' }
];

const monthlyData = [
  { month: 'Jan', profits: 58000, bookings: 210 },
  { month: 'Feb', profits: 65000, bookings: 230 },
  { month: 'Mar', profits: 78000, bookings: 280 },
  { month: 'Apr', profits: 90000, bookings: 310 },
  { month: 'May', profits: 105000, bookings: 340 },
  { month: 'Jun', profits: 125000, bookings: 390 }
];

export default function AdminDashboard() {
  const [companies, setCompanies] = useState(companiesData);
  const [filter, setFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  const totalProfits = companies.reduce((sum, company) => sum + company.profits, 0);
  const totalBookings = companies.reduce((sum, company) => sum + company.bookings, 0);
  const avgRating = companies.reduce((sum, company) => sum + company.avgRating, 0) / companies.length;
  
  const handleFilterChange = (newFilter) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (newFilter === 'all') {
        setCompanies(companiesData);
      } else {
        const filtered = companiesData.filter(company => company.region === newFilter);
        setCompanies(filtered);
      }
      setFilter(newFilter);
      setIsLoading(false);
    }, 500);
  };
  
  // Function to convert data to CSV
  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    
    // Add headers
    const headers = Object.keys(array[0]);
    str += headers.join(',') + '\r\n';
    
    // Add rows
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headers) {
        if (line !== '') line += ',';
        line += array[i][headers[index]];
      }
      str += line + '\r\n';
    }
    return str;
  };
  
  // Function to download CSV
  const downloadCSV = (csvData, fileName) => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Handle export data button click
  const handleExportData = () => {
    setIsExporting(true);
    
    // Simulate processing time
    setTimeout(() => {
      const dataToExport = filter === 'all' ? companiesData : companies;
      const csvData = convertToCSV(dataToExport);
      downloadCSV(csvData, `trip-admin-data-${filter}-${new Date().toISOString().slice(0, 10)}.csv`);
      setIsExporting(false);
    }, 1000);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-playfair text-3xl font-bold text-gray-900">Trip Admin Dashboard</h1>
            <div className="flex space-x-4">
              <button 
                onClick={handleExportData}
                disabled={isExporting}
                className={`bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded flex items-center space-x-2 ${isExporting ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {isExporting ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Exporting...</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>Export Data</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Profits</p>
                <p className="text-2xl font-bold">${totalProfits.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="text-green-600" size={20} />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-xs text-green-500 ml-1">+15% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Bookings</p>
                <p className="text-2xl font-bold">{totalBookings.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-xs text-green-500 ml-1">+8% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Avg. Rating</p>
                <p className="text-2xl font-bold">{avgRating.toFixed(1)}/5.0</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-xs text-green-500 ml-1">+0.2 from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Companies</p>
                <p className="text-2xl font-bold">{companies.length}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Briefcase className="text-purple-600" size={20} />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-xs text-gray-500 ml-1">All active companies</span>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-500" />
              <span className="font-medium">Filter by city:</span>
              <div className="flex flex-wrap space-x-2 gap-y-2">
                <button 
                  onClick={() => handleFilterChange('all')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'all' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => handleFilterChange('Amman')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Amman' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Amman
                </button>
                <button 
                  onClick={() => handleFilterChange('Irbid')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Irbid' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Irbid
                </button>
                <button 
                  onClick={() => handleFilterChange('Balqa')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Balqa' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Balqa
                </button>
                <button 
                  onClick={() => handleFilterChange('Zarqa')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Zarqa' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Zarqa
                </button>
                <button 
                  onClick={() => handleFilterChange('Madaba')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Madaba' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Madaba
                </button>
                <button 
                  onClick={() => handleFilterChange('Karak')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Karak' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Karak
                </button>
                <button 
                  onClick={() => handleFilterChange('Aqaba')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Aqaba' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Aqaba
                </button>
                <button 
                  onClick={() => handleFilterChange('Jerash')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Jerash' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Jerash
                </button>
                <button 
                  onClick={() => handleFilterChange('Petra')}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm ${filter === 'Petra' ? 'bg-blue-100 text-orange-400 cursor-pointer' : 'bg-gray-100'}`}
                >
                  Petra
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Profit by Company</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <RefreshCw size={24} className="animate-spin text-blue-600" />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={companies}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="profits" name="Profits ($)" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Monthly Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="profits" name="Profits ($)" stroke="#3b82f6" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="bookings" name="Bookings" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Companies Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">Companies Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {companies.map((company) => (
                  <tr key={company.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{company.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">${company.profits.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{company.bookings}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-gray-900 mr-2">{company.avgRating}</span>
                        <div className="flex">
                          {[...Array(Math.floor(company.avgRating))].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {company.region}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{companies.length}</span> companies
              </div>
              <div className="flex space-x-2">
                <button className="cursor-pointer px-3 py-1 border rounded text-sm">Previous</button>
                <button className="px-3 py-1 border rounded bg-orange-400 text-white text-sm">1</button>
                <button className="cursor-pointer px-3 py-1 border rounded text-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}