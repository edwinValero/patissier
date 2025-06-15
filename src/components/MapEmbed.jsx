import React from 'react';
import { Clock } from 'lucide-react';

const MapEmbed = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.69719784343!2d-79.203017084523!3d43.12423197914309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b7efdb305cf%3A0xc869a2800b4e8610!2sJC%20Patissier!5e0!3m2!1sen!2sca!4v1623762383342!5m2!1sen!2sca';

  const openingHours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id='location' className='py-20 bg-color5'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Location & Hours</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 items-center'>
          {' '}
          {/* Changed to grid-cols-4 */}
          {/* Map Section */}
          <div className='relative w-full h-96 rounded-lg shadow-2xl overflow-hidden md:col-span-3'>
            {' '}
            {/* Added md:col-span-3 */}
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
            {' '}
            {/* Added md:col-span-1 */}
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
