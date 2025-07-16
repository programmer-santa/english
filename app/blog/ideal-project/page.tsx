import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Lightbulb, ExternalLink, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogLayout from "@/components/blog-layout"

export default function IdealProjectPage() {
  return (
    <BlogLayout title="My Ideal Project">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Video className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">My Dream Software Project</CardTitle>
              <CardDescription>Envisioning the perfect development project</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Every developer has a vision of their ideal project - something that combines passion, purpose, and
              technical excellence. In this video, I share my thoughts on what would constitute the perfect software
              development project for me.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I discuss the technologies I'd love to work with, the type of problem I'd want to solve, and the impact I
              hope to make through software development.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 text-center mb-8">
            <Video className="h-16 w-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Video: My Ideal Project Vision</h3>
            <p className="text-blue-200 mb-4">Watch as I describe my dream software development project</p>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Watch Video (Add your video link here)
            </Button>
          </div>

          {/* Project Vision */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Project Vision</h3>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Educational Technology Platform</h4>
              <p className="text-yellow-700 mb-4">
                My ideal project would be an innovative educational technology platform that helps students learn
                programming through interactive, gamified experiences. It would combine modern web technologies with AI
                to create personalized learning paths.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Target className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h5 className="font-medium text-yellow-800">Purpose</h5>
                  <p className="text-sm text-yellow-700">Make programming education accessible and engaging</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h5 className="font-medium text-yellow-800">Impact</h5>
                  <p className="text-sm text-yellow-700">Help thousands of students learn to code</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h5 className="font-medium text-yellow-800">Innovation</h5>
                  <p className="text-sm text-yellow-700">Cutting-edge tech with AI integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Ideal Tech Stack</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Frontend</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• React.js with TypeScript</li>
                    <li>• Next.js for SSR and performance</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Three.js for 3D interactions</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Backend</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Node.js with Express</li>
                    <li>• GraphQL API</li>
                    <li>• PostgreSQL database</li>
                    <li>• Redis for caching</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">AI & Analytics</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Machine Learning for personalization</li>
                    <li>• Natural Language Processing</li>
                    <li>• Real-time analytics</li>
                    <li>• Adaptive learning algorithms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Interactive Learning</h4>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• Code editor with real-time feedback</li>
                    <li>• Interactive coding challenges</li>
                    <li>• Visual programming concepts</li>
                    <li>• Collaborative coding sessions</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Gamification</h4>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• Achievement badges and rewards</li>
                    <li>• Progress tracking and levels</li>
                    <li>• Leaderboards and competitions</li>
                    <li>• Social learning features</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Personalization</h4>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Adaptive learning paths</li>
                    <li>• Skill assessment and recommendations</li>
                    <li>• Personalized project suggestions</li>
                    <li>• AI-powered tutoring assistant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Project */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why This Would Be My Ideal Project</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Personal Growth</h4>
                <p className="text-sm text-gray-600 mb-4">
                  This project would challenge me to work with cutting-edge technologies while solving a meaningful
                  problem in education.
                </p>

                <h4 className="font-medium text-gray-700 mb-2">Social Impact</h4>
                <p className="text-sm text-gray-600">
                  Creating tools that help others learn programming would give my work deeper purpose and contribute to
                  the developer community.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Technical Excellence</h4>
                <p className="text-sm text-gray-600 mb-4">
                  The project would require mastering modern development practices, AI integration, and scalable
                  architecture design.
                </p>

                <h4 className="font-medium text-gray-700 mb-2">Long-term Vision</h4>
                <p className="text-sm text-gray-600">
                  This platform could evolve and grow, potentially becoming a significant contribution to programming
                  education worldwide.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
