import React from 'react';
import { BookOpen, Heart, Users, Star, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Love for Reading',
      description: 'Fostering a lifelong passion for books and learning in every student.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Bringing together students, parents, and educators around shared literary interests.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Providing high-quality books and educational resources for all ages.'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Ensuring every student finds books that speak to their interests and experiences.'
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: 'Promote Reading Culture',
      description: 'Encourage students to develop a habit of regular reading and explore diverse genres.'
    },
    {
      icon: Lightbulb,
      title: 'Enhance Learning',
      description: 'Support curriculum learning through age-appropriate and engaging literature.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Create opportunities for families and educators to connect over shared reading experiences.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About BookGallata</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Celebrating the transformative power of books and fostering a love for reading 
              in our school community through our annual literary celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                BookGallata is more than just a book fair – it's a celebration of literacy, 
                learning, and the joy of reading. Our mission is to create an inspiring 
                environment where students, parents, and educators come together to discover 
                the magic of books.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every child deserves access to quality literature that not 
                only entertains but also educates, inspires, and broadens their horizons. 
                Through BookGallata, we aim to ignite a lifelong passion for reading in 
                every student.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-900 font-semibold italic">
                  "Reading is to the mind what exercise is to the body. BookGallata is our 
                  gymnasium for growing minds."
                </p>
                <p className="text-blue-700 mt-2">— Principal, ramnagar suburban hr.sec.school</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Books Available</p>
              </div> */}
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">700+</h3>
                <p className="text-gray-600">Expected Visitors</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
                <Star className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                <p className="text-gray-600">Competitions</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg">
                <Heart className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1</h3>
                <p className="text-gray-600">Day of Fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at BookGallata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What we aim to achieve through BookGallata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <objective.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our School's Vision</h2>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              At ramnagar suburban hr.sec.school, we envision a future where every student is 
              equipped with the love of learning and the tools necessary to succeed in an 
              ever-changing world. BookGallata is a cornerstone of this vision, providing 
              students with access to diverse literature that broadens their perspectives 
              and enhances their educational journey.
            </p>
            <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-4">
                "Through books, we open doors to endless possibilities."
              </p>
              <p className="text-blue-100">
                Join us in creating a community of passionate readers and lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Reading Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Reading Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The transformative power of reading in student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cognitive Development</h3>
              <p className="text-gray-600">
                Reading enhances critical thinking, vocabulary, and comprehension skills 
                essential for academic success.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emotional Intelligence</h3>
              <p className="text-gray-600">
                Stories help students understand emotions, develop empathy, and navigate 
                complex social situations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Awareness</h3>
              <p className="text-gray-600">
                Diverse literature exposes students to different cultures, perspectives, 
                and ways of thinking.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stress Relief</h3>
              <p className="text-gray-600">
                Reading provides a healthy escape and helps students manage stress and 
                anxiety through storytelling.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Imagination & Creativity</h3>
              <p className="text-gray-600">
                Books spark imagination and inspire creative thinking, essential for 
                problem-solving and innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Success</h3>
              <p className="text-gray-600">
                Regular reading improves performance across all subjects and prepares 
                students for future academic challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;