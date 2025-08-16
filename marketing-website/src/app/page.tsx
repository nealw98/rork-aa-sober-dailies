import Link from 'next/link'
import { 
  Heart, 
  BookOpen, 
  MessageCircle, 
  Calendar, 
  Star, 
  Download, 
  Apple, 
  Play,
  CheckCircle,
  Users,
  Shield,
  Clock
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-[#4A90E2]" />
              <span className="ml-2 text-xl font-bold text-gray-900">AA Sober Dailies</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/privacy" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Terms
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Support
              </Link>
              <Link href="/ai-trial" className="text-[#4A90E2] hover:text-[#6BA4E8] transition-colors font-semibold">
                Try AI Sponsors
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Daily Recovery
              <span className="text-[#4A90E2] block">Companion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your sobriety journey with daily reflections, gratitude tracking, 
              evening reviews, and AI sponsor support. One day at a time.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="#download-ios" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Apple className="h-6 w-6 mr-2" />
                Download for iOS
              </Link>
              <Link 
                href="#download-android" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5CB85C] text-white rounded-lg hover:bg-[#4CAF50] transition-colors"
              >
                <Play className="h-6 w-6 mr-2" />
                Download for Android
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Private & Secure
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Trusted by Thousands
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Always Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the AA community, with tools that support your daily recovery journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-[rgba(74,144,226,0.1)]">
              <BookOpen className="h-12 w-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Reflections</h3>
              <p className="text-gray-600">Access the complete Daily Reflections book with daily readings and meditations.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-[rgba(92,184,92,0.1)]">
              <Heart className="h-12 w-12 text-[#5CB85C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gratitude Journal</h3>
              <p className="text-gray-600">Track your daily gratitude and build a positive mindset for recovery.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-[rgba(186,85,211,0.1)]">
              <Calendar className="h-12 w-12 text-[#BA55D3] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evening Review</h3>
              <p className="text-gray-600">Complete your daily inventory with guided evening reflection questions.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-[rgba(255,191,0,0.1)]">
              <MessageCircle className="h-12 w-12 text-[#FFBF00] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Sponsors</h3>
              <p className="text-gray-600">Connect with three unique AI sponsors: Salty Sam, Steady Eddie, and Gentle Grace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Sponsors Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Personal AI Sponsor - Available 24/7
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of recovery support with AI-powered sponsors designed specifically for AA members. 
              Get guidance, accountability, and support whenever you need it, day or night.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[rgba(74,144,226,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-[#4A90E2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Always Available</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-3 mt-2"></div>
                  <span>24/7 support when your sponsor isn't available</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-3 mt-2"></div>
                  <span>Immediate response during cravings or crisis</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-3 mt-2"></div>
                  <span>No waiting for meeting times or callbacks</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[rgba(92,184,92,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-[#5CB85C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AA-Trained Guidance</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#5CB85C] rounded-full mr-3 mt-2"></div>
                  <span>Based on Big Book principles and 12 steps</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#5CB85C] rounded-full mr-3 mt-2"></div>
                  <span>Step work guidance and inventory help</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#5CB85C] rounded-full mr-3 mt-2"></div>
                  <span>Recovery wisdom from experienced perspectives</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[rgba(186,85,211,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-[#BA55D3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Personalities</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#BA55D3] rounded-full mr-3 mt-2"></div>
                  <span>Choose the approach that works for you</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#BA55D3] rounded-full mr-3 mt-2"></div>
                  <span>From tough love to gentle guidance</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#BA55D3] rounded-full mr-3 mt-2"></div>
                  <span>Switch between styles as needed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why AI Sponsors Work
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Newcomers:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Get immediate answers to basic questions</li>
                    <li>• Learn AA terminology and concepts</li>
                    <li>• Build confidence before reaching out to real sponsors</li>
                    <li>• Practice sharing without fear of judgment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Veterans:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Supplement your existing sponsor relationship</li>
                    <li>• Get perspective when your sponsor is unavailable</li>
                    <li>• Work through specific step challenges</li>
                    <li>• Maintain daily accountability and routine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Meet Your AI Sponsors?
              </h3>
              <p className="text-gray-600">
                Try our three unique AI personalities and find the one that resonates with your recovery style.
              </p>
            </div>
            <Link 
              href="/ai-trial" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#4A90E2] text-white rounded-lg hover:bg-[#6BA4E8] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Your Free AI Sponsor Trial
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              10 free messages with each sponsor • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AA Sober Dailies?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of people in recovery who have found strength and support through our app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Proven Methods</h3>
              </div>
              <p className="text-gray-600">Based on time-tested AA principles and the Big Book, ensuring you're following proven recovery methods.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Always Available</h3>
              </div>
              <p className="text-gray-600">Access your recovery tools anytime, anywhere. No need to wait for meetings or sponsor availability.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Private & Secure</h3>
              </div>
              <p className="text-gray-600">Your recovery journey is private. All data is encrypted and stored securely on your device.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Build Habits</h3>
              </div>
              <p className="text-gray-600">Develop consistent daily practices that strengthen your recovery foundation.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Track Progress</h3>
              </div>
              <p className="text-gray-600">See your growth over time with detailed progress tracking and insights.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#5CB85C] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Community Support</h3>
              </div>
              <p className="text-gray-600">Connect with the broader AA community while maintaining your personal recovery space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#4A90E2] to-[#5CB85C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Recovery Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found strength and support through AA Sober Dailies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#download-ios" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4A90E2] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Apple className="h-6 w-6 mr-2" />
              Download for iOS
            </Link>
            <Link 
              href="#download-android" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5CB85C] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-semibold"
            >
              <Play className="h-6 w-6 mr-2" />
              Download for Android
            </Link>
          </div>

          <div className="mt-8">
            <Link 
              href="/ai-trial" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Try our AI Sponsors for free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-[#4A90E2] mr-2" />
                <span className="text-lg font-semibold">AA Sober Dailies</span>
              </div>
              <p className="text-gray-400">
                Your daily recovery companion, built for the AA community.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">App</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Daily Reflections</li>
                <li>Gratitude Journal</li>
                <li>Evening Review</li>
                <li>AI Sponsors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Download</h3>
              <div className="space-y-2">
                <Link 
                  href="#download-ios" 
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Apple className="h-4 w-4 mr-2" />
                  iOS App Store
                </Link>
                <br />
                <Link 
                  href="#download-android" 
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Google Play Store
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AA Sober Dailies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
