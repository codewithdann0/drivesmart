import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About DriveSmart Academy</h1>
          <p className="text-lg text-gray-600">Empowering safe and confident drivers, one lesson at a time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At DriveSmart Academy, our mission is to provide top-notch driving education that equips our students with the skills, knowledge, and confidence needed to become safe and responsible drivers. We believe in fostering a learning environment that is both supportive and engaging, ensuring that every student feels prepared for the road ahead.
            </p>
            <p className="text-gray-700 mb-6">
              Established in Yabello, Oromia, we are proud to serve our local community and beyond. Whether you're a first-time driver or looking to refresh your skills, DriveSmart Academy is here to guide you through every step of the learning process.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 mb-6">
              We offer a comprehensive range of driving courses tailored to meet the needs of each student. Our experienced instructors are not only skilled in teaching but are also passionate about driving safety. At DriveSmart Academy, we prioritize your learning experience, providing you with personalized attention and hands-on practice in a variety of driving conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Our academy is equipped with modern vehicles and facilities, ensuring that you learn in a safe, comfortable, and realistic environment. With a strong commitment to excellence, DriveSmart Academy stands out as a leader in driving education.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Us on the Road to Success</h2>
          <p className="text-gray-700 mb-6">
            Whether you're aiming to get your first license or enhance your driving skills, DriveSmart Academy is your trusted partner on the road to success. Contact us today to learn more about our courses and start your journey towards becoming a confident and capable driver.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
