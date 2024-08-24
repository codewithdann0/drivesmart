"use client"; // Make sure this is a client-side component

import { useEffect, useState } from 'react';

const testimonialPage = () => {
    const [Testimonials, setTestimonials] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonials');
                if (response.ok) {
                    const data = await response.json();
                    setTestimonials(data);
                } else {
                    setError('Failed to fetch news');
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Testimonials from our Students</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="container mx-auto px-4 py-10 my-10">
                {Testimonials.map((testimonial: any) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md my-10">
                      <img src="/public/B.jfif" alt="" />
                        <h2 className="text-2xl font-bold mb-2">{testimonial.testimonial}</h2>
                        <p className="text-gray-700 mb-4">{testimonial.name}</p>
                        <p className="font-semibold">Price: ${testimonial.date}</p>
                        {/* Add more course details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default testimonialPage;
