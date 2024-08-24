"use client"; // Make sure this is a client-side component

import { useEffect, useState } from 'react';

const CoursesPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('/api/faqs');
                if (response.ok) {
                    const data = await response.json();
                    setFaqs(data);
                } else {
                    setError('Failed to fetch news');
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        fetchFaqs();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="container mx-auto px-4 py-10 my-10">
                {faqs.map((faq: any) => (
                    <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md my-10">
                      <img src="/public/B.jfif" alt="" />
                        <h2 className="text-2xl font-bold mb-2">{faq.question}</h2>
                        <p className="text-gray-700 mb-4">{faq.answer}</p>
                        
                        {/* Add more course details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
