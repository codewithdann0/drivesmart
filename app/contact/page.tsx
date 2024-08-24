import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const page = () => {
  return (
    <div> 
      
      {/* Contact Information */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-600" />
              <span className="text-sm">+251996751771</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <span className="text-lg">sabbaifii@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-black" />
              <span className="text-sm">Yabello, Oromia, Ethiopia</span>
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
  )
}

export default page