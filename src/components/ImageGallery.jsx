import userFirestore from "../hooks/userFirestore";

const ImageGallery = () => {
  const { docs:images, isLoading } = userFirestore();
  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-3 justify-center gap-10 mt-10">
      {images.map((image) => (
        <div className="card w-full bg-base-100 shadow-xl" key={image.imageUrl}>
          <figure className="max-h-[15rem]">
            <img src={image.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Upload by:{image.userEmail}</p>
            <span>Create on: {image.createAt.toLocaleDateString()} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
