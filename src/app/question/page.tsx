
import QuestionForm from "../components/QuestionForm"


export default function QuestionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-gradient-to-t from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          Ask a Question
        </h1>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Get instant answers to your questions with our advanced AI system, tailored to your access level
        </p>

        <QuestionForm />
      </div>
    </div>
  )
}

