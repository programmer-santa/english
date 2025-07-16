import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload } from "lucide-react"
import BlogLayout from "@/components/blog-layout"

export default function MarkZuckerbergPage() {
  return (
    <BlogLayout title="Mark Zuckerberg Infographic">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">Mark Zuckerberg: Tech Visionary</CardTitle>
              <CardDescription>Visual information about the Facebook founder and Meta CEO</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Mark Zuckerberg is one of the most influential figures in modern technology and social media. As the
              founder and CEO of Meta (formerly Facebook), he has revolutionized how people connect and communicate
              globally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This infographic provides key information about his life, achievements, and impact on the technology
              industry, serving as inspiration for aspiring software developers like myself.
            </p>
          </div>

          {/* Placeholder for the infographic */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50 mb-8">
            <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Mark Zuckerberg Infographic</h3>
            <p className="text-gray-500">Please upload your Mark Zuckerberg infographic JPG image here</p>
            <p className="text-sm text-gray-400 mt-2">
              The infographic will display key facts and achievements about Mark Zuckerberg
            </p>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Early Life & Education</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Born May 14, 1984</li>
                <li>• Started programming at age 12</li>
                <li>• Attended Harvard University</li>
                <li>• Created Facebook in his dorm room</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Major Achievements</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Founded Facebook (2004)</li>
                <li>• Youngest billionaire at 23</li>
                <li>• Built global social network</li>
                <li>• Transformed to Meta (2021)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Impact & Vision</h3>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• Connected 3+ billion people</li>
                <li>• Pioneered social media</li>
                <li>• Investing in VR/AR (Metaverse)</li>
                <li>• Philanthropic initiatives</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Lessons for Aspiring Developers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Innovation & Risk-Taking</h4>
                <p className="text-sm text-gray-600">
                  Zuckerberg's journey shows the importance of taking calculated risks and pursuing innovative ideas,
                  even when they seem impossible.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600">
                  His evolution from a college student to a tech CEO demonstrates the importance of continuous learning
                  and adaptation in technology.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">User-Focused Development</h4>
                <p className="text-sm text-gray-600">
                  Facebook's success came from focusing on user needs and creating solutions that genuinely improve
                  people's lives.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Long-term Vision</h4>
                <p className="text-sm text-gray-600">
                  His pivot to the metaverse shows the importance of having a long-term vision and being willing to
                  evolve with technology.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
