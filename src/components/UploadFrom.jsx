import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStorage from "../routes/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { startUpload, progresses } = useStorage();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        await startUpload(selectedFile);
        setSelectedFile(null);
        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="text-center mt-10">
      <ToastContainer />
      <form
        className="flex items-center flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className={`btn btn-success gap-3 ${
            progresses && "loading-spinner text-primary"
          }`}
          disabled={!selectedFile}
        >
          {progresses ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
