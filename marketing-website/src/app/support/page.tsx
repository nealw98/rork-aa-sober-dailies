import Link from 'next/link'
import { Heart, ArrowLeft, Mail, MessageCircle, HelpCircle, Download, Shield, Clock } from 'lucide-react'

export default function SupportPage() {
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

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to support your recovery journey. Find answers to common questions 
            or get in touch with our team.
          </p>
          
          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/ai-trial" 
              className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Try AI Sponsor</h3>
              <p className="text-sm text-gray-600">Experience our AI sponsor for free</p>
            </Link>
            
            <Link 
              href="#download" 
              className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Download className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Download App</h3>
              <p className="text-sm text-gray-600">Get the full app experience</p>
            </Link>
            
            <a 
              href="mailto:support@aasoberdailies.com" 
              className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Email our support team</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is AA Sober Dailies affiliated with Alcoholics Anonymous?</h3>
              <p className="text-gray-700">
                AA Sober Dailies is not officially affiliated with Alcoholics Anonymous World Services, Inc. 
                We are an independent app designed to support individuals in recovery using AA principles 
                and literature. We use Daily Reflections content with permission from AAWS.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is my data private and secure?</h3>
              <p className="text-gray-700">
                Yes, your privacy is our top priority. All your personal data, including journal entries, 
                gratitude lists, and conversation history, is stored locally on your device. We do not 
                collect or store your personal recovery data on our servers. Your journey remains completely private.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can the AI sponsor replace a human sponsor?</h3>
              <p className="text-gray-700">
                No, the AI sponsor is designed to provide additional support and guidance, but it cannot 
                replace the human connection and experience of a real sponsor. We recommend using the AI 
                sponsor as a supplement to, not a replacement for, human sponsorship and support groups.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I'm in crisis or need immediate help?</h3>
              <p className="text-gray-700">
                If you're experiencing a crisis or emergency, please:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Call emergency services (911 in the US)</li>
                <li>Contact your healthcare provider</li>
                <li>Reach out to your sponsor or support network</li>
                <li>Call the National Suicide Prevention Lifeline: 988</li>
                <li>Seek immediate professional help</li>
              </ul>
              <p className="text-gray-700 mt-2">
                The app is not a substitute for professional medical or crisis intervention services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does the app cost?</h3>
              <p className="text-gray-700">
                AA Sober Dailies is free to download and use. We believe recovery support should be 
                accessible to everyone who needs it. There are no hidden fees or premium features.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What devices are supported?</h3>
              <p className="text-gray-700">
                The app is available for both iOS and Android devices. You can download it from the 
                App Store (iOS) or Google Play Store (Android). The app requires iOS 13.0 or later 
                for iPhone/iPad, or Android 6.0 (API level 23) or later for Android devices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I export my data?</h3>
              <p className="text-gray-700">
                Currently, your data is stored locally on your device. We're working on data export 
                features to allow you to backup and transfer your recovery journal and progress data. 
                This will be available in a future update.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I report a bug or suggest a feature?</h3>
              <p className="text-gray-700">
                We welcome feedback and suggestions! You can report bugs or suggest new features by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Emailing us at support@aasoberdailies.com</li>
                <li>Using the feedback option in the app settings</li>
                <li>Leaving a review on the App Store or Google Play Store</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:support@aasoberdailies.com" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                support@aasoberdailies.com
              </a>
            </div>
            
            <div className="text-center">
              <HelpCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Try AI Sponsor</h3>
              <p className="text-gray-600 mb-4">
                Experience our AI sponsor for free and see how it can support your recovery.
              </p>
              <Link 
                href="/ai-trial" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Download AA Sober Dailies and get access to all features, including unlimited AI sponsor conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#download-ios" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Link>
            <Link 
              href="#download-android" 
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

