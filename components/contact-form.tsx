"use client"

import type React from "react"
import { useState } from "react"
import { Users } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if(res.ok) {
        console.log(formData)
        alert("Thank you for your inquiry. We will contact you shortly!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "",
          checkIn: "",
          checkOut: "",
          message: "",
        })
        } else {
            alert("There was an error. Please try again later.")
          }
          } catch (err) {
            console.error(err)
            alert("Something went wrong.")
          }
    // In a real application, you would send this data to your server
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-gray-700 mb-1">
            Number of Guests
          </label>
          <div className="relative">
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
            >
              <option value="">Select</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="checkIn" className="block text-gray-700 mb-1">
            Check-in Date
          </label>
          <div className="date-input-container">
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="date-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-gray-700 mb-1">
            Check-out Date
          </label>
          <div className="date-input-container">
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="date-input"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>
      </div>

      <button type="submit" className="w-full btn-primary py-3 rounded-md">
        Submit Inquiry
      </button>
    </form>
  )
}
