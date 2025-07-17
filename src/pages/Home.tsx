import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Calendar, Award, ArrowRight, Star, Trophy, Clock } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set book fair date (March 15, 2025)
    const bookFairDate = new Date('2025-08-15T09:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = bookFairDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: BookOpen, label: 'Books Available', value: '500+', color: 'text-blue-600' },
    { icon: Users, label: 'Expected Visitors', value: '700+', color: 'text-green-600' },
    { icon: Calendar, label: 'Day of Event', value: '1', color: 'text-purple-600' },
    { icon: Award, label: 'Competitions', value: '6', color: 'text-orange-600' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Diverse Book Collection',
      description: 'From picture books to young adult novels, discover stories for every age and interest.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Trophy,
      title: 'Exciting Competitions',
      description: 'Participate in creative contests and showcase your literary talents to win amazing prizes.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Community Event',
      description: 'Connect with fellow book lovers, authors, and educators in our vibrant reading community.',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Annual School Book Fair
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="text-blue-600 block">Literary Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join us for BookGallata, where young minds discover the magic of reading through 
                our comprehensive book fair featuring competitions, workshops, and community engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/competitions"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Competitions
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span>Trusted by 500+ students and families</span>
              </div>
            </div>

            {/* Right Content - Illustration Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Excellence in Education</h3>
                  <p className="text-gray-300 mb-6">Where innovation meets learning</p>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Event Progress</span>
                      <span className="text-sm text-gray-400">25%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BookGallata Countdown</h2>
            <p className="text-xl text-gray-600">Get ready for the most exciting reading event of the year!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                <div className="text-sm uppercase tracking-wide text-gray-500">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes BookGallata Special?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing features that make our book fair a unique and memorable experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${feature.color} mb-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Adventure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss out on the most exciting literary event of the year. Register today and be part of the BookGallata experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/competitions"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Competitions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;