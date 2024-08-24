"use client"; // Make sure this is a client-side component

import { useEffect, useState } from 'react';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses');
                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                } else {
                    setError('Failed to fetch courses');
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((course: any) => (
                    <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
                      <img src={course.image_url} alt="" />
                        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                        <p className="text-gray-700 mb-4">{course.description}</p>
                        <p className="font-semibold">Price: ${course.cost}</p>
                        {/* Add more course details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
