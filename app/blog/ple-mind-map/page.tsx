import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Upload } from "lucide-react"
import BlogLayout from "@/components/blog-layout"

export default function PLEMindMapPage() {
  return (
    <BlogLayout title="Personal Learning Environment (PLE)">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Brain className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">Personal Learning Environment Mind Map</CardTitle>
              <CardDescription>Visual representation of my learning ecosystem</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              A Personal Learning Environment (PLE) represents the tools, communities, and services that constitute the
              individual educational platforms that learners use to direct their own learning and pursue educational
              goals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This mind map illustrates my personal learning ecosystem as a software development student, showing the
              various resources, tools, and platforms I use to enhance my learning experience.
            </p>
          </div>

          {/* Placeholder for the mind map image */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50">
            <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">PLE Mind Map Image</h3>
            <p className="text-gray-500">Please upload your PLE mind map JPG image here</p>
            <p className="text-sm text-gray-400 mt-2">
              The image will show the interconnected elements of my personal learning environment
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Key Components of My PLE:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Learning Platforms</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• SENA Virtual Platform</li>
                  <li>• YouTube Educational Channels</li>
                  <li>• Online Coding Platforms</li>
                  <li>• Documentation Sites</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Development Tools</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Code Editors (VS Code)</li>
                  <li>• Version Control (Git)</li>
                  <li>• Testing Environments</li>
                  <li>• Project Management Tools</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Community & Support</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Study Groups</li>
                  <li>• Programming Forums</li>
                  <li>• Mentorship Networks</li>
                  <li>• Peer Collaboration</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Resources & References</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Technical Books</li>
                  <li>• Online Tutorials</li>
                  <li>• Code Repositories</li>
                  <li>• Industry Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
