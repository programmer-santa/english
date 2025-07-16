import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogLayout from "@/components/blog-layout"

export default function LikesDislikesPage() {
  return (
    <BlogLayout title="What I Like and Don't Like">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Video className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">My Personal Preferences</CardTitle>
              <CardDescription>Sharing what I enjoy and what I find challenging</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              In this video, I share my personal thoughts about various aspects of life, technology, and my journey as a
              software development student. Understanding our preferences helps us make better decisions and find our
              path in life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I discuss both the things that motivate and inspire me, as well as the challenges and aspects I find
              difficult or less appealing.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="bg-gray-900 rounded-lg p-8 text-center mb-8">
            <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Video: What I Like and Don't Like</h3>
            <p className="text-gray-300 mb-4">Click the button below to watch my video about personal preferences</p>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Watch Video (Add your video link here)
            </Button>
          </div>

          {/* Content preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Things I Like */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <ThumbsUp className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-green-800">Things I Like</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Programming & Technology</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Solving complex problems with code</li>
                    <li>• Learning new programming languages</li>
                    <li>• Building useful applications</li>
                    <li>• Collaborating on team projects</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Learning & Growth</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Discovering new technologies</li>
                    <li>• Attending workshops and seminars</li>
                    <li>• Sharing knowledge with peers</li>
                    <li>• Continuous skill improvement</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Personal Interests</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Reading tech blogs and articles</li>
                    <li>• Playing strategic games</li>
                    <li>• Listening to podcasts</li>
                    <li>• Exploring new places</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Things I Don't Like */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <ThumbsDown className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-red-800">Things I Find Challenging</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Technical Challenges</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Debugging complex errors</li>
                    <li>• Working with legacy code</li>
                    <li>• Time pressure on projects</li>
                    <li>• Poorly documented systems</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Learning Obstacles</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Information overload</li>
                    <li>• Rapidly changing technologies</li>
                    <li>• Imposter syndrome moments</li>
                    <li>• Balancing theory and practice</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">General Dislikes</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Repetitive, monotonous tasks</li>
                    <li>• Poor communication in teams</li>
                    <li>• Rushing through learning</li>
                    <li>• Negative or toxic environments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Reflection</h3>
            <p className="text-blue-700 text-sm">
              Understanding our likes and dislikes helps us make better career choices and find environments where we
              can thrive. As I continue my journey in software development, I'm learning to embrace challenges while
              focusing on what truly motivates me to grow as a developer.
            </p>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
