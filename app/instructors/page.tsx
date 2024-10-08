const Page = () => {
  const instructors = [
      { name: "Daniel Tigistu", age: "28", experience: "8", skill: "4.5", role: "Bajaji" },
      { name: "Dawit Nega", age: "40", experience: "16", skill: "5", role: "Bus" },
      { name: "Abel Selemon", age: "40", experience: "16", skill: "5", role: "Bus" },
      { name: "Wiha Yimane", age: "40", experience: "16", skill: "5", role: "Bus" },
  ];

  return (
      <div className="bg-gray-100 min-h-screen py-10">
          <section className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Instructors</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {instructors.map((instructor) => (
                      <div
                          key={instructor.name}
                          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructor: {instructor.name}</h2>
                          <p className="text-gray-600">Age: {instructor.age}</p>
                          <p className="text-gray-600">
                              Experience: <span className="font-medium">{instructor.experience} Years</span> as Instructor
                          </p>
                          <p className="text-gray-600">Skill: <span className="font-medium">{instructor.skill} Star</span></p>
                          <h4 className="text-gray-700 font-medium mt-4">Role: {instructor.role} Instructor</h4>
                      </div>
                  ))}
              </div>
          </section>
      </div>
  );
};

export default Page;
