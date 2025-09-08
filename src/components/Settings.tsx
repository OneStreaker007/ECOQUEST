import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Volume2, 
  Smartphone, 
  Mail, 
  Lock, 
  Eye,
  EyeOff,
  Save,
  Camera
} from 'lucide-react';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'privacy' | 'preferences'>('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    school: user?.school || '',
    class: user?.class || '',
    bio: 'Passionate about environmental conservation and sustainable living.',
    location: 'Delhi, India'
  });

  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [notifications, setNotifications] = useState({
    email: {
      lessonReminders: true,
      challengeUpdates: true,
      communityPosts: false,
      weeklyProgress: true,
      achievements: true
    },
    push: {
      lessonReminders: true,
      challengeDeadlines: true,
      communityActivity: false,
      ecoPointsEarned: true
    },
    inApp: {
      soundEffects: true,
      celebrations: true,
      mentions: true
    }
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showProgress: true,
    showBadges: true,
    showSchool: true,
    allowMessages: true,
    shareData: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    difficulty: 'intermediate',
    autoPlay: false,
    notifications: true,
    reminderTime: '18:00'
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profileForm);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      alert('New passwords do not match!');
      return;
    }
    console.log('Password updated');
    setPasswordForm({ current: '', new: '', confirm: '' });
  };

  const tabs = [
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'notifications', label: 'Notifications', icon: Bell },
    { key: 'privacy', label: 'Privacy', icon: Shield },
    { key: 'preferences', label: 'Preferences', icon: Globe }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Manage your account preferences and privacy settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
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

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-8">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={user?.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Profile Picture</h3>
                  <p className="text-sm text-gray-600">Update your profile picture to personalize your account</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change Photo
                  </button>
                </div>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School
                    </label>
                    <input
                      type="text"
                      value={profileForm.school}
                      onChange={(e) => setProfileForm({ ...profileForm, school: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class
                    </label>
                    <input
                      type="text"
                      value={profileForm.class}
                      onChange={(e) => setProfileForm({ ...profileForm, class: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profileForm.location}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </form>

              {/* Password Change */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>
                <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={passwordForm.current}
                        onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwordForm.new}
                        onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={passwordForm.confirm}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Notifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(notifications.email).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </label>
                        <p className="text-xs text-gray-500">
                          {key === 'lessonReminders' && 'Get reminders when new lessons are available'}
                          {key === 'challengeUpdates' && 'Updates about your active challenges'}
                          {key === 'communityPosts' && 'New posts from people you follow'}
                          {key === 'weeklyProgress' && 'Weekly summary of your progress'}
                          {key === 'achievements' && 'Notifications when you earn new badges'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({
                            ...notifications,
                            email: { ...notifications.email, [key]: e.target.checked }
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Push Notifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(notifications.push).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </label>
                        <p className="text-xs text-gray-500">
                          {key === 'lessonReminders' && 'Daily reminders to continue learning'}
                          {key === 'challengeDeadlines' && 'Alerts before challenge deadlines'}
                          {key === 'communityActivity' && 'Activity from your community'}
                          {key === 'ecoPointsEarned' && 'When you earn EcoPoints'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({
                            ...notifications,
                            push: { ...notifications.push, [key]: e.target.checked }
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Volume2 className="w-5 h-5 mr-2" />
                  In-App Notifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(notifications.inApp).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </label>
                        <p className="text-xs text-gray-500">
                          {key === 'soundEffects' && 'Play sounds for interactions'}
                          {key === 'celebrations' && 'Celebrate achievements with animations'}
                          {key === 'mentions' && 'When someone mentions you'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({
                            ...notifications,
                            inApp: { ...notifications.inApp, [key]: e.target.checked }
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Privacy Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Visibility
                  </label>
                  <select
                    value={privacy.profileVisibility}
                    onChange={(e) => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="public">Public - Everyone can see</option>
                    <option value="school">School - Only school members</option>
                    <option value="private">Private - Only you</option>
                  </select>
                </div>

                {Object.entries(privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </label>
                      <p className="text-xs text-gray-500">
                        {key === 'showProgress' && 'Allow others to see your learning progress'}
                        {key === 'showBadges' && 'Display your earned badges on your profile'}
                        {key === 'showSchool' && 'Show your school name on your profile'}
                        {key === 'allowMessages' && 'Allow other students to message you'}
                        {key === 'shareData' && 'Share anonymized data to improve the platform'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value as boolean}
                        onChange={(e) => setPrivacy({ ...privacy, [key]: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">General Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Moon className="w-4 h-4 inline mr-1" />
                    Theme
                  </label>
                  <select
                    value={preferences.theme}
                    onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Language
                  </label>
                  <select
                    value={preferences.language}
                    onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={preferences.difficulty}
                    onChange={(e) => setPreferences({ ...preferences, difficulty: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Reminder Time
                  </label>
                  <input
                    type="time"
                    value={preferences.reminderTime}
                    onChange={(e) => setPreferences({ ...preferences, reminderTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Auto-play Videos</label>
                    <p className="text-xs text-gray-500">Automatically play lesson videos</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.autoPlay}
                      onChange={(e) => setPreferences({ ...preferences, autoPlay: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Enable Notifications</label>
                    <p className="text-xs text-gray-500">Master switch for all notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.notifications}
                      onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => console.log('Preferences saved:', preferences)}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;