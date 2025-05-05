import ProviderSearch from "@/components/provider-search"
import ProviderList from "@/components/provider-list"
import { providers } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProviderSearch />
      <ProviderList providers={providers} />
    </div>
  )
}
