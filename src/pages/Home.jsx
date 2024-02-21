import ImageGallery from "../components/ImageGallery"
import Navbar from "../components/Navbar"
import UploadFrom from "../components/UploadFrom"

const Home = () => {
  


  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadFrom />
      <ImageGallery />
    </div>
  )
}

export default Home
