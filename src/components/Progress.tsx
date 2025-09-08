import React, { useState } from 'react';
import { Calendar, TrendingUp, Target, Award, Book, CheckCircle, Clock, Star } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  const progressData = {
    week: {
      ecoPoints: 350,
      lessonsCompleted: 3,
      challengesCompleted: 1,
      quizzesPassed: 2,
      target: 500,
      streak: 5
    },
    month: {
      ecoPoints: 1250,
      lessonsCompleted: 12,
      challengesCompleted: 3,
      quizzesPassed: 8,
      target: 1500,
      streak: 15
    },
    year: {
      ecoPoints: 5420,
      lessonsCompleted: 48,
      challengesCompleted: 12,
      quizzesPassed: 32,
      target: 6000,
      streak: 45
    }
  };

  const currentData = progressData[selectedPeriod];

  const achievements = [
    {
      id: 1,
      title: 'Eco Warrior',
      description: 'Complete 10 environmental challenges',
      icon: Award,
      progress: 80,
      current: 8,
      target: 10,
      completed: false,
      color: 'yellow',
      ecoPoints: 200
    },
    {
      id: 2,
      title: 'Knowledge Seeker',
      description: 'Complete 50 lessons',
      icon: Book,
      progress: 96,
      current: 48,
      target: 50,
      completed: false,
      color: 'blue',
      ecoPoints: 300
    },
    {
      id: 3,
      title: 'Perfect Score',
      description: 'Score 100% on 5 quizzes',
      icon: Star,
      progress: 100,
      current: 5,
      target: 5,
      completed: true,
      color: 'green',
      ecoPoints: 150
    },
    {
      id: 4,
      title: 'Consistency Champion',
      description: 'Maintain a 30-day learning streak',
      icon: TrendingUp,
      progress: 50,
      current: 15,
      target: 30,
      completed: false,
      color: 'purple',
      ecoPoints: 250
    }
  ];

  const weeklyData = [
    { day: 'Mon', ecoPoints: 45, lessons: 1, quizzes: 0, challenges: 0 },
    { day: 'Tue', ecoPoints: 80, lessons: 2, quizzes: 1, challenges: 0 },
    { day: 'Wed', ecoPoints: 120, lessons: 1, quizzes: 1, challenges: 1 },
    { day: 'Thu', ecoPoints: 60, lessons: 1, quizzes: 0, challenges: 0 },
    { day: 'Fri', ecoPoints: 100, lessons: 2, quizzes: 1, challenges: 0 },
    { day: 'Sat', ecoPoints: 150, lessons: 3, quizzes: 2, challenges: 0 },
    { day: 'Sun', ecoPoints: 90, lessons: 2, quizzes: 1, challenges: 0 }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'lesson',
      title: 'Completed "Water Conservation Techniques"',
      ecoPoints: 50,
      timestamp: '2 hours ago',
      icon: Book
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Scored 95% on Climate Change Quiz',
      ecoPoints: 75,
      timestamp: '1 day ago',
      icon: CheckCircle
    },
    {
      id: 3,
      type: 'challenge',
      title: 'Joined Waste Segregation Drive',
      ecoPoints: 0,
      timestamp: '3 days ago',
      icon: Target
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Earned "Perfect Score" badge',
      ecoPoints: 150,
      timestamp: '5 days ago',
      icon: Award
    }
  ];

  const maxPoints = Math.max(...weeklyData.map(d => d.ecoPoints));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Progress</h1>
            <p className="mt-2 text-gray-600">Track your learning journey and achievements</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {['week', 'month', 'year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                    selectedPeriod === period
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">EcoPoints Earned</p>
              <h3 className="text-3xl font-bold mt-1">{currentData.ecoPoints.toLocaleString()}</h3>
            </div>
            <Star className="w-12 h-12 text-blue-200" />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-blue-100">
              <span>Target: {currentData.target.toLocaleString()}</span>
              <span>{Math.round((currentData.ecoPoints / currentData.target) * 100)}%</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((currentData.ecoPoints / currentData.target) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Lessons Completed</p>
              <h3 className="text-2xl font-bold mt-1">{currentData.lessonsCompleted}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Book className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            +{Math.round(currentData.lessonsCompleted * 0.2)} from last {selectedPeriod}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Challenges Completed</p>
              <h3 className="text-2xl font-bold mt-1">{currentData.challengesCompleted}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            +{currentData.challengesCompleted} this {selectedPeriod}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Learning Streak</p>
              <h3 className="text-2xl font-bold mt-1">{currentData.streak} days</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4 inline mr-1" />
            Keep it up!
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Charts and Activity */}
        <div className="lg:col-span-2 space-y-8">
          {/* Weekly Activity Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Weekly Activity</h3>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(day.ecoPoints / maxPoints) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-12">
                        {day.ecoPoints}
                      </span>
                    </div>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span className="mr-3">{day.lessons} lessons</span>
                      <span className="mr-3">{day.quizzes} quizzes</span>
                      <span>{day.challenges} challenges</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activity.type === 'lesson' ? 'bg-blue-100' :
                    activity.type === 'quiz' ? 'bg-green-100' :
                    activity.type === 'challenge' ? 'bg-purple-100' :
                    'bg-yellow-100'
                  }`}>
                    <activity.icon className={`w-5 h-5 ${
                      activity.type === 'lesson' ? 'text-blue-600' :
                      activity.type === 'quiz' ? 'text-green-600' :
                      activity.type === 'challenge' ? 'text-purple-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">{activity.timestamp}</span>
                      {activity.ecoPoints > 0 && (
                        <>
                          <span className="text-xs text-gray-400 mx-1">•</span>
                          <span className="text-xs font-medium text-green-600">
                            +{activity.ecoPoints} EcoPoints
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Achievements */}
        <div className="space-y-6">
          {/* Progress Circle */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Goal</h3>
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    className="text-gray-200" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    className="text-blue-500" 
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentData.ecoPoints / currentData.target)}`}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold">
                    {Math.round((currentData.ecoPoints / currentData.target) * 100)}%
                  </span>
                  <span className="text-xs text-gray-500">Complete</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {currentData.ecoPoints}/{currentData.target}
              </div>
              <div className="text-sm text-gray-500">EcoPoints</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`p-4 rounded-lg border-2 ${
                  achievement.completed 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      achievement.completed 
                        ? 'bg-green-500' 
                        : `bg-${achievement.color}-100`
                    }`}>
                      <achievement.icon className={`w-6 h-6 ${
                        achievement.completed 
                          ? 'text-white' 
                          : `text-${achievement.color}-600`
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        {achievement.completed && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {achievement.current}/{achievement.target}
                        </span>
                        <span className="text-xs font-medium text-blue-600">
                          +{achievement.ecoPoints} EcoPoints
                        </span>
                      </div>
                      {!achievement.completed && (
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div 
                            className={`bg-${achievement.color}-500 h-1.5 rounded-full transition-all duration-500`}
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
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

export default Progress;