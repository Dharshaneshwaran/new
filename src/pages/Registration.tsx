import React from 'react';
import { UserPlus, Clock, CheckCircle, Users } from 'lucide-react';

const Registration = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Early Access',
      description: 'Get first access to new book arrivals and exclusive titles'
    },
    {
      icon: Users,
      title: 'Priority Seating',
      description: 'Reserved seats for all author talks and special events'
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Special access to browse books during extended evening hours'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Fill the Form',
      description: 'Complete the registration form with your details'
    },
    {
      number: '2',
      title: 'Receive Confirmation',
      description: 'Get a confirmation email with your registration details'
    },
    {
      number: '3',
      title: 'Attend the Event',
      description: 'Come to BookGallata and enjoy the experience'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UserPlus className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Register for BookGallata</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for an unforgettable literary journey. Registration is free and gives you 
              access to exclusive benefits and priority access to all events.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Register?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Registration unlocks exclusive benefits and ensures you don't miss any part of the BookGallata experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <benefit.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Register</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your registration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration Form</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the form below to register for BookGallata. All fields are required.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Register Now</h3>
              <p className="text-gray-600">
                Fill out the form below to secure your spot at BookGallata 2025
              </p>
            </div>

            {/* Google Form Embed */}
            <div className="bg-white rounded-lg shadow-inner p-2">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdummy-form-id/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="BookGallata Registration Form"
              >
                Loading…
              </iframe>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Having trouble with the form? 
                <a href="mailto:bookgallata@school.edu" className="text-blue-600 hover:underline ml-1">
                  Contact us directly
                </a>
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-900">
                  <strong>Note:</strong> Registration is free and open to all students, parents, and teachers. 
                  You will receive a confirmation email within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Registration is completely free</li>
                <li>• Open to students, parents, and teachers</li>
                <li>• Confirmation email sent within 24 hours</li>
                <li>• Registration closes 2 days before the event</li>
                <li>• No walk-in registrations accepted</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bring your confirmation email to the event</li>
                <li>• Students must be accompanied by an adult</li>
                <li>• Photography allowed in designated areas</li>
                <li>• Food and drinks available at the venue</li>
                <li>• Parking available on school premises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;