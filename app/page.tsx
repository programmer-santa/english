import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Video, FileText, Brain, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const blogEntries = [
    {
      id: 1,
      title: "Personal Learning Environment (PLE)",
      description: "Mind map about my personal learning environment",
      icon: Brain,
      href: "/blog/ple-mind-map",
      type: "Mind Map",
    },
    {
      id: 2,
      title: "ADSO Glossary",
      description: "Programming terms glossary for software development",
      icon: BookOpen,
      href: "/blog/adso-glossary",
      type: "Glossary",
    },
    {
      id: 3,
      title: "Mark Zuckerberg Infographic",
      description: "Visual information about Mark Zuckerberg",
      icon: FileText,
      href: "/blog/mark-zuckerberg",
      type: "Infographic",
    },
    {
      id: 4,
      title: "What I Like and Don't Like",
      description: "Personal preferences and opinions",
      icon: Video,
      href: "/blog/likes-dislikes",
      type: "Video",
    },
    {
      id: 5,
      title: "My Ideal Project",
      description: "Discussion about my dream software project",
      icon: Video,
      href: "/blog/ideal-project",
      type: "Video",
    },
    {
      id: 6,
      title: "Technology Debate",
      description: "Comparing different programming technologies",
      icon: MessageSquare,
      href: "/blog/tech-debate",
      type: "Video",
    },
    {
      id: 7,
      title: "My Daily Routine",
      description: "A look into my everyday life as a student",
      icon: Video,
      href: "/blog/daily-routine",
      type: "Video",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Jhon Santamaria</h1>
          </div>
          <p className="text-xl text-gray-600">Software Development Student at SENA</p>
        </header>

        {/* About Me Section */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">About Me</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi! My name is <strong>Jhon Santamaria</strong> and I'm currently a Software Development student at SENA.
              I'm in an exciting stage of learning, exploring different areas of the programming world — from frontend
              development to databases and backend.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since I began my studies, I've discovered how much I enjoy solving problems, creating useful solutions,
              and working in a team. I'm constantly striving to improve, not only to strengthen my technical skills but
              also to share knowledge with other students like me.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This blog is my personal space to share experiences, projects, resources, and lessons I've learned along
              my journey as a developer. My goal is to provide helpful, clear, and motivating content for both beginners
              and anyone curious about programming.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              Thanks for visiting my blog, and welcome to this journey of growth and learning in the world of software!
            </p>
          </CardContent>
        </Card>

        {/* Blog Entries */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Blog Entries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogEntries.map((entry) => {
              const IconComponent = entry.icon
              return (
                <Card key={entry.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-6 w-6 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {entry.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                    <CardDescription>{entry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={entry.href}>
                      <Button className="w-full">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">© 2024 Jhon Santamaria - Software Development Student at SENA</p>
        </footer>
      </div>
    </div>
  )
}
