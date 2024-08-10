import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>
      
      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Motorcycle Course */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/path/to/motorcycle-image.jpg" // Replace with actual path
            alt="Motorcycle Course"
            width={500}
            height={300}
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">Motorcycle Course</h2>
          <p className="mt-2 text-gray-600">Learn how to ride a motorcycle safely and confidently.</p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="mt-2 text-gray-600"><strong>Duration:</strong> 3 months</p>
            <p className="mt-2 text-gray-600"><strong>Cost:</strong> $300</p>
            <p className="mt-2 text-gray-600"><strong>Schedule:</strong> Weekends</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Objectives</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Understand motorcycle safety protocols.</li>
              <li>Develop riding skills and techniques.</li>
              <li>Pass the motorcycle licensing exam.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Curriculum</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Introduction to Motorcycle Controls</li>
              <li>Basic Riding Techniques</li>
              <li>Advanced Maneuvering and Safety</li>
              <li>Road Safety and Legal Requirements</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Outcomes</h3>
            <p className="mt-2 text-gray-600">Upon completion, students will be able to ride motorcycles safely, have a clear understanding of traffic laws, and be prepared for the licensing exam.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Instructor</h3>
            <div className="flex items-center mt-2">
              <Image
                src="/path/to/instructor-placeholder.jpg" // Replace with actual path
                alt="Instructor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-600"><strong>Name:</strong> John Doe</p>
                <p className="text-gray-600"><strong>Experience:</strong> 10 years of motorcycle training experience.</p>
                <p className="text-gray-600"><strong>Bio:</strong> John has been a motorcycle instructor for over a decade, helping countless students become skilled and confident riders.</p>
              </div>
            </div>
          </div>

          <Link href="/registration" className="mt-4 inline-block bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Register Now
          </Link>
        </div>

        {/* Bajaj Course */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/path/to/bajaj-image.jpg" // Replace with actual path
            alt="Bajaj Course"
            width={500}
            height={300}
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">Bajaj Course</h2>
          <p className="mt-2 text-gray-600">Get trained to drive a Bajaj safely on busy streets.</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="mt-2 text-gray-600"><strong>Duration:</strong> 2 months</p>
            <p className="mt-2 text-gray-600"><strong>Cost:</strong> $250</p>
            <p className="mt-2 text-gray-600"><strong>Schedule:</strong> Weekdays</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Objectives</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Understand the operation of a Bajaj vehicle.</li>
              <li>Develop safe driving skills for urban environments.</li>
              <li>Pass the Bajaj driving certification.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Curriculum</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Introduction to Bajaj Vehicles</li>
              <li>Basic Driving Techniques</li>
              <li>Urban Driving and Traffic Management</li>
              <li>Certification Preparation</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Outcomes</h3>
            <p className="mt-2 text-gray-600">Students will be able to navigate urban environments with a Bajaj vehicle and will be well-prepared for the certification test.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Instructor</h3>
            <div className="flex items-center mt-2">
              <Image
                src="/path/to/instructor-placeholder.jpg" // Replace with actual path
                alt="Instructor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-600"><strong>Name:</strong> Jane Smith</p>
                <p className="text-gray-600"><strong>Experience:</strong> 8 years of Bajaj driving instruction.</p>
                <p className="text-gray-600"><strong>Bio:</strong> Jane specializes in Bajaj training with extensive experience in urban driving techniques.</p>
              </div>
            </div>
          </div>

          <Link href="/registration" className="mt-4 inline-block bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Register Now
          </Link>
        </div>

        {/* People's Bus Course */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/path/to/peoples-bus-image.jpg" // Replace with actual path
            alt="People's Bus Course"
            width={500}
            height={300}
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">People's Bus Course</h2>
          <p className="mt-2 text-gray-600">Learn to operate a bus with confidence and professionalism.</p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p className="mt-2 text-gray-600"><strong>Duration:</strong> 4 months</p>
            <p className="mt-2 text-gray-600"><strong>Cost:</strong> $400</p>
            <p className="mt-2 text-gray-600"><strong>Schedule:</strong> Flexible</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Objectives</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Learn to drive a bus safely and efficiently.</li>
              <li>Understand bus operations and maintenance.</li>
              <li>Prepare for bus driver licensing and certification.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Curriculum</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Bus Operations Overview</li>
              <li>Driving Techniques for Buses</li>
              <li>Maintenance and Safety Checks</li>
              <li>Regulations and Certification</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Outcomes</h3>
            <p className="mt-2 text-gray-600">Graduates will be able to operate buses safely, understand operational requirements, and achieve necessary certifications.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Instructor</h3>
            <div className="flex items-center mt-2">
              <Image
                src="/path/to/instructor-placeholder.jpg" // Replace with actual path
                alt="Instructor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-600"><strong>Name:</strong> Michael Johnson</p>
                <p className="text-gray-600"><strong>Experience:</strong> 12 years of bus driving and training experience.</p>
                <p className="text-gray-600"><strong>Bio:</strong> Michael has extensive experience in training bus drivers, focusing on both operational skills and regulatory knowledge.</p>
              </div>
            </div>
          </div>

          <Link href="/registration" className="mt-4 inline-block bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;
