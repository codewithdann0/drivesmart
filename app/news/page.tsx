"use client"; // Make sure this is a client-side component

import { useEffect, useState } from 'react';

const CoursesPage = () => {
    const [News, setNews] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/news');
                if (response.ok) {
                    const data = await response.json();
                    setNews(data);
                } else {
                    setError('Failed to fetch news');
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Story Of the Week</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="container mx-auto px-4 py-10 my-10">
                {News.map((New: any) => (
                    <div key={New.id} className="bg-white p-6 rounded-lg shadow-md my-10">
                      <img src="/public/B.jfif" alt="" />
                        <h2 className="text-2xl font-bold mb-2">{New.title}</h2>
                        <p className="text-gray-700 mb-4">{New.content}</p>
                        <p className="font-semibold">Price: ${New.date}</p>
                        {/* Add more course details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
