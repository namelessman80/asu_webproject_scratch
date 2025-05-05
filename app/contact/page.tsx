"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Have questions about our mental health referral service? Need help finding the right provider? Please fill
            out the form and our team will get back to you as soon as possible.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Contact Information</h2>
            <p className="mb-2">
              <strong>Email:</strong> mentalhealth@asu.edu
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (480) 965-6146
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 1100 E University Dr, Tempe, Arizona 85281
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Hours of Operation</h2>
            <p className="mb-2">
              <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
            </p>
            <p className="mb-2">
              <strong>Saturday - Sunday:</strong> Closed
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-maroon-700 hover:bg-maroon-800" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
