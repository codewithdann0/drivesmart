"use client"; // Mark this component as a Client Component

import Link from "next/link";
import RegisterButton from "../components/RegisterButton";
import { useState } from "react";

export default function Registration() {  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    startDate: "",
    gradeCertificate: null,
    kebeleId: null,
    photo: null,
    medicalStatus: null,
  });

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data goes here
    alert("Registration submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Registration Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength={12}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Course Selection */}
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">
            Select Course
          </label>
          <select
            id="course"
            value={formData.course}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          >
            <option value="">Choose the course you want to take</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="bajaj">Bajaj</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Preferred Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* File Uploads */}
        <div className="mb-4">
          <label htmlFor="gradeCertificate" className="block text-sm font-medium text-gray-700">
            Grade Ten or Above Education Certificate (or Matric Card)
          </label>
          <input
            type="file"
            id="gradeCertificate"
            onChange={handleInputChange}
            className="mt-1 block w-full text-sm text-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="kebeleId" className="block text-sm font-medium text-gray-700">
            Kebele ID Card
          </label>
          <input
            type="file"
            id="kebeleId"
            onChange={handleInputChange}
            className="mt-1 block w-full text-sm text-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Photo (4x3) - 4 Copies
          </label>
          <input
            type="file"
            id="photo"
            onChange={handleInputChange}
            className="mt-1 block w-full text-sm text-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="medicalStatus" className="block text-sm font-medium text-gray-700">
            Health or Medical Status
          </label>
          <input
            type="file"
            id="medicalStatus"
            onChange={handleInputChange}
            className="mt-1 block w-full text-sm text-gray-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <RegisterButton />
        </div>
      </form>
    </div>
  );
}
