import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Clock, ExternalLink, Coffee, BookOpen, Code, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogLayout from "@/components/blog-layout"

export default function DailyRoutinePage() {
  const routineSchedule = [
    {
      time: "6:00 AM",
      activity: "Wake up & Morning Routine",
      description: "Start the day with personal hygiene and light stretching",
      icon: Clock,
      color: "bg-orange-50 text-orange-700",
    },
    {
      time: "6:30 AM",
      activity: "Breakfast & Coffee",
      description: "Fuel up for the day with a healthy breakfast",
      icon: Coffee,
      color: "bg-amber-50 text-amber-700",
    },
    {
      time: "7:30 AM",
      activity: "Study Session 1",
      description: "Morning programming practice and theory review",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-700",
    },
    {
      time: "10:00 AM",
      activity: "SENA Classes",
      description: "Attend software development classes at SENA",
      icon: BookOpen,
      color: "bg-green-50 text-green-700",
    },
    {
      time: "12:00 PM",
      activity: "Lunch Break",
      description: "Meal time and brief relaxation",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-700",
    },
    {
      time: "1:00 PM",
      activity: "Practical Coding",
      description: "Hands-on programming projects and assignments",
      icon: Code,
      color: "bg-purple-50 text-purple-700",
    },
    {
      time: "4:00 PM",
      activity: "Study Group/Collaboration",
      description: "Work with classmates on group projects",
      icon: BookOpen,
      color: "bg-indigo-50 text-indigo-700",
    },
    {
      time: "6:00 PM",
      activity: "Dinner & Family Time",
      description: "Evening meal and time with family",
      icon: Clock,
      color: "bg-pink-50 text-pink-700",
    },
    {
      time: "7:30 PM",
      activity: "Personal Projects",
      description: "Work on personal coding projects and portfolio",
      icon: Code,
      color: "bg-teal-50 text-teal-700",
    },
    {
      time: "9:30 PM",
      activity: "Learning & Research",
      description: "Read tech articles, watch tutorials, plan next day",
      icon: BookOpen,
      color: "bg-slate-50 text-slate-700",
    },
    {
      time: "11:00 PM",
      activity: "Wind Down & Sleep",
      description: "Relaxation time and prepare for rest",
      icon: Moon,
      color: "bg-gray-50 text-gray-700",
    },
  ]

  return (
    <BlogLayout title="My Daily Routine">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Video className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">A Day in My Life as a Student</CardTitle>
              <CardDescription>How I structure my day to balance learning and personal growth</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              As a software development student at SENA, maintaining a structured daily routine helps me stay focused,
              productive, and balanced. In this video, I share how I organize my typical day to maximize learning while
              maintaining personal well-being.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I discuss my study habits, time management strategies, and how I balance academic responsibilities with
              personal projects and social life.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-lg p-8 text-center mb-8">
            <Video className="h-16 w-16 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Video: My Daily Routine</h3>
            <p className="text-green-200 mb-4">
              Follow me through a typical day in my life as a software development student
            </p>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              <ExternalLink className="h-4 w-4 mr-2" />
              Watch Video (Add your video link here)
            </Button>
          </div>

          {/* Daily Schedule */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">My Daily Schedule</h3>
            <div className="space-y-4">
              {routineSchedule.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-800">{item.activity}</h4>
                        <span className="text-sm font-medium text-gray-500">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">My Key Principles</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Consistency Over Intensity</h4>
                  <p className="text-sm text-blue-700">
                    I focus on maintaining consistent daily habits rather than sporadic intense study sessions. Small,
                    regular progress compounds over time.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Balance is Essential</h4>
                  <p className="text-sm text-green-700">
                    While I'm passionate about programming, I make sure to include time for family, relaxation, and
                    personal interests to avoid burnout.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Active Learning</h4>
                  <p className="text-sm text-purple-700">
                    I combine theoretical study with hands-on practice. Every concept I learn, I try to implement in
                    code to reinforce understanding.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Productivity Tips</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Time Blocking</h4>
                  <p className="text-sm text-orange-700">
                    I use time blocking to dedicate specific hours to different activities. This helps me stay focused
                    and ensures I cover all important areas.
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Pomodoro Technique</h4>
                  <p className="text-sm text-pink-700">
                    For intensive study sessions, I use 25-minute focused work periods followed by 5-minute breaks to
                    maintain concentration and prevent fatigue.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Weekly Planning</h4>
                  <p className="text-sm text-teal-700">
                    Every Sunday, I plan the upcoming week, setting specific goals for each day and adjusting my routine
                    based on upcoming assignments or projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges and Adaptations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Challenges and How I Adapt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Challenge: Information Overload</h4>
                <p className="text-sm text-red-700 mb-2">
                  With so many programming languages and technologies to learn, it's easy to feel overwhelmed.
                </p>
                <p className="text-sm text-red-600 font-medium">
                  Solution: I focus on mastering fundamentals first, then gradually expand to new technologies.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Challenge: Maintaining Motivation</h4>
                <p className="text-sm text-yellow-700 mb-2">
                  Some days are harder than others, especially when dealing with complex debugging.
                </p>
                <p className="text-sm text-yellow-600 font-medium">
                  Solution: I celebrate small wins and remind myself of my long-term goals regularly.
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Challenge: Social Life Balance</h4>
                <p className="text-sm text-indigo-700 mb-2">
                  Balancing intensive study with maintaining friendships and family relationships.
                </p>
                <p className="text-sm text-indigo-600 font-medium">
                  Solution: I schedule specific times for social activities and stick to them.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Challenge: Staying Updated</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Technology evolves rapidly, making it challenging to stay current with trends.
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Solution: I dedicate time each week to reading tech news and exploring new tools.
                </p>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Reflection on My Routine</h3>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">
                This routine has evolved over time and continues to adapt based on my changing needs and circumstances.
                What works for me might not work for everyone, but the key principles of consistency, balance, and
                intentional time management are universal.
              </p>
              <p className="text-gray-700 text-sm">
                As I progress in my software development journey, I'm constantly refining this routine to become more
                efficient and effective. The goal is not perfection, but continuous improvement and sustainable growth.
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm font-medium">
                  💡 Remember: A good routine should serve you, not constrain you. Stay flexible and adjust as needed
                  while maintaining the core habits that drive your success.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
