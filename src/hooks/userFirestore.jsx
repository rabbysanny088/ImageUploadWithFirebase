import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/Config";

const userFirestore = () => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(db,'images' ));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createAt = doc.data().createAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({ imageUrl, createAt, userEmail });
          });
          setDocs(images);
          setIsLoading(false);
        });
        return () => unsubscribe();
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return {
    docs, isLoading,
  };
};

export default userFirestore;
