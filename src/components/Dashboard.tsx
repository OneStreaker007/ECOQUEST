import React from 'react';
import { Star, Book, Award, TrendingUp, Clock, BarChart2, Zap, Droplet, Repeat, Trees as Tree, Sun } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, Kamran!</h2>
            <p className="max-w-2xl">You've earned 350 EcoPoints this week. Keep up the good work and complete today's challenge to earn more!</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Today's Challenge
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">EcoPoints</p>
              <h3 className="text-2xl font-bold mt-1">1,250</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Weekly Target: 500</span>
              <span>250%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed Lessons</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Book className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>This Month: 5</span>
              <span>+25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Challenges</p>
              <h3 className="text-2xl font-bold mt-1">3</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Completed: 8</span>
              <span>+60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">School Rank</p>
              <h3 className="text-2xl font-bold mt-1">#5</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Total Schools: 42</span>
              <span>Top 12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Challenge */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Current Challenge</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-full md:w-1/3">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1" alt="Challenge" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Waste Segregation Drive</h4>
                  <p className="text-gray-600 mb-4">Learn how to properly segregate waste and implement it in your school or home for one week.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">+150 EcoPoints</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Sustainability</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>3 days remaining</span>
                    <span>2/5 tasks completed</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Continue Challenge
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Lessons */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recommended Lessons</h3>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View All</a>
            </div>
            <div className="divide-y">
              {[
                {
                  icon: Droplet,
                  title: 'Water Conservation',
                  description: 'Learn about water scarcity and practical ways to conserve water in daily life.',
                  duration: '15 min',
                  level: 'Intermediate',
                  color: 'blue'
                },
                {
                  icon: Zap,
                  title: 'Renewable Energy',
                  description: 'Explore different types of renewable energy sources and their importance.',
                  duration: '20 min',
                  level: 'Beginner',
                  color: 'green'
                },
                {
                  icon: Repeat,
                  title: 'Sustainable Shopping',
                  description: 'How to make environmentally friendly choices when shopping for daily needs.',
                  duration: '10 min',
                  level: 'Beginner',
                  color: 'yellow'
                }
              ].map((lesson, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-${lesson.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <lesson.icon className={`w-6 h-6 text-${lesson.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{lesson.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">{lesson.duration}</span>
                        <BarChart2 className="w-4 h-4 mr-1" />
                        <span>{lesson.level}</span>
                      </div>
                    </div>
                    <button className="ml-auto px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition-colors">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    className="text-green-500" 
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.65)}`}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold">65%</span>
                  <span className="text-xs text-gray-500">Monthly Goal</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Lessons Completed', value: '12/20', progress: 60, color: 'blue' },
                { label: 'Challenges Completed', value: '8/12', progress: 66, color: 'purple' },
                { label: 'Quizzes Passed', value: '7/10', progress: 70, color: 'yellow' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className={`bg-${item.color}-600 h-2 rounded-full`} style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Badges */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Badges</h3>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View All</a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, name: 'Eco Warrior', color: 'yellow' },
                { icon: Zap, name: 'Energy Saver', color: 'green' },
                { icon: Droplet, name: 'Water Guardian', color: 'blue' },
                { icon: Repeat, name: 'Recycler', color: 'purple' },
                { icon: Tree, name: 'Tree Hugger', color: 'red' },
                { icon: Sun, name: 'Solar Champion', color: 'indigo' }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 bg-${badge.color}-100 rounded-full flex items-center justify-center mb-2`}>
                    <badge.icon className={`w-6 h-6 text-${badge.color}-600`} />
                  </div>
                  <span className="text-xs font-medium text-center">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* School Leaderboard */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">School Leaderboard</h3>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { rank: 1, name: 'Green Valley Public School', points: '5,200', avatar: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', isYou: false },
                { rank: 2, name: 'Sunshine International', points: '4,850', avatar: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', isYou: false },
                { rank: 3, name: 'Earth Guardians Academy', points: '4,600', avatar: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', isYou: false },
                { rank: 4, name: 'Nature\'s Wisdom School', points: '4,200', avatar: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', isYou: false },
                { rank: 5, name: 'Delhi Public School', points: '3,750', avatar: 'https://images.pexels.com/photos/159844/paperclip-learn-education-school-159844.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', isYou: true }
              ].map((school, index) => (
                <div key={index} className={`flex items-center ${school.isYou ? 'bg-blue-50 p-2 rounded-lg' : ''}`}>
                  <div className={`w-8 h-8 ${school.rank === 1 ? 'bg-yellow-100' : school.rank === 2 ? 'bg-gray-200' : school.rank === 3 ? 'bg-amber-100' : school.isYou ? 'bg-blue-100' : 'bg-white'} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                    <span className={`${school.rank === 1 ? 'text-yellow-800' : school.rank === 2 ? 'text-gray-800' : school.rank === 3 ? 'text-amber-800' : school.isYou ? 'text-blue-800' : 'text-gray-800'} font-bold text-sm`}>
                      {school.rank}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{school.name}</p>
                    <p className="text-xs text-gray-500">{school.points} EcoPoints</p>
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={school.avatar} alt="School" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;