import React from 'react';
import { Mail, Phone, MapPin, Clock, Users, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 (555) 123-4567',
      description: 'Call us during school hours',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bookgallata@suburban.edu',
      description: 'Email us anytime',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'ramnagar suburban hr.sec.school, ramnagar gandhipuram, coimbatore , Tamil Nadu 641002',
      description: 'Visit us at our school',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Monday - Friday: 8:00 AM - 4:00 PM',
      description: 'Our office hours',
      color: 'text-orange-600'
    }
  ];

  const departments = [
    {
      name: 'Event Coordination',
      contact: 'Ms. sheebha',
      email: 'events@greenwood.edu',
      phone: '+91 (555) 123-4567 ext. 201',
      description: 'General event questions and registration support'
    },
    {
      name: 'Competition Support',
      contact: 'Mr. ',
      email: 'competitions@greenwood.edu',
      phone: '+1 (555) 123-4567 ext. 202',
      description: 'Competition rules, submissions, and judging queries'
    },
    {
      name: 'Book Sales',
      contact: 'Mrs. Emily Rodriguez',
      email: 'books@greenwood.edu',
      phone: '+1 (555) 123-4567 ext. 203',
      description: 'Book availability, pricing, and special orders'
    },
    {
      name: 'Technical Support',
      contact: 'Mr. Dharshaneshwaran',
      email: 'dharshaneshwaran@gmail.com',
      phone: '+91 (555) 123-4567 ext. 204',
      description: 'Website issues, form submissions, and technical problems'
    }
  ];

  const faqs = [
    {
      question: 'Is registration really free?',
      answer: 'Yes! Registration for BookGallata is completely free. We believe in making literary events accessible to everyone in our community.'
    },
    {
      question: 'Can parents participate in competitions?',
      answer: 'While most competitions are designed for students, we have special events where parents can participate alongside their children.'
    },
    {
      question: 'What if I miss the registration deadline?',
      answer: 'Unfortunately, we cannot accept late registrations as we need to plan for the exact number of participants. Please register before the deadline.'
    },
    {
      question: 'Are the books at the fair discounted?',
      answer: 'Yes! We offer special BookGallata discounts on most books, making them more affordable for students and families.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We have comprehensive safety protocols including supervision ratios, first aid stations, and clear emergency procedures.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about BookGallata? We're here to help! Get in touch with our team 
              for any information you need about our annual book fair.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for all your BookGallata needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
                  <p className="text-gray-700 font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out to the right department for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-3">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{dept.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <a href={`mailto:${dept.email}`} className="text-sm text-blue-600 hover:underline">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <a href={`tel:${dept.phone}`} className="text-sm text-blue-600 hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a specific question or need help with something? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Form</h3>
              <p className="text-gray-600">
                We'll respond to your message within 24 hours during business days
              </p>
            </div>

            {/* Google Form Embed */}
            <div className="bg-purple-100 rounded-lg p-6">
  <h2 className="text-xl font-semibold text-purple-700 mb-4">Register Your School</h2>
  <div className="w-full h-[961px] rounded-md overflow-hidden">
    <iframe
      title="School Competition Registration Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSd05lsojH6n1k1-8ybjCjr1nT8iHtEWLj49A4hnohITr_au3w/viewform?embedded=true"
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      className="w-full h-full"
    >
      Loading…
    </iframe>
  </div>
</div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to contact us directly? 
                <a href="mailto:bookgallata@greenwood.edu" className="text-blue-600 hover:underline ml-1">
                  Email us at bookgallata@greenwood.edu
                </a>
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-900">
                  <strong>Quick Response:</strong> For urgent matters, please call us directly at +91 7845505234 
                  during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about BookGallata
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              BookGallata takes place at ramnagar suburban hr.sec.school, a central location in Coimbatore, Tamil Nadu.
            </p>
          </div>
<div className="bg-purple-100 rounded-lg p-6">
  <h2 className="text-xl font-semibold text-purple-700 mb-4">Our School Location</h2>
  <div className="w-full h-64 rounded-md overflow-hidden">
    <iframe
      title="Ramnagar Suburban Hr Sec School Map"
      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600">Free parking available on school grounds and adjacent streets</p>
              </div>
            </div>
            {/* <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Transport</h3>
                <p className="text-gray-600">Bus routes 12, 34, and 56 stop directly outside the school</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">Full wheelchair accessibility with ramps and elevators</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;