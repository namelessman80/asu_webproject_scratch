"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ProviderSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="bg-maroon-700 text-white rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Find Mental Health Services</h2>
      <p className="mb-6">
        Use our platform to find the best mental health services based on your needs. Filter by location, services,
        insurance, and more.
      </p>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by provider name or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white text-black w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="bg-white text-gray-800 hover:bg-gray-100"
            onClick={() => setShowFilters(!showFilters)}
          >
            More Filters
          </Button>

          <Button type="submit" className="bg-pink-300 text-gray-800 hover:bg-pink-400" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}
          </Button>
        </div>
      </form>

      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Location</label>
            <select className="w-full p-2 rounded text-black">
              <option value="">Any Location</option>
              <option value="tempe">Tempe</option>
              <option value="phoenix">Phoenix</option>
              <option value="scottsdale">Scottsdale</option>
              <option value="mesa">Mesa</option>
              <option value="chandler">Chandler</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Service Type</label>
            <select className="w-full p-2 rounded text-black">
              <option value="">Any Service</option>
              <option value="individual-therapy">Individual Therapy</option>
              <option value="group-therapy">Group Therapy</option>
              <option value="psychiatry">Psychiatry</option>
              <option value="crisis-intervention">Crisis Intervention</option>
              <option value="substance-abuse">Substance Abuse Treatment</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Insurance</label>
            <select className="w-full p-2 rounded text-black">
              <option value="">Any Insurance</option>
              <option value="aetna">Aetna</option>
              <option value="blue-cross">Blue Cross Blue Shield</option>
              <option value="cigna">Cigna</option>
              <option value="medicare">Medicare</option>
              <option value="medicaid">Medicaid</option>
              <option value="united">UnitedHealthcare</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
