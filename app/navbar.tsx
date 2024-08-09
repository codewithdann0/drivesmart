import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container px-2">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-600 mr-20">
            DriveSmart
          </div>
          <ul className="flex space-x-6 p-0 m-0">
            <li>
              <Link href="home" className="text-gray-800 hover:text-yellow-600 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="Course" className="text-gray-800 hover:text-yellow-600 text-sm">
                Course
              </Link>
            </li>
            <li>
              <Link href="Registration" className="text-gray-800 hover:text-yellow-600 text-sm">
                Registration
              </Link>
            </li>
            <li>
              <Link href="about" className="text-gray-800 hover:text-yellow-600 text-sm">
                About 
              </Link>
            </li>
            <li>
              <Link href="Instructors" className="text-gray-800 hover:text-yellow-600 text-sm">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="Testimonials" className="text-gray-800 hover:text-yellow-600 text-sm">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="Contact" className="text-gray-800 hover:text-yellow-600 text-sm">
                Contact 
              </Link>
            </li>
            <li className="p-0">
              <Link href="FAQs" className="text-gray-800 hover:text-yellow-600 text-sm">
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
