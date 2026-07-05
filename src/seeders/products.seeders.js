import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const motosCollection = collection(db, "Motos");

 const motosSeeders = [
  {
    modelo: "CBR 600RR",
    marca: "Honda",
    precio: 12500,
    descripcion: "Moto deportiva elegante y potente, ideal para ciudad y carretera.",
  },
  {
    modelo: "Ninja 400",
    marca: "Kawasaki",
    precio: 11800,
    descripcion: "Motocicleta deportiva ligera, perfecta para quienes buscan rendimiento y comodidad.",
  },
  {
    modelo: "MT-03",
    marca: "Yamaha",
    precio: 10900,
    descripcion: "Moto naked con diseño moderno y excelente manejo en todo tipo de rutas.",
  },
  {
    modelo: "GSX-R750",
    marca: "Suzuki",
    precio: 13200,
    descripcion: "Modelo de alto desempeño con tecnología avanzada y estilo agresivo.",
  },
  {
    modelo: "R3",
    marca: "Yamaha",
    precio: 9800,
    descripcion: "Motocicleta versátil, confiable y cómoda para principiantes y expertos.",
  },
];

const createMoto = async () => {
  for (const moto of motosSeeders) {
    await addDoc(motosCollection, moto);
    console.log(`Moto agregada: ${moto.modelo}`);
  }
};

createMoto().catch((error) => {
  console.error("Error al insertar las motos:", error);
  process.exit(1);
});

