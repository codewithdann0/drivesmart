import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="bg-gray-200 text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to DriveSmart Academy</h1>
        <p className="text-lg mb-6">
          Your top choice for comprehensive driving courses and professional instructors.
        </p>
        <div className="space-x-4">
          <Link href="/registration" className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700">
            Register Now
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course 1 */}
            <div className="border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Basic Driving Course</h3>
              <p className="mb-4">
                A comprehensive course covering the fundamentals of driving, traffic rules, and safety practices.
              </p>
              <Link href="/course/basic" className="text-yellow-600 hover:underline">
                Learn More
              </Link>
            </div>
            {/* Course 2 */}
            <div className="border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Advanced Driving Course</h3>
              <p className="mb-4">
                Enhance your driving skills with advanced techniques and defensive driving strategies.
              </p>
              <Link href="/course/advanced" className="text-yellow-600 hover:underline">
                Learn More
              </Link>
            </div>
            {/* Course 3 */}
            <div className="border rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Teen Driving Course</h3>
              <p className="mb-4">
                Specially designed course for teenagers to prepare them for safe and responsible driving.
              </p>
              <Link href="/course/teen" className="text-yellow-600 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">What Our Students Say</h2>
          <div className="flex flex-col space-y-6">
            {/* Testimonial 1 */}
            <div className="border rounded-lg p-6 shadow-lg">
              <p className="mb-4">
                "DriveSmart Academy provided excellent training. The instructors were professional, and I passed my driving test with ease!"
              </p>
              <p className="font-semibold">Jane Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="border rounded-lg p-6 shadow-lg">
              <p className="mb-4">
                "The advanced driving course was very insightful. I learned so much about defensive driving and accident prevention."
              </p>
              <p className="font-semibold">John Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-600" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-600" />
              <span className="text-lg">info@drivesmartacademy.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-600" />
              <span className="text-lg">Yabello, Oromia, Ethiopia</span>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000606.8181361187!2d39.746477264459174!3d-4.095664357568036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183b84082d8ec40b%3A0x41890d8a4938a100!2sYabello%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1692394766571!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
