import React from "react";
// import { db } from "./firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { useState, useEffect } from "react";
// import "./Events.css"
export default function Events() {
  // const [users, setUsers] = useState([]);
  // const userCollectionRef = collection(db, "users");
  // const [name, setName] = useState("");
  // const [maximumPeople, setMaximumPeople] = useState(0);
  // const [comment, setComment] = useState("");
  // const [updateComment, setUpdateComment] = useState("");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, [userCollectionRef]);
  // const createUser = async () => {
  //   await addDoc(userCollectionRef, {
  //     name: name,
  //     maximumPeople: Number(maximumPeople),
  //     comment: comment,
  //     // comment: comment,
  //   });
  // };

  // const decreaseMaximumPeople = async (id, maximumPeople) => {
  //   const userDoc = doc(db, "users", id);
  //   const updateMaximumPeople = { maximumPeople: maximumPeople - 1 };
  //   await updateDoc(userDoc, updateMaximumPeople);
  // };

  // const increaseMaximumPeople = async (id, maximumPeople) => {
  //   const userDoc = doc(db, "users", id);
  //   const updateMaximumPeople = { maximumPeople: maximumPeople + 1 };
  //   await updateDoc(userDoc, updateMaximumPeople);
  // };

  // const changeComment = async (id) => {
  //   const userComment = doc(db, "users", id);
  //   const switchComment = { comment: updateComment };
  //   await updateDoc(userComment, switchComment);
  // };

  // const deleteUser = async (id) => {
  //   const userDelete = doc(db, "users", id);
  //   await deleteDoc(userDelete);
  // };

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}
