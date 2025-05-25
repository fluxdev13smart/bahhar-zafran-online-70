
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Spice Collection',
      description: 'Our extensive collection of premium spices'
    },
    {
      url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fresh Saffron',
      description: 'Hand-picked saffron threads'
    },
    {
      url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Store Interior',
      description: 'Inside our traditional supermarket'
    },
    {
      url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Grinding Process',
      description: 'Traditional stone grinding methods'
    },
    {
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Essential Oils',
      description: 'Pure essential oils and extracts'
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Customer Service',
      description: 'Serving our valued customers'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-saffron-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-4">
            Gallery
          </h2>
          <div className="text-2xl font-amiri text-saffron-700 mb-6 arabic-text">
            معرض الصور
          </div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            A glimpse into our daily operations, products, and the vibrant atmosphere of our store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url("${image.url}")` }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-playfair font-semibold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-saffron-200">
            <h3 className="text-2xl font-playfair font-semibold text-earth-800 mb-4">
              Visit Our Store
            </h3>
            <p className="text-earth-600 mb-6 max-w-2xl mx-auto">
              Experience the authentic atmosphere of our traditional supermarket and grinding mill. 
              See our spices, meet our team, and witness our grinding process in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-saffron-100 text-saffron-800 px-4 py-2 rounded-full">Open Daily</span>
              <span className="bg-earth-100 text-earth-800 px-4 py-2 rounded-full">Free Consultation</span>
              <span className="bg-spice-100 text-spice-800 px-4 py-2 rounded-full">Fresh Grinding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
