import React from 'react';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    {
      date: 'March 15, 2025',
      day: 'Saturday',
      events: [
        {
          time: '9:00 AM - 9:30 AM',
          title: 'Opening Ceremony',
          description: 'Welcome address and BookGallata inauguration',
          location: 'Main Auditorium',
          type: 'ceremony',
          audience: 'All'
        },
        {
          time: '9:30 AM - 11:00 AM',
          title: 'Book Gallery Opens',
          description: 'Browse through our amazing collection of books',
          location: 'School Library & Gymnasium',
          type: 'activity',
          audience: 'All'
        },
        {
          time: '11:00 AM - 12:00 PM',
          title: 'Author Meet & Greet',
          description: 'Meet local authors and get your books signed',
          location: 'Conference Room A',
          type: 'special',
          audience: 'All'
        },
        {
          time: '12:00 PM - 1:00 PM',
          title: 'Lunch Break',
          description: 'Food stalls and refreshments available',
          location: 'School Cafeteria',
          type: 'break',
          audience: 'All'
        },
        {
          time: '1:00 PM - 2:30 PM',
          title: 'Storytelling Session',
          description: 'Interactive storytelling for young readers',
          location: 'Reading Corner',
          type: 'activity',
          audience: 'K-5'
        },
        {
          time: '2:30 PM - 4:00 PM',
          title: 'Book Review Competition',
          description: 'Students present their favorite book reviews',
          location: 'Main Auditorium',
          type: 'competition',
          audience: '6-12'
        },
        {
          time: '4:00 PM - 5:00 PM',
          title: 'Reading Aloud Challenge',
          description: 'Students showcase their reading skills',
          location: 'Conference Room B',
          type: 'competition',
          audience: '3-8'
        }
      ]
    },
    {
      date: 'March 16, 2025',
      day: 'Sunday',
      events: [
        {
          time: '9:00 AM - 10:30 AM',
          title: 'Book Gallery Continues',
          description: 'Continue exploring our book collection',
          location: 'School Library & Gymnasium',
          type: 'activity',
          audience: 'All'
        },
        {
          time: '10:30 AM - 12:00 PM',
          title: 'Creative Writing Workshop',
          description: 'Learn creative writing techniques from experts',
          location: 'Classroom 201',
          type: 'workshop',
          audience: '6-12'
        },
        {
          time: '12:00 PM - 1:00 PM',
          title: 'Lunch Break',
          description: 'Food stalls and refreshments available',
          location: 'School Cafeteria',
          type: 'break',
          audience: 'All'
        },
        {
          time: '1:00 PM - 2:30 PM',
          title: 'Story Writing Competition',
          description: 'Students create original short stories',
          location: 'Computer Lab',
          type: 'competition',
          audience: '4-12'
        },
        {
          time: '2:30 PM - 4:00 PM',
          title: 'Book Cover Design Competition',
          description: 'Design creative book covers',
          location: 'Art Room',
          type: 'competition',
          audience: '2-12'
        },
        {
          time: '4:00 PM - 5:00 PM',
          title: 'Drama & Roleplay Competition',
          description: 'Act out scenes from favorite books',
          location: 'Main Auditorium',
          type: 'competition',
          audience: '3-12'
        }
      ]
    },
    {
      date: 'March 17, 2025',
      day: 'Monday',
      events: [
        {
          time: '9:00 AM - 10:30 AM',
          title: 'Book Gallery Final Day',
          description: 'Last chance to purchase books',
          location: 'School Library & Gymnasium',
          type: 'activity',
          audience: 'All'
        },
        {
          time: '10:30 AM - 12:00 PM',
          title: 'Book-themed Photography Contest',
          description: 'Capture the essence of reading in photos',
          location: 'School Grounds',
          type: 'competition',
          audience: '5-12'
        },
        {
          time: '12:00 PM - 1:00 PM',
          title: 'Lunch Break',
          description: 'Food stalls and refreshments available',
          location: 'School Cafeteria',
          type: 'break',
          audience: 'All'
        },
        {
          time: '1:00 PM - 2:30 PM',
          title: 'Award Ceremony',
          description: 'Recognition of competition winners',
          location: 'Main Auditorium',
          type: 'ceremony',
          audience: 'All'
        },
        {
          time: '2:30 PM - 3:00 PM',
          title: 'Closing Ceremony',
          description: 'Thank you speech and BookGallata conclusion',
          location: 'Main Auditorium',
          type: 'ceremony',
          audience: 'All'
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'activity': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'competition': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'workshop': return 'bg-green-100 text-green-800 border-green-200';
      case 'special': return 'bg-red-100 text-red-800 border-red-200';
      case 'break': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'ceremony': return <Star className="h-5 w-5" />;
      case 'activity': return <Users className="h-5 w-5" />;
      case 'competition': return <Users className="h-5 w-5" />;
      case 'workshop': return <Users className="h-5 w-5" />;
      case 'special': return <Star className="h-5 w-5" />;
      case 'break': return <Clock className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Event Schedule</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Plan your BookGallata experience with our detailed schedule of events, competitions, 
              and activities across three exciting days.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Days of Literary Fun</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From book browsing to competitions, each day offers unique experiences for all ages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Opening Day</h3>
              <p className="text-gray-600">March 15 - Grand opening, book gallery, and initial competitions</p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competition Day</h3>
              <p className="text-gray-600">March 16 - Writing workshops and major competitions</p>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Awards Day</h3>
              <p className="text-gray-600">March 17 - Final competitions and award ceremony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete timeline of all events and activities
            </p>
          </div>

          <div className="space-y-12">
            {scheduleData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{dayData.day}</h3>
                      <p className="text-blue-100">{dayData.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-100">{dayData.events.length} Events</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {dayData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0">
                          <div className={`p-2 rounded-full ${getEventTypeColor(event.type)}`}>
                            {getEventTypeIcon(event.type)}
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
                              <p className="text-gray-600 mb-2">{event.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="h-4 w-4" />
                                  <span>{event.audience}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">General Guidelines</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• All events are free to attend</li>
                <li>• Registration required for competitions</li>
                <li>• Students must be accompanied by adults</li>
                <li>• Arrive 15 minutes early for scheduled events</li>
                <li>• Photography allowed in designated areas</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Facilities Available</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Free parking on school premises</li>
                <li>• Food stalls and refreshments</li>
                <li>• First aid station</li>
                <li>• Lost and found counter</li>
                <li>• Wheelchair accessibility</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg inline-block">
              <p className="text-orange-900">
                <strong>Note:</strong> Schedule is subject to change. Check our website or contact us for the latest updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;