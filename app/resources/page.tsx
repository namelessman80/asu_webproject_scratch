export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mental Health Resources</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Crisis Resources</h2>
          <ul className="space-y-2">
            <li>
              <strong>National Suicide Prevention Lifeline:</strong> 988 or 1-800-273-8255
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text HOME to 741741
            </li>
            <li>
              <strong>ASU Crisis Line:</strong> 480-921-1006
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">ASU Resources</h2>
          <ul className="space-y-2">
            <li>
              <strong>ASU Counseling Services:</strong> 480-965-6146
            </li>
            <li>
              <strong>ASU Health Services:</strong> 480-965-3349
            </li>
            <li>
              <strong>ASU Wellness:</strong> wellness@asu.edu
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Online Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.nimh.nih.gov" className="text-maroon-700 hover:underline">
                National Institute of Mental Health
              </a>
            </li>
            <li>
              <a href="https://www.nami.org" className="text-maroon-700 hover:underline">
                National Alliance on Mental Illness
              </a>
            </li>
            <li>
              <a href="https://www.samhsa.gov" className="text-maroon-700 hover:underline">
                Substance Abuse and Mental Health Services Administration
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Self-Help Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                Stress Management Techniques
              </a>
            </li>
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                Mindfulness Practices
              </a>
            </li>
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                Sleep Hygiene Tips
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Apps and Tools</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.calm.com" className="text-maroon-700 hover:underline">
                Calm
              </a>{" "}
              - Meditation and sleep app
            </li>
            <li>
              <a href="https://www.headspace.com" className="text-maroon-700 hover:underline">
                Headspace
              </a>{" "}
              - Mindfulness and meditation
            </li>
            <li>
              <a href="https://www.talkspace.com" className="text-maroon-700 hover:underline">
                Talkspace
              </a>{" "}
              - Online therapy
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Educational Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                Understanding Mental Health Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                How to Support Someone with Mental Health Issues
              </a>
            </li>
            <li>
              <a href="#" className="text-maroon-700 hover:underline">
                Mental Health Stigma and Awareness
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
