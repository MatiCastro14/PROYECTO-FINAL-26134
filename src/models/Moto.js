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

const motoCollection = collection(db, "Motos");



export const createMoto = async (moto) => {
  const motoRef = await addDoc(motoCollection, moto);

  return {
    id: motoRef.id,
    ...moto,
  };
};

export const getallMotos = async () => {
  const snapshot = await getDocs(motoCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getMotos = async () => {
  const snapshot = await getDocs(motoCollection);
  const motos = [];

  snapshot.forEach((doc) => {
    motos.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return motos;
};

export const getMotoById = async (id) => {
  const motoRef = doc(motoCollection, id);
  const snapshot = await getDoc(motoRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const updateMoto = async (id, moto) => {
  const motoRef = doc(motoCollection, id);
  const snapshot = await getDoc(motoRef);

  if (!snapshot.exists()) {
    return null;
    // throw new Error('El producto no existe')
  }

  await updateDoc(motoRef, moto);

  return {
    id: motoRef.id,
    ...moto,
  };
};

export const deleteMoto = async (id) => {
  const motoRef = doc(motoCollection, id);
  const snapshot = await getDoc(motoRef);

  if (!snapshot.exists()) {
    return null;
  }

  const deletedMoto = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  await deleteDoc(motoRef);

  return deletedMoto;
};