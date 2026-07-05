import db from "../config/firebase.js";
import {
    addDoc,
    collection,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore"; 

const motoCollection = collection(db, "motos");


const getallMotos = async (req, res) => {
    const snapshot = await getDocs(motoCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
  

export const getMotos = async (req, res) => {
    const snapshot = await getDocs(motoCollection);
const motos = [];

snapshot.forEach((doc) => {
    motos.push({ 
        id: doc.id, ...doc.data()
     });
});




return motos;
}
