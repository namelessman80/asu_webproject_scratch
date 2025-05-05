import type { Provider } from "@/lib/types"
import { MapPin, Phone, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProviderListProps {
  providers: Provider[]
}

export default function ProviderList({ providers }: ProviderListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Providers</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <div key={provider.id} className="border rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{provider.name}</h3>

              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{provider.address}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-1">Services</h4>
                <div className="flex flex-wrap gap-1">
                  {provider.services.map((service) => (
                    <span key={service} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-1">Insurance</h4>
                <div className="flex flex-wrap gap-1">
                  {provider.insurance.map((ins) => (
                    <span key={ins} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-1">Languages</h4>
                <div className="flex items-center">
                  <Languages className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm">{provider.languages.join(", ")}</span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Phone className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm">{provider.phone}</span>
              </div>

              <Button className="w-full bg-maroon-700 hover:bg-maroon-800">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
