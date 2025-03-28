export default function Hero() {
    return (
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Access Controlled System</h1>
          <p className="text-xl mb-10 text-gray-400">Ask questions or upload content with ease</p>
          <div className="space-x-4">
            <a href="/question" className="btn">
              Ask a Question
            </a>
            <a href="/upload" className="btn">
              Upload Content
            </a>
          </div>
        </div>
      </div>
    )
  }
  