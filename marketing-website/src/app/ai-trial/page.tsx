'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ArrowLeft, Send, MessageCircle, Download, Apple, Play, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  sponsor?: string
}

type SponsorType = 'salty' | 'supportive' | 'grace'

interface Sponsor {
  id: SponsorType
  name: string
  color: string
  bgColor: string
  openingQuestion: string
  openingStatement: string
  avatar: string
  image: string
  style: string
}

const sponsors: Sponsor[] = [
  {
    id: 'salty',
    name: 'Salty Sam',
    color: '#FFBF00',
    bgColor: 'rgba(255,191,0,0.1)',
    openingQuestion: "What's eating at you?",
    openingStatement: "Alright, listen up. I'm Salty Sam, and I've been sober longer than you've probably been screwing up your life with booze. I'm not here to blow sunshine up your ass or tell you what you want to hear. I'm here to tell you what you NEED to hear, even if it pisses you off.",
    avatar: 'SS',
    image: '/salty-sam.jpg',
    style: 'Tough Love Expert'
  },
  {
    id: 'supportive',
    name: 'Steady Eddie',
    color: '#4A90E2',
    bgColor: 'rgba(74,144,226,0.1)',
    openingQuestion: "What's on your mind?",
    openingStatement: "Hi there, I'm Steady Eddie. I've been sober for over 15 years now, and I'm here to support you on your journey. Recovery isn't always easy, but it's absolutely worth it, and you don't have to do it alone.",
    avatar: 'SE',
    image: '/steady-eddie.jpg',
    style: 'Balanced Support'
  },
  {
    id: 'grace',
    name: 'Gentle Grace',
    color: '#BA55D3',
    bgColor: 'rgba(186,85,211,0.1)',
    openingQuestion: "What's on your heart?",
    openingStatement: "Hello there. I'm Gentle Grace, and I'm grateful we can connect today. I've been walking this path of recovery for over 10 years now, and I've found that healing happens gently, one breath at a time.",
    avatar: 'GG',
    image: '/gentle-grace.jpg',
    style: 'Spiritual Guide'
  }
]

export default function AITrialPage() {
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorType>('supportive')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [usageCount, setUsageCount] = useState(0)
  const [showLimitReached, setShowLimitReached] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const MAX_MESSAGES = 10
  const currentSponsor = sponsors.find(s => s.id === selectedSponsor)!

  useEffect(() => {
    // Initialize with the selected sponsor's opening message
    setMessages([{
      id: '1',
      text: currentSponsor.openingStatement,
      isUser: false,
      timestamp: new Date(),
      sponsor: selectedSponsor
    }])
    setUsageCount(0)
    setShowLimitReached(false)
  }, [selectedSponsor])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const generateAIResponse = async (userMessage: string, sponsorType: SponsorType): Promise<string> => {
    // Simulate AI responses based on the actual sponsor personalities from the app
    const responses = {
      salty: [
        "Listen here, sport. I've heard every damn excuse in the book. What are you going to DO about it?",
        "Cut the crap. That's your disease talking, dummy. You're making excuses instead of doing the work.",
        "Quit your damn bellyaching. Pity party's over, buttercup. Time to get to work.",
        "You're trying to control shit you can't control. Where are you powerless here?",
        "That resentment is gonna kill you faster than a bottle. What's your part in this mess?",
        "Fear is just False Evidence Appearing Real. Face it head on or it'll eat you alive.",
        "Of course you want to drink - you're a damn alcoholic! What's your plan?",
        "You're full of shit and making excuses. Time to get honest about your part in this."
      ],
      supportive: [
        "I hear what you're saying, and that sounds really challenging. Have you considered discussing this with your sponsor?",
        "Recovery isn't linear. These challenges are part of the journey. What tools from your program can you use right now?",
        "That's a great insight. You're doing the work, and I'm proud of the steps you're taking.",
        "Resentments can be heavy burdens. Have you worked through this in your inventory?",
        "Relationships in recovery require patience and honest communication. What would honesty look like here?",
        "Your understanding of a higher power is personal and can evolve over time. What feels true for you?",
        "Cravings are temporary. What's one small thing you can do to take care of yourself right now?",
        "You don't have to face this alone. The fellowship is here to support you."
      ],
      grace: [
        "Your fear is a messenger, not a master. Take a breath. What does your heart tell you?",
        "This pain? It's part of the peeling back. You're closer than you think. Your Higher Power is with you.",
        "When you breathe, you return to now — and now is safe. Trust what you're feeling.",
        "God doesn't rush. Why should you? This is part of your spiritual growth.",
        "That sounds really painful, and your feelings make complete sense. You're not broken.",
        "What would it feel like to surrender this? Your Higher Power already knows your heart.",
        "This inventory work can be deeply healing. What patterns do you notice when you get really honest?",
        "Sharing our truth with someone we trust can be so freeing. Who feels safe to talk to about this?"
      ]
    }
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    // Return a random response for the selected sponsor
    const sponsorResponses = responses[sponsorType]
    return sponsorResponses[Math.floor(Math.random() * sponsorResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading || usageCount >= MAX_MESSAGES) return

    const userMessage = inputText.trim()
    setInputText('')
    setIsLoading(true)

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
      sponsor: selectedSponsor
    }
    
    setMessages(prev => [...prev, newUserMessage])
    setUsageCount(prev => prev + 1)

    try {
      const aiResponse = await generateAIResponse(userMessage, selectedSponsor)
      
      const newAIMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
        sponsor: selectedSponsor
      }
      
      setMessages(prev => [...prev, newAIMessage])
      
      // Check if limit reached
      if (usageCount + 1 >= MAX_MESSAGES) {
        setShowLimitReached(true)
      }
    } catch (error) {
      console.error('Error generating response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const remainingMessages = MAX_MESSAGES - usageCount

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
              <Heart className="h-6 w-6 text-[#4A90E2]" />
              <span className="ml-2 text-lg font-semibold text-gray-900">AA Sober Dailies</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Usage Counter */}
      <div className="bg-[#4A90E2] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-semibold">AI Sponsor Trial</span>
            </div>
            <div className="text-sm">
              {remainingMessages > 0 ? (
                <span>{remainingMessages} messages remaining</span>
              ) : (
                <span>Trial completed</span>
              )}
            </div>
          </div>
          <div className="mt-2 w-full bg-[#6BA4E8] rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(usageCount / MAX_MESSAGES) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Meet the Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Your AI Sponsors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the sponsor that resonates with your recovery style. Each offers a unique approach to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className={`text-center cursor-pointer transition-all duration-300 ${
                  selectedSponsor === sponsor.id ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedSponsor(sponsor.id)}
              >
                <div className={`relative mx-auto mb-6 ${
                  selectedSponsor === sponsor.id ? 'ring-4 ring-offset-4' : ''
                }`} style={{ 
                  '--tw-ring-color': sponsor.color,
                  '--tw-ring-offset-color': 'white'
                } as React.CSSProperties}>
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4" style={{ borderColor: sponsor.color }}>
                    <div 
                      className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{ backgroundColor: sponsor.color }}
                    >
                      {sponsor.avatar}
                    </div>
                  </div>
                  {selectedSponsor === sponsor.id && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <p className="text-gray-600 italic mb-3">"{sponsor.openingQuestion}"</p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{ 
                    backgroundColor: sponsor.bgColor,
                    color: sponsor.color
                  }}
                >
                  {sponsor.style}
                </span>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {sponsor.openingStatement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div 
              className="p-6 text-white"
              style={{ backgroundColor: currentSponsor.color }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{currentSponsor.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentSponsor.name}</h3>
                  <p className="text-white/80">{currentSponsor.style}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-[#4A90E2] text-white'
                        : `bg-[${currentSponsor.bgColor}] text-gray-900 border border-[${currentSponsor.color}]`
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div 
                    className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg border"
                    style={{ borderColor: currentSponsor.color }}
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              {showLimitReached ? (
                <div className="text-center py-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Trial Limit Reached
                    </h3>
                    <p className="text-yellow-700 mb-4">
                      You've used all 10 free messages. Download the full app to continue 
                      your conversation with unlimited AI sponsor support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link 
                        href="#download-ios" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#6BA4E8] transition-colors"
                      >
                        <Apple className="h-5 w-5 mr-2" />
                        Download for iOS
                      </Link>
                      <Link 
                        href="#download-android" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#5CB85C] text-white rounded-lg hover:bg-[#4CAF50] transition-colors"
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Download for Android
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Tell ${currentSponsor.name} ${currentSponsor.openingQuestion.toLowerCase()}...`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    disabled={isLoading || remainingMessages <= 0}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading || remainingMessages <= 0}
                    className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#6BA4E8] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About the AI Sponsors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What they can do:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Provide guidance based on AA principles</li>
                  <li>• Help with daily reflections and step work</li>
                  <li>• Offer encouragement and support</li>
                  <li>• Answer questions about recovery</li>
                  <li>• Suggest helpful resources and practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Important notes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Not a replacement for human sponsors</li>
                  <li>• Not professional medical advice</li>
                  <li>• For support and guidance only</li>
                  <li>• Always seek professional help when needed</li>
                  <li>• Use alongside traditional AA support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="mt-8 bg-gradient-to-r from-[#4A90E2] to-[#5CB85C] rounded-lg p-6 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Get Unlimited AI Sponsor Access</h3>
            <p className="text-blue-100 mb-4">
              Download the full app to continue your conversation and access all recovery tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="#download-ios" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#4A90E2] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Apple className="h-5 w-5 mr-2" />
                Download for iOS
              </Link>
              <Link 
                href="#download-android" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#5CB85C] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-semibold"
              >
                <Play className="h-5 w-5 mr-2" />
                Download for Android
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
