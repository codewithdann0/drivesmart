import { link } from "fs";
import Link from "next/link";
import { FaHome,FaCar } from 'react-icons/fa';
const Navbar = () => {
      const Links =[
        {label:"Home", href:"/"},
        {label:'Course', href:"course"},
        {label:'Registration', href:"registration"},
        {label:'About', href:"about"},
        {label:'Instructors', href:"instructors"},
        {label:'Testimonials', href:"testimonials"},
        {label:'Contact', href:"contact"},
        {label:'FAQS', href:"faqs"},
        {label:'Admin', href:"admin"},
        {label:'News', href:"news"},
      ]
   
  return (
    <nav className="bg-sky-700 ">
      <div className="container px-2">
        <div className="flex justify-between items-center py-2">
          <div className="text-7xl font-bold text-opacity-65 text-gray-50 mr-15  pr-4">
          <FaCar></FaCar> 
          </div>
          <ul className="flex space-x-6 p-0 ">
            { Links.map(link =>
              <Link key={link.href} 
              className="text-white hover:text-slate-400 text-sm hover:underline ml-15 font-bold"
              href={link.href}>{link.label}</Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
