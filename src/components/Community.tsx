import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Users, Trophy, TrendingUp, Star, Calendar, MapPin } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'events'>('feed');

  const posts = [
    {
      id: 1,
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        school: 'Green Valley School',
        ecoPoints: 1450
      },
      content: 'Just completed the Waste Segregation Drive! 🌱 Learned so much about proper waste management. My family is now segregating waste at home too!',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      challenge: 'Waste Segregation Drive'
    },
    {
      id: 2,
      user: {
        name: 'Arjun Patel',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        school: 'Sunshine International',
        ecoPoints: 1820
      },
      content: 'Amazing lesson on Solar Energy! Did you know a single solar panel can power a household for days? Check out my notes and let me know what you think! 💡',
      timestamp: '4 hours ago',
      likes: 18,
      comments: 12,
      shares: 5,
      lesson: 'Solar Energy Fundamentals'
    },
    {
      id: 3,
      user: {
        name: 'Meera Gupta',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        school: 'Earth Guardians Academy',
        ecoPoints: 2100
      },
      content: 'Our school planted 50 trees this weekend! 🌳 So proud of our environmental club. Who else is participating in the Plant a Tree campaign?',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      timestamp: '1 day ago',
      likes: 42,
      comments: 15,
      shares: 8,
      challenge: 'Plant a Tree Campaign'
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Meera Gupta',
      school: 'Earth Guardians Academy',
      ecoPoints: 2100,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      badge: 'Eco Champion',
      trend: '+15%'
    },
    {
      rank: 2,
      name: 'Arjun Patel',
      school: 'Sunshine International',
      ecoPoints: 1820,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      badge: 'Energy Expert',
      trend: '+12%'
    },
    {
      rank: 3,
      name: 'Priya Sharma',
      school: 'Green Valley School',
      ecoPoints: 1450,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      badge: 'Waste Warrior',
      trend: '+8%'
    },
    {
      rank: 4,
      name: 'Raj Kumar',
      school: 'Nature\'s Wisdom School',
      ecoPoints: 1320,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      badge: 'Water Guardian',
      trend: '+10%'
    },
    {
      rank: 5,
      name: 'Kamran Alvi',
      school: 'Delhi Public School',
      ecoPoints: 1250,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      badge: 'Eco Learner',
      trend: '+5%',
      isYou: true
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Earth Day Celebration 2024',
      description: 'Join schools across the country in celebrating Earth Day with various environmental activities.',
      date: '2024-04-22',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual & Local Schools',
      participants: 2500,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      type: 'Global Event'
    },
    {
      id: 2,
      title: 'Clean Water Initiative Workshop',
      description: 'Learn about water purification techniques and how to implement them in your community.',
      date: '2024-02-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Online',
      participants: 180,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Renewable Energy Fair',
      description: 'Showcase your renewable energy projects and learn from other young innovators.',
      date: '2024-03-10',
      time: '9:00 AM - 6:00 PM',
      location: 'Delhi Science Museum',
      participants: 450,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      type: 'Competition'
    }
  ];

  const handleLike = (postId: number) => {
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: number) => {
    console.log('Comment on post:', postId);
  };

  const handleShare = (postId: number) => {
    console.log('Shared post:', postId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
        <p className="text-gray-600">Connect with fellow eco-warriors and share your sustainability journey</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">12,450</div>
          <div className="text-sm text-gray-500">Active Members</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">1,234</div>
          <div className="text-sm text-gray-500">Posts This Week</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-500">Upcoming Events</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">856</div>
          <div className="text-sm text-gray-500">Challenges Active</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-8">
          {[
            { key: 'feed', label: 'Community Feed', icon: MessageCircle },
            { key: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { key: 'events', label: 'Events', icon: Calendar }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {activeTab === 'feed' && (
          <>
            {/* Posts Feed */}
            <div className="lg:col-span-2 space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.user.school}</span>
                          <span className="mx-1">•</span>
                          <span>{post.user.ecoPoints} EcoPoints</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  {/* Challenge/Lesson Tag */}
                  {(post.challenge || post.lesson) && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.challenge || post.lesson}
                      </span>
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Heart className="w-5 h-5 mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button
                      onClick={() => handleComment(post.id)}
                      className="flex items-center text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span>{post.comments}</span>
                    </button>
                    <button
                      onClick={() => handleShare(post.id)}
                      className="flex items-center text-gray-500 hover:text-green-500 transition-colors"
                    >
                      <Share2 className="w-5 h-5 mr-1" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {leaderboard.slice(0, 3).map((user) => (
                    <div key={user.rank} className="flex items-center">
                      <div className={`w-8 h-8 ${
                        user.rank === 1 ? 'bg-yellow-100' : 
                        user.rank === 2 ? 'bg-gray-200' : 'bg-amber-100'
                      } rounded-full flex items-center justify-center mr-3`}>
                        <span className={`text-sm font-bold ${
                          user.rank === 1 ? 'text-yellow-800' : 
                          user.rank === 2 ? 'text-gray-800' : 'text-amber-800'
                        }`}>
                          {user.rank}
                        </span>
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.ecoPoints} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Challenges */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Trending Challenges</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-sm text-blue-900">Waste Segregation Drive</div>
                    <div className="text-xs text-blue-600">1,234 participants</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-sm text-green-900">Plant a Tree Campaign</div>
                    <div className="text-xs text-green-600">856 participants</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium text-sm text-purple-900">Energy Conservation Week</div>
                    <div className="text-xs text-purple-600">678 participants</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'leaderboard' && (
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Community Leaderboard</h3>
                <p className="text-sm text-gray-600 mt-1">Top eco-warriors in our community</p>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`p-6 ${user.isYou ? 'bg-blue-50' : ''}`}>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${
                        user.rank === 1 ? 'bg-yellow-100' : 
                        user.rank === 2 ? 'bg-gray-200' : 
                        user.rank === 3 ? 'bg-amber-100' : 
                        user.isYou ? 'bg-blue-100' : 'bg-gray-100'
                      } rounded-full flex items-center justify-center mr-4`}>
                        <span className={`text-lg font-bold ${
                          user.rank === 1 ? 'text-yellow-800' : 
                          user.rank === 2 ? 'text-gray-800' : 
                          user.rank === 3 ? 'text-amber-800' : 
                          user.isYou ? 'text-blue-800' : 'text-gray-600'
                        }`}>
                          {user.rank}
                        </span>
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900">{user.name}</h4>
                          {user.isYou && (
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">You</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.school}</p>
                        <div className="flex items-center mt-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {user.badge}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{user.ecoPoints.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">EcoPoints</div>
                        <div className="flex items-center mt-1 text-green-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{user.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Global Event' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Join Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;