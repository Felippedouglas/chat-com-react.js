import React, { useEffect, useState } from "react";
import Sidebar from "./screens/sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import firebase from "firebase/compat/app";
import Login from "./screens/login";
import Load from "./components/load";
import Chat from "./screens/chat";

const App = () => {
  const [ user, loading ] = useAuthState(auth);
  const [ userChat, setUserChat ] = useState(null);
  const [ newChat, setNewChat ] = useState(false);

  useEffect(() => {
    if (user && user.uid) {
      lastLogin();
    }
  }, [user]);

  // atualizar o status 'online'

  function setLastLogin() {
    const onlineAtTimestamp = firebase.firestore.Timestamp.now().toDate();
    onlineAtTimestamp.setMinutes(onlineAtTimestamp.getMinutes() + 1);

    db.collection("users").doc(user.uid).set({
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
      onlineAt: onlineAtTimestamp
    });
  }
  
  function lastLogin() {
    setLastLogin();
    setInterval(setLastLogin, 1 * 60 * 1000);
  }

  if (loading) return <Load showIcon={true} />;
  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} newChat={newChat} setNewChat={setNewChat}/>
      <Chat userChat={userChat} setUserChat={setUserChat} newChat={newChat} setNewChat={setNewChat} />
    </C.Container>
  );
};

export default App;
