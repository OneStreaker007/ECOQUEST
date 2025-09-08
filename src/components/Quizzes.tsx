import React, { useState } from 'react';
import { Trophy, Clock, CheckCircle, AlertCircle, Play, RotateCcw } from 'lucide-react';

const Quizzes: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const quizzes = [
    {
      id: 1,
      title: 'Climate Change Basics',
      description: 'Test your understanding of climate change fundamentals',
      questions: 10,
      timeLimit: 15,
      difficulty: 'Beginner',
      completed: true,
      score: 85,
      ecoPoints: 50,
      image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 2,
      title: 'Renewable Energy Quiz',
      description: 'How much do you know about clean energy sources?',
      questions: 15,
      timeLimit: 20,
      difficulty: 'Intermediate',
      completed: false,
      score: null,
      ecoPoints: 75,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 3,
      title: 'Water Conservation',
      description: 'Evaluate your knowledge of water-saving techniques',
      questions: 12,
      timeLimit: 18,
      difficulty: 'Beginner',
      completed: true,
      score: 92,
      ecoPoints: 60,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    },
    {
      id: 4,
      title: 'Biodiversity Challenge',
      description: 'Advanced quiz on ecosystems and species protection',
      questions: 20,
      timeLimit: 30,
      difficulty: 'Advanced',
      completed: false,
      score: null,
      ecoPoints: 100,
      image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
    }
  ];

  const sampleQuestions = [
    {
      question: "What is the primary cause of climate change?",
      options: [
        "Natural climate variations",
        "Greenhouse gas emissions from human activities",
        "Solar radiation changes",
        "Volcanic eruptions"
      ],
      correct: "Greenhouse gas emissions from human activities"
    },
    {
      question: "Which renewable energy source is most widely used globally?",
      options: [
        "Solar power",
        "Wind power", 
        "Hydroelectric power",
        "Geothermal power"
      ],
      correct: "Hydroelectric power"
    },
    {
      question: "What percentage of Earth's water is fresh water?",
      options: [
        "2.5%",
        "5%",
        "10%",
        "15%"
      ],
      correct: "2.5%"
    }
  ];

  const startQuiz = (quizId: number) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
    setScore(0);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = { ...answers, [currentQuestion]: selectedAnswer };
      setAnswers(newAnswers);
      
      if (currentQuestion < sampleQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate score and show results
        let correctCount = 0;
        sampleQuestions.forEach((q, index) => {
          if (newAnswers[index] === q.correct) {
            correctCount++;
          }
        });
        const finalScore = Math.round((correctCount / sampleQuestions.length) * 100);
        setScore(finalScore);
        setShowResults(true);
      }
    }
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
    setScore(0);
  };

  const completedQuizzes = quizzes.filter(quiz => quiz.completed).length;
  const totalEcoPoints = quizzes.filter(quiz => quiz.completed).reduce((sum, quiz) => sum + quiz.ecoPoints, 0);

  if (activeQuiz && !showResults) {
    const currentQ = sampleQuestions[currentQuestion];
    
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={resetQuiz}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold">Quiz in Progress</h1>
            </div>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              selectedAnswer
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="mb-6">
            {score >= 70 ? (
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            ) : (
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            )}
            <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
            <p className="text-gray-600">Here are your results</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
            <div className="text-sm text-gray-500">
              {sampleQuestions.filter((_, index) => answers[index] === sampleQuestions[index].correct).length} of {sampleQuestions.length} correct
            </div>
          </div>

          {score >= 70 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">Congratulations! You earned 75 EcoPoints!</p>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Quizzes
            </button>
            <button
              onClick={() => startQuiz(activeQuiz!)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quizzes</h1>
            <p className="mt-2 text-gray-600">
              {completedQuizzes} of {quizzes.length} quizzes completed
            </p>
          </div>
          <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-blue-600">{totalEcoPoints}</div>
              <div className="text-sm text-gray-500">EcoPoints Earned</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-green-600">
                {completedQuizzes > 0 ? Math.round(quizzes.filter(q => q.completed).reduce((sum, q) => sum + q.score!, 0) / completedQuizzes) : 0}%
              </div>
              <div className="text-sm text-gray-500">Avg Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={quiz.image}
                alt={quiz.title}
                className="w-full h-48 object-cover"
              />
              {quiz.completed && (
                <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                </div>
              )}
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{quiz.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>{quiz.questions} questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{quiz.timeLimit} min</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>{quiz.ecoPoints} pts</span>
                </div>
              </div>

              {quiz.completed && quiz.score && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Your Score:</span>
                    <span className="text-lg font-bold text-green-600">{quiz.score}%</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => startQuiz(quiz.id)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                  quiz.completed
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Play className="w-4 h-4 mr-2" />
                {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;