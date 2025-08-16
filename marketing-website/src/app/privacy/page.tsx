import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2 text-gray-600" />
              <span className="text-gray-600">Back to Home</span>
            </Link>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">AA Sober Dailies</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                AA Sober Dailies ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information 
                when you use our mobile application and related services.
              </p>
              <p className="text-gray-700">
                Your recovery journey is deeply personal, and we understand the importance of 
                maintaining your privacy and confidentiality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Gratitude journal entries</li>
                <li>Evening review responses</li>
                <li>AI sponsor conversation history</li>
                <li>App usage preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Device Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Device type and operating system</li>
                <li>App version and usage statistics</li>
                <li>Crash reports and performance data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain the app's functionality</li>
                <li>Personalize your experience and content</li>
                <li>Improve our services and develop new features</li>
                <li>Respond to your support requests</li>
                <li>Ensure the security and integrity of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                <strong>Local Storage:</strong> Your personal data, including journal entries and 
                conversation history, is stored locally on your device. This ensures maximum 
                privacy and control over your information.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Encryption:</strong> We implement industry-standard encryption to protect 
                your data both in transit and at rest.
              </p>
              <p className="text-gray-700">
                <strong>No Cloud Storage:</strong> We do not store your personal recovery data 
                on our servers. Your journey remains private and under your control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer (with notice)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal data stored on your device</li>
                <li>Delete your data by uninstalling the app</li>
                <li>Export your data (where technically feasible)</li>
                <li>Opt out of analytics and crash reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our app is not intended for children under 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy in the app and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@aasoberdailies.com<br />
                Support: <Link href="/support" className="text-blue-600 hover:underline">Visit our Support page</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

