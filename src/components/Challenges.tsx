import React, { useState } from 'react';
import { Calendar, Users, Trophy, Clock, Target, CheckCircle, Star } from 'lucide-react';

const Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'available'>('active');

  const challenges = [
    {
      id: 1,
      title: 'Waste Segregation Drive',
      description: 'Learn and implement proper waste segregation techniques for one week.',
      category: 'Sustainability',
      difficulty: 'Beginner',
      duration: 7,
      participants: 1234,
      ecoPoints: 150,
      status: 'active',
      progress: 40,
      tasksCompleted: 2,
      totalTasks: 5,
      daysRemaining: 3,
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      tasks: [
        { id: 1, title: 'Learn about waste types', completed: true },
        { id: 2, title: 'Set up segregation bins', completed: true },
        { id: 3, title: 'Practice segregation daily', completed: false },
        { id: 4, title: 'Share progress with community', completed: false },
        { id: 5, title: 'Submit final report', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Energy Conservation Week',
      description: 'Reduce your energy consumption by 20% for one week.',
      category: 'Energy',
      difficulty: 'Intermediate',
      duration: 7,
      participants: 856,
      ecoPoints: 200,
      status: 'available',
      progress: 0,
      tasksCompleted: 0,
      totalTasks: 6,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 3,
      title: 'Plant a Tree Campaign',
      description: 'Plant and care for a tree in your community.',
      category: 'Environment',
      difficulty: 'Beginner',
      duration: 30,
      participants: 2156,
      ecoPoints: 300,
      status: 'completed',
      progress: 100,
      tasksCompleted: 4,
      totalTasks: 4,
      completedDate: '2024-01-15',
      score: 95,
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 4,
      title: 'Water Conservation Challenge',
      description: 'Implement water-saving techniques and track your usage.',
      category: 'Water',
      difficulty: 'Intermediate',
      duration: 14,
      participants: 1543,
      ecoPoints: 250,
      status: 'available',
      progress: 0,
      tasksCompleted: 0,
      totalTasks: 7,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 5,
      title: 'Plastic-Free Month',
      description: 'Go plastic-free for 30 days and find sustainable alternatives.',
      category: 'Sustainability',
      difficulty: 'Advanced',
      duration: 30,
      participants: 678,
      ecoPoints: 500,
      status: 'available',
      progress: 0,
      tasksCompleted: 0,
      totalTasks: 10,
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    }
  ];

  const activeChallenges = challenges.filter(c => c.status === 'active');
  const completedChallenges = challenges.filter(c => c.status === 'completed');
  const availableChallenges = challenges.filter(c => c.status === 'available');

  const totalEcoPoints = completedChallenges.reduce((sum, challenge) => sum + challenge.ecoPoints, 0);

  const joinChallenge = (challengeId: number) => {
    // Simulate joining a challenge
    console.log('Joining challenge:', challengeId);
  };

  const renderChallengeCard = (challenge: any) => (
    <div key={challenge.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {challenge.difficulty}
          </span>
        </div>
        {challenge.status === 'completed' && (
          <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {challenge.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{challenge.duration} days</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{challenge.participants}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
            <span>{challenge.ecoPoints} pts</span>
          </div>
        </div>

        {challenge.status === 'active' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-900">
                {challenge.tasksCompleted}/{challenge.totalTasks} tasks
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${challenge.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>{challenge.daysRemaining} days remaining</span>
            </div>
          </div>
        )}

        {challenge.status === 'completed' && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-green-800">Completed on:</span>
              <span className="text-sm text-green-600">{challenge.completedDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-800">Your Score:</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="text-lg font-bold text-green-600">{challenge.score}%</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => joinChallenge(challenge.id)}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            challenge.status === 'active' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : challenge.status === 'completed'
              ? 'bg-green-100 text-green-800 hover:bg-green-200'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {challenge.status === 'active' 
            ? 'Continue Challenge' 
            : challenge.status === 'completed'
            ? 'View Details'
            : 'Join Challenge'
          }
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Challenges</h1>
            <p className="mt-2 text-gray-600">
              {completedChallenges.length} challenges completed, {activeChallenges.length} in progress
            </p>
          </div>
          <div className="mt-4 sm:mt-0 grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600">{totalEcoPoints}</div>
              <div className="text-sm text-gray-500">Points Earned</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-blue-600">{activeChallenges.length}</div>
              <div className="text-sm text-gray-500">Active</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-purple-600">{completedChallenges.length}</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-8">
          {[
            { key: 'active', label: 'Active', count: activeChallenges.length },
            { key: 'available', label: 'Available', count: availableChallenges.length },
            { key: 'completed', label: 'Completed', count: completedChallenges.length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'active' && activeChallenges.map(renderChallengeCard)}
        {activeTab === 'available' && availableChallenges.map(renderChallengeCard)}
        {activeTab === 'completed' && completedChallenges.map(renderChallengeCard)}
      </div>

      {/* Active Challenge Detail */}
      {activeTab === 'active' && activeChallenges.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Challenge Progress</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">{activeChallenges[0].title}</h3>
            <div className="space-y-3">
              {activeChallenges[0].tasks?.map((task) => (
                <div key={task.id} className={`flex items-center p-3 rounded-lg ${
                  task.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                    task.completed ? 'bg-green-500' : 'border-2 border-gray-300'
                  }`}>
                    {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <span className={task.completed ? 'text-green-800 font-medium' : 'text-gray-700'}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;