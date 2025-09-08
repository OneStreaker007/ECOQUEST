import React, { useState } from 'react';
import { Clock, Star, Play, CheckCircle, BookOpen, Search, Filter } from 'lucide-react';

const Lessons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'climate', name: 'Climate Change' },
    { id: 'energy', name: 'Renewable Energy' },
    { id: 'water', name: 'Water Conservation' },
    { id: 'waste', name: 'Waste Management' },
    { id: 'biodiversity', name: 'Biodiversity' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Climate Change',
      description: 'Understanding the basics of climate change, its causes, and global impacts.',
      duration: 25,
      level: 'beginner',
      category: 'climate',
      completed: true,
      rating: 4.8,
      students: 1234,
      image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 2,
      title: 'Solar Energy Fundamentals',
      description: 'Learn how solar panels work and their role in sustainable energy production.',
      duration: 30,
      level: 'intermediate',
      category: 'energy',
      completed: false,
      rating: 4.9,
      students: 856,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 3,
      title: 'Water Conservation Techniques',
      description: 'Practical methods to conserve water at home, school, and in agriculture.',
      duration: 20,
      level: 'beginner',
      category: 'water',
      completed: true,
      rating: 4.7,
      students: 2156,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 4,
      title: 'Plastic Pollution Crisis',
      description: 'Understanding the impact of plastic pollution on marine life and ecosystems.',
      duration: 35,
      level: 'intermediate',
      category: 'waste',
      completed: false,
      rating: 4.6,
      students: 934,
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 5,
      title: 'Biodiversity and Ecosystems',
      description: 'Explore the importance of biodiversity and how to protect endangered species.',
      duration: 40,
      level: 'advanced',
      category: 'biodiversity',
      completed: false,
      rating: 4.9,
      students: 678,
      image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 6,
      title: 'Wind Energy Systems',
      description: 'How wind turbines generate electricity and their environmental benefits.',
      duration: 28,
      level: 'intermediate',
      category: 'energy',
      completed: false,
      rating: 4.5,
      students: 1045,
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    }
  ];

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || lesson.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const completedLessons = lessons.filter(lesson => lesson.completed).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lessons</h1>
            <p className="mt-2 text-gray-600">
              {completedLessons} of {lessons.length} lessons completed
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{completedLessons * 50}</div>
                <div className="text-sm text-gray-500">EcoPoints Earned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm font-medium text-gray-900">
              {Math.round((completedLessons / lessons.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedLessons / lessons.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full h-48 object-cover"
              />
              {lesson.completed && (
                <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                </div>
              )}
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  lesson.level === 'beginner' ? 'bg-green-100 text-green-800' :
                  lesson.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{lesson.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{lesson.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{lesson.duration} min</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                  <span>{lesson.rating}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{lesson.students}</span>
                </div>
              </div>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                  lesson.completed
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {lesson.completed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Review Lesson
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start Lesson
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No lessons found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Lessons;