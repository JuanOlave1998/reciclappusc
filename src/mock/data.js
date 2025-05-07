const materials = [
  { id: 1, name: "Botella plástica", points: 10, color: "bg-blue-100" },
  { id: 2, name: "Lata aluminio", points: 15, color: "bg-gray-100" },
  { id: 3, name: "Vidrio", points: 20, color: "bg-green-100" },
  { id: 4, name: "Papel", points: 5, color: "bg-yellow-100" }
];

const recyclingPoints = [
  { id: 1, name: "Contenedor Principal", location: "Edificio A", type: "Todos" },
  { id: 2, name: "Punto Vidrio", location: "Comedor", type: "Vidrio" }
];

export { materials, recyclingPoints };