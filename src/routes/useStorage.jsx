import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase/Config";
import useAuth from "../hooks/useAuth";
const useStorage = () => {
  const [progresses, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const startUpload = (file) => {
    if (!file) {
      return;
    }
    const fileId = uuid();
    const formatFile = file.type.split("/")[1];
    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "images"), {
            imageUrl: downloadURL,
            createAt: new Date(),
            userEmail: user?.email,
        });
        setProgress(progresses);
      }
    );
  };

  return {
    progresses,
    error,
    startUpload,
  };
};

export default useStorage;
