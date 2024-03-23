import { db } from "../../services/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const GetUserDetails = ({ userEmail, setUserInfo }) => {
  
  const usersRef = collection(db, 'users');
  const querySnapshot = onSnapshot(query(usersRef, where('email', '==', userEmail)), (snapshot) => {
      if (snapshot.empty) {
          setUserInfo({});
        } else {
          snapshot.forEach((doc) => {
            const userData = doc.data();
            setUserInfo(userData);
          });
        }
  });

  return () => {
    // Remova o listener quando o componente for desmontado
    querySnapshot();
  };
}

export default GetUserDetails;