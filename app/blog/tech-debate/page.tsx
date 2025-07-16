import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, MessageSquare, ExternalLink, Zap, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogLayout from "@/components/blog-layout"

export default function TechDebatePage() {
  return (
    <BlogLayout title="Technology Debate">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Video className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">Which Technologies Are Better?</CardTitle>
              <CardDescription>Comparing different programming technologies and frameworks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The world of technology is full of debates about which tools, languages, and frameworks are "better." In
              this video, I share my perspective on various technology comparisons based on my learning experience as a
              software development student.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I discuss the pros and cons of different technologies, when to use each one, and why the "best" technology
              often depends on the specific context and requirements.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-lg p-8 text-center mb-8">
            <Video className="h-16 w-16 text-red-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Video: Technology Debate Discussion</h3>
            <p className="text-red-200 mb-4">
              Watch my analysis of different programming technologies and their trade-offs
            </p>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Watch Video (Add your video link here)
            </Button>
          </div>

          {/* Debate Topics */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-orange-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Key Debate Topics Covered</h3>
            </div>

            <div className="space-y-6">
              {/* Frontend Frameworks */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Frontend Frameworks: React vs Vue vs Angular
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">React</h5>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> Large ecosystem, flexibility, job market
                      </p>
                      <p>
                        <strong>Cons:</strong> Steep learning curve, frequent updates
                      </p>
                      <p>
                        <strong>Best for:</strong> Complex applications, large teams
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Vue.js</h5>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> Easy to learn, great documentation
                      </p>
                      <p>
                        <strong>Cons:</strong> Smaller ecosystem, less job opportunities
                      </p>
                      <p>
                        <strong>Best for:</strong> Small to medium projects, beginners
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">Angular</h5>
                    <div className="text-sm text-red-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> Full framework, TypeScript, enterprise-ready
                      </p>
                      <p>
                        <strong>Cons:</strong> Complex, heavy, steep learning curve
                      </p>
                      <p>
                        <strong>Best for:</strong> Large enterprise applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Backend Technologies: Node.js vs Python vs Java
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="h-4 w-4 text-yellow-600 mr-1" />
                      <h5 className="font-semibold text-yellow-800">Node.js</h5>
                    </div>
                    <div className="text-sm text-yellow-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> JavaScript everywhere, fast development
                      </p>
                      <p>
                        <strong>Cons:</strong> Single-threaded, callback complexity
                      </p>
                      <p>
                        <strong>Best for:</strong> Real-time apps, APIs, microservices
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="h-4 w-4 text-purple-600 mr-1" />
                      <h5 className="font-semibold text-purple-800">Python</h5>
                    </div>
                    <div className="text-sm text-purple-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> Easy syntax, great libraries, AI/ML
                      </p>
                      <p>
                        <strong>Cons:</strong> Slower execution, GIL limitations
                      </p>
                      <p>
                        <strong>Best for:</strong> Data science, AI, web development
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Cpu className="h-4 w-4 text-orange-600 mr-1" />
                      <h5 className="font-semibold text-orange-800">Java</h5>
                    </div>
                    <div className="text-sm text-orange-700 space-y-1">
                      <p>
                        <strong>Pros:</strong> Performance, scalability, enterprise support
                      </p>
                      <p>
                        <strong>Cons:</strong> Verbose syntax, slower development
                      </p>
                      <p>
                        <strong>Best for:</strong> Enterprise applications, Android
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Comparison */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Databases: SQL vs NoSQL</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-indigo-800 mb-2">SQL Databases (PostgreSQL, MySQL)</h5>
                    <div className="text-sm text-indigo-700 space-y-2">
                      <p>
                        <strong>Advantages:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>ACID compliance and data consistency</li>
                        <li>Complex queries and relationships</li>
                        <li>Mature ecosystem and tools</li>
                        <li>Standardized query language</li>
                      </ul>
                      <p>
                        <strong>Best for:</strong> Financial systems, complex relationships
                      </p>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-teal-800 mb-2">NoSQL Databases (MongoDB, Firebase)</h5>
                    <div className="text-sm text-teal-700 space-y-2">
                      <p>
                        <strong>Advantages:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Flexible schema and scalability</li>
                        <li>Better performance for simple queries</li>
                        <li>Easier horizontal scaling</li>
                        <li>JSON-like document storage</li>
                      </ul>
                      <p>
                        <strong>Best for:</strong> Content management, real-time apps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Perspective */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">My Perspective on Technology Debates</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Context Matters Most</h4>
                  <p className="text-sm text-gray-600">
                    The "best" technology depends entirely on the project requirements, team expertise, timeline, and
                    long-term maintenance considerations. There's no universal winner.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Learn Fundamentals First</h4>
                  <p className="text-sm text-gray-600">
                    Instead of getting caught up in framework wars, focus on understanding core programming concepts
                    that transfer across technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Embrace Continuous Learning</h4>
                  <p className="text-sm text-gray-600">
                    Technology evolves rapidly. The key is developing the ability to learn and adapt to new tools rather
                    than becoming attached to specific technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Consider the Ecosystem</h4>
                  <p className="text-sm text-gray-600">
                    Look beyond just the technology itself - consider community support, documentation quality, job
                    market, and long-term viability.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm font-medium">
                  💡 Key Takeaway: As a student, I'm learning that the most valuable skill is not knowing which
                  technology is "best," but understanding how to evaluate and choose the right tool for each specific
                  situation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
