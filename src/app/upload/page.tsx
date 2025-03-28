import UploadForm from "../components/UploadForm"

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Upload Content</h1>
      <UploadForm />
    </div>
  )
}