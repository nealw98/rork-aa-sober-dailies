import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By downloading, installing, or using AA Sober Dailies ("the App"), you agree to be bound 
                by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 mb-4">
                AA Sober Dailies is a mobile application designed to support individuals in recovery 
                from alcohol addiction. The App provides:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Daily reflections and meditations</li>
                <li>Gratitude journaling tools</li>
                <li>Evening review and inventory features</li>
                <li>AI-powered sponsor support</li>
                <li>Recovery literature and resources</li>
              </ul>
              <p className="text-gray-700">
                The App is intended as a supplement to, not a replacement for, professional treatment 
                and support groups like Alcoholics Anonymous.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> AA Sober Dailies is not a substitute for professional 
                medical advice, diagnosis, or treatment. The App is designed to support recovery 
                but should not be used as the sole method of treatment for alcohol addiction.
              </p>
              <p className="text-gray-700 mb-4">
                If you are experiencing a medical emergency or crisis, please:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Call emergency services (911 in the US)</li>
                <li>Contact your healthcare provider</li>
                <li>Reach out to your sponsor or support network</li>
                <li>Seek immediate professional help</li>
              </ul>
              <p className="text-gray-700">
                Always consult with qualified healthcare professionals regarding your recovery plan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of the App, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Use the App only for its intended purpose</li>
                <li>Not share your account or personal information with others</li>
                <li>Maintain the confidentiality of your recovery journey</li>
                <li>Seek professional help when needed</li>
                <li>Not use the App while under the influence of alcohol or drugs</li>
                <li>Report any technical issues or concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The App and its content, including but not limited to text, graphics, images, 
                and software, are owned by AA Sober Dailies and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                Daily Reflections content is used with permission from Alcoholics Anonymous 
                World Services, Inc. All rights to the Daily Reflections book remain with AAWS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our 
                <Link href="/privacy" className="text-blue-600 hover:underline mx-1">Privacy Policy</Link>
                to understand how we collect, use, and protect your information.
              </p>
              <p className="text-gray-700">
                Your personal data, including journal entries and conversation history, 
                is stored locally on your device and is not transmitted to our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, AA Sober Dailies shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data or personal information</li>
                <li>Interruption of service or technical issues</li>
                <li>Relapse or setbacks in recovery</li>
                <li>Decisions made based on App content or AI responses</li>
              </ul>
              <p className="text-gray-700">
                The App is provided "as is" without warranties of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Sponsor Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The AI sponsor feature is designed to provide general support and guidance 
                based on AA principles. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>AI responses are not professional medical or therapeutic advice</li>
                <li>AI cannot replace human sponsors or professional counselors</li>
                <li>Use your judgment when following AI suggestions</li>
                <li>Always consult professionals for serious concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your access to the App at any time, with or without 
                cause, with or without notice. You may also stop using the App at any time by 
                uninstalling it from your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify users 
                of significant changes through the App or by email. Continued use of the App 
                after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws 
                of the jurisdiction in which AA Sober Dailies operates, without regard to 
                conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: legal@aasoberdailies.com<br />
                Support: <Link href="/support" className="text-blue-600 hover:underline">Visit our Support page</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

