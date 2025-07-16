"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, RotateCcw, Play, Check, X, Trophy } from "lucide-react"
import BlogLayout from "@/components/blog-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ADSOGlossaryPage() {
  const glossaryTerms = [
    {
      letter: "A",
      term: "Algorithm",
      definition: "A set of steps used to solve a problem or perform a task in programming.",
    },
    {
      letter: "B",
      term: "Backend",
      definition: "The part of a software system that handles logic, database, and server-side processing.",
    },
    {
      letter: "C",
      term: "Class",
      definition:
        "A template used in object-oriented programming to create objects with specific attributes and methods.",
    },
    {
      letter: "D",
      term: "Database",
      definition: "An organized collection of data that can be accessed and managed electronically.",
    },
    {
      letter: "E",
      term: "Entity",
      definition: "A real-world object or concept that has data stored in a database.",
    },
    {
      letter: "F",
      term: "Framework",
      definition: "A collection of tools and libraries used to simplify and speed up software development.",
    },
    {
      letter: "G",
      term: "Git",
      definition: "A version control system used to track changes in source code.",
    },
    {
      letter: "H",
      term: "HTML",
      definition: "The standard language used to create and structure content on the web.",
    },
    {
      letter: "I",
      term: "Interface",
      definition: "A point where two systems or software components interact or communicate.",
    },
    {
      letter: "J",
      term: "JavaScript",
      definition: "A programming language used to create dynamic and interactive web pages.",
    },
    {
      letter: "K",
      term: "Keyword",
      definition: "A reserved word in a programming language with a special meaning.",
    },
    {
      letter: "L",
      term: "Loop",
      definition: "A programming structure used to repeat a set of instructions until a condition is met.",
    },
    {
      letter: "M",
      term: "Model",
      definition: "A representation of data or business logic, often used in MVC architecture.",
    },
    {
      letter: "N",
      term: "Node.js",
      definition: "A runtime environment that allows JavaScript to run on the server side.",
    },
    {
      letter: "O",
      term: "Object",
      definition: "An instance of a class that contains data and methods to manipulate that data.",
    },
    {
      letter: "P",
      term: "Python",
      definition: "A high-level programming language known for its simplicity and readability.",
    },
    {
      letter: "Q",
      term: "Query",
      definition: "A request for data or information from a database using a specific syntax.",
    },
    {
      letter: "R",
      term: "Repository",
      definition: "A storage location for software packages or source code, often managed by version control.",
    },
    {
      letter: "S",
      term: "SQL",
      definition: "Structured Query Language used to communicate with and manipulate databases.",
    },
    {
      letter: "T",
      term: "Testing",
      definition: "The process of evaluating software to ensure it works correctly and meets requirements.",
    },
    {
      letter: "U",
      term: "UI/UX",
      definition: "User Interface and User Experience design focused on creating intuitive software interactions.",
    },
    {
      letter: "V",
      term: "Variable",
      definition: "A storage location with an associated name that contains data which can be modified.",
    },
    {
      letter: "W",
      term: "Web API",
      definition:
        "Application Programming Interface that allows different software applications to communicate over the web.",
    },
    {
      letter: "X",
      term: "XML",
      definition: "Extensible Markup Language used to store and transport data in a structured format.",
    },
    {
      letter: "Y",
      term: "YAML",
      definition: "A human-readable data serialization standard often used for configuration files.",
    },
    {
      letter: "Z",
      term: "Zero-based indexing",
      definition: "A numbering system where the first element of a sequence is assigned index 0.",
    },
  ]

  function SpellingWheelGame({ terms }: { terms: typeof glossaryTerms }) {
    const [isSpinning, setIsSpinning] = useState(false)
    const [currentTerm, setCurrentTerm] = useState<(typeof glossaryTerms)[0] | null>(null)
    const [userSpelling, setUserSpelling] = useState("")
    const [score, setScore] = useState({ correct: 0, incorrect: 0 })
    const [gameStarted, setGameStarted] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [rotation, setRotation] = useState(0)

    const spinWheel = () => {
      if (isSpinning) return

      setIsSpinning(true)
      setShowResult(false)
      setUserSpelling("")

      // Random rotation between 1080 and 2160 degrees (3-6 full rotations)
      const newRotation = rotation + 1080 + Math.random() * 1080
      setRotation(newRotation)

      // Select random term after spin animation
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * terms.length)
        setCurrentTerm(terms[randomIndex])
        setIsSpinning(false)
        setGameStarted(true)
      }, 2000)
    }

    const markCorrect = () => {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }))
      setShowResult(true)
      setTimeout(() => {
        setShowResult(false)
        setCurrentTerm(null)
        setGameStarted(false)
        setUserSpelling("")
      }, 2000)
    }

    const markIncorrect = () => {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }))
      setShowResult(true)
      setTimeout(() => {
        setShowResult(false)
        setCurrentTerm(null)
        setGameStarted(false)
        setUserSpelling("")
      }, 2000)
    }

    const resetGame = () => {
      setScore({ correct: 0, incorrect: 0 })
      setCurrentTerm(null)
      setGameStarted(false)
      setUserSpelling("")
      setShowResult(false)
      setRotation(0)
    }

    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200 mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">🎯 Spelling Wheel Game</h3>
          <p className="text-gray-600">Spin the wheel and spell the programming term correctly!</p>
        </div>

        {/* Score Display */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-800">Correct: {score.correct}</span>
            </div>
          </div>
          <div className="bg-red-100 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-red-800">Incorrect: {score.incorrect}</span>
            </div>
          </div>
          <div className="bg-yellow-100 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">Total: {score.correct + score.incorrect}</span>
            </div>
          </div>
        </div>

        {/* Spinning Wheel */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className={`w-48 h-48 rounded-full border-8 border-blue-500 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center transition-transform duration-2000 ease-out ${isSpinning ? "animate-pulse" : ""}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="text-white text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-2" />
                <div className="font-bold text-lg">ADSO</div>
                <div className="text-sm">Glossary</div>
              </div>
            </div>
            {/* Wheel pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
            </div>
          </div>
        </div>

        {/* Game Controls */}
        <div className="text-center space-y-4">
          {!gameStarted && !isSpinning && (
            <Button
              onClick={spinWheel}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              disabled={isSpinning}
            >
              <Play className="h-5 w-5 mr-2" />
              {isSpinning ? "Spinning..." : "Spin the Wheel!"}
            </Button>
          )}

          {currentTerm && gameStarted && !showResult && (
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 max-w-md mx-auto">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Spell this term:</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{currentTerm.term}</div>
                <p className="text-gray-600 text-sm italic">"{currentTerm.definition}"</p>
              </div>

              <div className="max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Type your spelling here..."
                  value={userSpelling}
                  onChange={(e) => setUserSpelling(e.target.value)}
                  className="text-center text-lg py-3 mb-4"
                  autoFocus
                />

                <div className="flex gap-4 justify-center">
                  <Button onClick={markCorrect} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    <Check className="h-5 w-5 mr-2" />
                    Correct
                  </Button>
                  <Button onClick={markIncorrect} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
                    <X className="h-5 w-5 mr-2" />
                    Incorrect
                  </Button>
                </div>
              </div>
            </div>
          )}

          {showResult && (
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">{score.correct > score.incorrect ? "🎉" : "📚"}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">The correct spelling is:</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">{currentTerm?.term}</div>
                <div className="text-sm text-gray-600">Your spelling: "{userSpelling}"</div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={resetGame} variant="outline" className="px-4 py-2 bg-transparent">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Game
            </Button>
          </div>
        </div>

        {/* Game Instructions */}
        <div className="mt-8 bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">How to Play:</h4>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            <li>Click "Spin the Wheel!" to get a random programming term</li>
            <li>Read the definition and try to spell the term correctly</li>
            <li>Type your spelling in the input field</li>
            <li>Click "Correct" if you spelled it right, or "Incorrect" if you made a mistake</li>
            <li>Keep track of your score and try to improve!</li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <BlogLayout title="ADSO Glossary">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <CardTitle className="text-2xl">ADSO Programming Glossary</CardTitle>
              <CardDescription>Essential programming terms for software development students</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              This glossary contains essential programming terms that every ADSO (Análisis y Desarrollo de Software)
              student should know. These definitions will help you understand key concepts in software development and
              programming.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Each term is carefully selected to provide a solid foundation for understanding modern software
              development practices and technologies.
            </p>
          </div>

          {/* Add the Spelling Wheel Game */}
          <SpellingWheelGame terms={glossaryTerms} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold rounded-full text-sm mr-3 flex-shrink-0">
                    {item.letter}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.term}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.definition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">About This Glossary</h3>
            <p className="text-blue-700 text-sm">
              This glossary is designed to support ADSO students in their journey to become proficient software
              developers. Understanding these fundamental terms will help you communicate effectively with other
              developers and comprehend technical documentation more easily.
            </p>
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  )
}
