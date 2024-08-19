import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black  shadow-md ">
      <div className="container px-2">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-600 mr-15  pr-2">
            SABBA IFII
          </div>
          <ul className="flex space-x-6 p-0 ">
            <li>
              <Link href="/" className="text-white hover:text-yellow-600 text-sm hover:underline ml-15 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="course" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Course
              </Link>
            </li>
            <li>
              <Link href="registration" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Registration
              </Link>
            </li>
            <li>
              <Link href="about" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                About 
              </Link>
            </li>
            <li>
              <Link href="instructors" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="testimonials" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Contact 
              </Link>
            </li>
            <li className="p-0">
              <Link href="faqs" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="admin" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                Admin
              </Link>
            </li>
            <li>
              <Link href="news" className="text-white hover:text-yellow-600 text-sm hover:underline font-bold">
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
