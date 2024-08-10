import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container px-2">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-600 mr-15  pr-2">
            SABBA IFII
          </div>
          <ul className="flex space-x-6 p-0 ">
            <li>
              <Link href="/" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline ml-15">
                Home
              </Link>
            </li>
            <li>
              <Link href="course" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                Course
              </Link>
            </li>
            <li>
              <Link href="registration" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                Registration
              </Link>
            </li>
            <li>
              <Link href="about" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                About 
              </Link>
            </li>
            <li>
              <Link href="instructors" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="testimonials" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                Contact 
              </Link>
            </li>
            <li className="p-0">
              <Link href="faqs" className="text-gray-800 hover:text-yellow-600 text-sm hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
