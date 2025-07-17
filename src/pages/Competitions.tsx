import React from 'react';
import { Trophy, PenTool, Palette, Drama, BookOpen, Camera, ExternalLink } from 'lucide-react';

const Competitions = () => {
  const competitions = [
    {
      id: 1,
      title: 'Story Writing Competition',
      icon: PenTool,
      description: 'Create an original short story that captures imagination and creativity. Let your words paint a picture and transport readers to new worlds.',
      grades: 'Grades 4-12',
      deadline: 'March 16, 2025 - 2:30 PM',
      rules: [
        'Original story of 500-1500 words',
        'Any genre accepted (fiction, fantasy, mystery, etc.)',
        'Typed submission required',
        'Include a brief author bio',
        'No plagiarism - originality is key'
      ],
      prizes: ['1st Place: $100 gift card', '2nd Place: $50 gift card', '3rd Place: $25 gift card'],
      formLink: 'https://forms.google.com/story-writing-competition',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Book Cover Design',
      icon: Palette,
      description: 'Design a stunning book cover for your favorite book or create one for an imaginary story. Show your artistic skills and creativity.',
      grades: 'Grades 2-12',
      deadline: 'March 16, 2025 - 4:00 PM',
      rules: [
        'Design can be digital or hand-drawn',
        'Include title, author name, and back cover blurb',
        'Original artwork only',
        'Submit in PDF or image format',
        'Include a brief explanation of your design choices'
      ],
      prizes: ['1st Place: Art supplies kit', '2nd Place: Drawing tablet', '3rd Place: Sketch books'],
      formLink: 'https://forms.google.com/book-cover-design',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Drama & Roleplay',
      icon: Drama,
      description: 'Bring your favorite book scenes to life through acting. Work in teams to create memorable performances that showcase literary characters.',
      grades: 'Grades 3-12',
      deadline: 'March 16, 2025 - 5:00 PM',
      rules: [
        'Performance should be 3-5 minutes long',
        'Teams of 2-4 students',
        'Based on published books only',
        'Costumes and props encouraged',
        'Include a brief introduction about the book'
      ],
      prizes: ['1st Place: Theatre gift cards', '2nd Place: Book series', '3rd Place: Drama supplies'],
      formLink: 'https://forms.google.com/drama-roleplay',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Book Review Challenge',
      icon: BookOpen,
      description: 'Write a compelling review of your favorite book. Help other readers discover great stories through your thoughtful analysis.',
      grades: 'Grades 6-12',
      deadline: 'March 15, 2025 - 4:00 PM',
      rules: [
        'Review should be 300-500 words',
        'Include plot summary (no spoilers!)',
        'Share your personal opinion and recommendation',
        'Rate the book out of 5 stars',
        'Book must be published within last 5 years'
      ],
      prizes: ['1st Place: $75 bookstore credit', '2nd Place: $40 bookstore credit', '3rd Place: $20 bookstore credit'],
      formLink: 'https://forms.google.com/book-review-challenge',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Reading Aloud Challenge',
      icon: BookOpen,
      description: 'Demonstrate your reading skills by performing a dramatic reading of a selected passage. Show your expression and vocal talent.',
      grades: 'Grades 3-8',
      deadline: 'March 15, 2025 - 5:00 PM',
      rules: [
        'Choose a 2-3 minute passage from any book',
        'Focus on expression, pacing, and clarity',
        'Memorization not required',
        'Props and costumes not allowed',
        'Performance will be judged on vocal delivery'
      ],
      prizes: ['1st Place: Professional microphone', '2nd Place: Audio book collection', '3rd Place: Public speaking books'],
      formLink: 'https://forms.google.com/reading-aloud-challenge',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Book-themed Photography',
      icon: Camera,
      description: 'Capture the essence of reading through photography. Create artistic images that celebrate books, reading, and literature.',
      grades: 'Grades 5-12',
      deadline: 'March 17, 2025 - 12:00 PM',
      rules: [
        'Submit 1-3 original photographs',
        'Photos must be book or reading themed',
        'Digital or film photography accepted',
        'Include a brief title and description',
        'No heavy editing or filters'
      ],
      prizes: ['1st Place: Professional camera', '2nd Place: Photography equipment', '3rd Place: Photo printing credits'],
      formLink: 'https://forms.google.com/photography-competition',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const judgesCriteria = [
    {
      category: 'Creativity & Originality',
      weight: '30%',
      description: 'Unique ideas and innovative approaches'
    },
    {
      category: 'Technical Skill',
      weight: '25%',
      description: 'Quality of execution and attention to detail'
    },
    {
      category: 'Content Quality',
      weight: '25%',
      description: 'Depth of understanding and thoughtful presentation'
    },
    {
      category: 'Presentation',
      weight: '20%',
      description: 'Clear communication and engaging delivery'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">BookGallata Competitions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Showcase your creativity, talent, and love for literature through our exciting competitions. 
              Win amazing prizes and recognition for your literary achievements!
            </p>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Exciting Competitions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From creative writing to dramatic performances, find the perfect way to express your literary passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <PenTool className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Writing</h3>
              <p className="text-gray-600">Express yourself through original stories</p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
              <Palette className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Arts</h3>
              <p className="text-gray-600">Create stunning book covers and photography</p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <Drama className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Bring stories to life through acting and reading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${competition.color} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <competition.icon className="h-8 w-8" />
                      <div>
                        <h3 className="text-2xl font-bold">{competition.title}</h3>
                        <p className="text-blue-100">{competition.grades}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-100 text-sm">Deadline:</p>
                      <p className="font-semibold">{competition.deadline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-6">{competition.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Competition Rules</h4>
                      <ul className="space-y-2">
                        {competition.rules.map((rule, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Prizes</h4>
                      <ul className="space-y-2">
                        {competition.prizes.map((prize, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Trophy className="h-4 w-4 text-yellow-600 mt-1" />
                            <span className="text-gray-700">{prize}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Enter</h4>
                      <p className="text-gray-700 mb-4">
                        Complete the entry form and submit your work before the deadline. 
                        All submissions will be reviewed by our panel of expert judges.
                      </p>
                      <a
                        href={competition.formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        <span>Enter Competition</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Judging Criteria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expert panel evaluates entries based on these key criteria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {judgesCriteria.map((criteria, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{criteria.weight}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{criteria.category}</h3>
                  <p className="text-gray-600">{criteria.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tips for Success</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Make your entry stand out with these helpful suggestions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Start Early</h3>
                <p className="text-blue-100">
                  Don't wait until the last minute. Give yourself plenty of time to plan, create, and refine your entry.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Be Original</h3>
                <p className="text-blue-100">
                  Judges love creativity and unique perspectives. Don't be afraid to think outside the box.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Follow Guidelines</h3>
                <p className="text-blue-100">
                  Read the rules carefully and make sure your entry meets all requirements for the best chance of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">General Rules</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• All entries must be original work</li>
                <li>• Multiple entries per person are allowed</li>
                <li>• Late submissions will not be accepted</li>
                <li>• Winners will be announced on March 17</li>
                <li>• Prizes must be claimed within 30 days</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Submission Guidelines</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Use the official Google Forms for submissions</li>
                <li>• Include all required information</li>
                <li>• File size limit: 10MB per submission</li>
                <li>• Accepted formats: PDF, DOC, JPG, PNG</li>
                <li>• Keep copies of all submitted work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competitions;