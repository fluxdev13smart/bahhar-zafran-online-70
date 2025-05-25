
import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-saffron-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-4">
            Visit Our Store
          </h2>
          <div className="text-2xl font-amiri text-saffron-700 mb-6 arabic-text">
            زوروا متجرنا
          </div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Experience the authentic atmosphere of our traditional supermarket and grinding mill
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-saffron-200">
            <h3 className="text-2xl font-playfair font-semibold text-earth-800 mb-4">
              Visit Our Store
            </h3>
            <p className="text-earth-600 mb-6 max-w-2xl mx-auto">
              Experience the authentic atmosphere of our traditional supermarket and grinding mill. 
              See our spices and meet our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-saffron-100 text-saffron-800 px-4 py-2 rounded-full">Open Daily</span>
              <span className="bg-earth-100 text-earth-800 px-4 py-2 rounded-full">Expert Advice</span>
              <span className="bg-spice-100 text-spice-800 px-4 py-2 rounded-full">Fresh Grinding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
