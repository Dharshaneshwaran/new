import React, { useState } from 'react';
import { Image, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Students browsing books at BookGallata 2024',
      title: 'Book Browsing Experience',
      description: 'Students exploring our vast collection of books',
      year: '2024'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Author reading session',
      title: 'Author Meet & Greet',
      description: 'Local authors sharing their stories with students',
      year: '2024'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Students participating in storytelling',
      title: 'Storytelling Session',
      description: 'Interactive storytelling captivating young minds',
      year: '2024'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Book display at the fair',
      title: 'Book Display Setup',
      description: 'Beautiful arrangement of books for all ages',
      year: '2024'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Students in competition',
      title: 'Writing Competition',
      description: 'Students showcasing their creative writing skills',
      year: '2024'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Drama performance',
      title: 'Drama Performance',
      description: 'Students bringing book characters to life',
      year: '2024'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Art and creativity corner',
      title: 'Creative Corner',
      description: 'Book cover design and art activities',
      year: '2023'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Reading aloud session',
      title: 'Reading Aloud Challenge',
      description: 'Students demonstrating their reading skills',
      year: '2023'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Award ceremony',
      title: 'Award Ceremony',
      description: 'Celebrating winners and participants',
      year: '2023'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family reading time',
      title: 'Family Reading Time',
      description: 'Parents and children enjoying books together',
      year: '2023'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Book fair opening ceremony',
      title: 'Opening Ceremony',
      description: 'Grand opening of BookGallata with school community',
      year: '2023'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Photography workshop',
      title: 'Photography Workshop',
      description: 'Students learning book-themed photography',
      year: '2023'
    }
  ];

  const years = ['All', '2024', '2023'];
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredImages = selectedYear === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.year === selectedYear);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">BookGallata Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Relive the magical moments from our previous BookGallata events. From excited students 
              discovering new books to award ceremonies celebrating literary achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,500+</div>
                <div className="text-gray-600">Happy Participants</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Competition Winners</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-gray-600">Years of Success</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">2,000+</div>
                <div className="text-gray-600">Books Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Year</h2>
            <div className="flex justify-center space-x-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Memories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing the joy, excitement, and learning that happens at BookGallata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-2">
                      <Image className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.description}</p>
                  <span className="text-xs text-blue-600 font-medium">{image.year}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try selecting a different year filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {filteredImages[selectedImage].description}
                </p>
                <span className="text-sm text-blue-600 font-medium">
                  {filteredImages[selectedImage].year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students, parents, and teachers about their BookGallata experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "BookGallata opened my eyes to so many amazing books! I won the story writing competition 
                and it gave me confidence to continue writing."
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Kim</p>
                  <p className="text-sm text-gray-600">Grade 7 Student</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "As a parent, I love how BookGallata brings families together through reading. 
                My daughter discovered her love for fantasy novels here!"
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Johnson</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "BookGallata is the highlight of our school year. It's amazing to see students 
                so excited about reading and participating in literary activities."
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold">DL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">David Lee</p>
                  <p className="text-sm text-gray-600">English Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;