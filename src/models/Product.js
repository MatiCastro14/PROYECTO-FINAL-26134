import db from "../../firebase.js";
import {
    addDoc,
    collection,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore"; 

const productsCollection = collection(db, "products");

export const getProducts = async (req, res) => {
    const snapshot = await getDocs(productsCollection);
const products = [];

snapshot.forEach((doc) => {
    products.push({ 
        id: doc.id, ...doc.data()
     });
});

return products;
}

const productsCollection = collection