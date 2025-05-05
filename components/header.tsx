import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-maroon-700 text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-3">
            <Image src="/asu-logo.png" alt="ASU Logo" width={40} height={40} className="rounded-full" />
          </div>
          <h1 className="text-xl font-bold">Mental Health Services Referral</h1>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
