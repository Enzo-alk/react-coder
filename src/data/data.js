const products = [
    // Categoría: Bolsas
    {
      id: "BLG101",
      name: "Bolsa Kraft Mediana",
      description: "Bolsa de papel kraft reciclado, ideal para boutiques y regalos pequeños.",
      price: 120,
      stock: 50,
      image: "/img/bolsa-kraft.jpg",
      category: "bolsas"
    },
    {
      id: "BLG102",
      name: "Bolsa Plástica Transparente",
      description: "Bolsa de polietileno transparente de alta resistencia, multiuso.",
      price: 80,
      stock: 100,
      image: "/img/bolsa-plastica.jpg",
      category: "bolsas"
    },
    {
      id: "BLG103",
      name: "Bolsa Tela Ecológica",
      description: "Bolsa reutilizable de tela ecológica, disponible en varios colores.",
      price: 250,
      stock: 30,
      image: "/img/bolsa-tela.jpg",
      category: "bolsas"
    },
    {
      id: "BLG104",
      name: "Bolsa Papel Premium",
      description: "Bolsa de papel premium con acabado mate, ideal para eventos.",
      price: 200,
      stock: 40,
      image: "/img/bolsa-premium.jpg",
      category: "bolsas"
    },
    
    // Categoría: Cajas
    {
      id: "CX201",
      name: "Caja de Cartón Pequeña",
      description: "Caja de cartón pequeña para envíos de productos delicados.",
      price: 300,
      stock: 25,
      image: "/img/caja-pequena.jpg",
      category: "cajas"
    },
    {
      id: "CX202",
      name: "Caja Regalo con Tapa",
      description: "Caja para regalo con tapa rígida, disponible en varios colores.",
      price: 450,
      stock: 15,
      image: "/img/caja-regalo.jpg",
      category: "cajas"
    },
    {
      id: "CX203",
      name: "Caja Pizza Mediana",
      description: "Caja resistente para pizzas medianas, con ventilación.",
      price: 50,
      stock: 300,
      image: "/img/caja-pizza.jpg",
      category: "cajas"
    },
    {
      id: "CX204",
      name: "Caja de Envío Corrugado",
      description: "Caja de envío fabricada en cartón corrugado resistente.",
      price: 600,
      stock: 50,
      image: "/img/caja-corrugado.jpg",
      category: "cajas"
    },
  
    // Categoría: Envoltorios
    {
      id: "ENV301",
      name: "Envoltorio Papel Seda",
      description: "Envoltorio de papel seda para proteger productos delicados.",
      price: 30,
      stock: 200,
      image: "/img/papel-seda.jpg",
      category: "envoltorios"
    },
    {
      id: "ENV302",
      name: "Envoltorio Celofán Transparente",
      description: "Celofán transparente ideal para envolver regalos y alimentos.",
      price: 45,
      stock: 150,
      image: "/img/celofan.jpg",
      category: "envoltorios"
    },
    {
      id: "ENV303",
      name: "Papel Manteca para Repostería",
      description: "Papel manteca resistente a la grasa para uso alimenticio.",
      price: 20,
      stock: 100,
      image: "/img/papel-manteca.jpg",
      category: "envoltorios"
    },
    {
      id: "ENV304",
      name: "Envoltorio Kraft Personalizado",
      description: "Papel kraft personalizable con logo para empaques premium.",
      price: 60,
      stock: 70,
      image: "/img/kraft-personalizado.jpg",
      category: "envoltorios"
    }
  ];
  
  // Simular API con Promesas
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      // Simulamos un retraso de red de 2 segundos
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  
  export { getProducts };
  