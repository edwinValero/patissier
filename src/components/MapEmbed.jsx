import React from 'react';
import { Clock } from 'lucide-react';
import businessData from '../data/business_data.json';

const MapEmbed = () => {
  const { mapUrl, openingHours } = businessData;

  return (
    <section id='location' className='py-20 bg-color5'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Location & Hours</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 items-center'>
          {/* Map Section */}
          <div className='relative w-full h-96 rounded-lg shadow-2xl overflow-hidden md:col-span-3'>
            <iframe
              src={mapUrl}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Ubicación de JC Patissier'
            ></iframe>
          </div>
          {/* Opening Hours Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg md:col-span-1'>
            <h3 className='text-2xl font-bold text-color2 mb-4 flex items-center'>
              <Clock className='w-6 h-6 mr-2' />
              Opening Hours
            </h3>
            <div className='space-y-2'>
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className='flex justify-between text-gray-700'
                >
                  <span>{item.day}</span>
                  <span
                    className={
                      item.hours === 'Closed'
                        ? 'font-semibold text-red-500'
                        : ''
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapEmbed;
