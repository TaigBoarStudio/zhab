export interface Product {
  id: string;
  name: string;
  category: "tea" | "equipment" | "accessory";
  subCategory?: string;
  price: number;
  image: string;
  description: string;
  origin?: string;
  year?: number;
}

export const catalogData: Product[] = [
  {
    id: "da-hong-pao-classic",
    name: "Да Хун Пао «Классический»",
    category: "tea",
    subCategory: "Улун",
    price: 1200,
    image: "https://picsum.photos/seed/tea1/600/800",
    description: "Насыщенный темный улун с нотами костра и сухофруктов.",
    origin: "Уишань",
    year: 2023
  },
  {
    id: "tie-guanyin-premium",
    name: "Те Гуань Инь «Высший Сорт»",
    category: "tea",
    subCategory: "Улун",
    price: 950,
    image: "https://picsum.photos/seed/tea2/600/800",
    description: "Свежий цветочный аромат с длительным сливочным послевкусием.",
    origin: "Аньси",
    year: 2024
  },
  {
    id: "gaiwan-white-porcelain",
    name: "Гайвань «Белый Фарфор»",
    category: "equipment",
    price: 1500,
    image: "https://picsum.photos/seed/equipment1/600/800",
    description: "Классическая гайвань для дегустации любых видов чая."
  },
  {
    id: "shu-puer-menghai",
    name: "Шу Пуэр «Мэнхай Старый Лист»",
    category: "tea",
    subCategory: "Пуэр",
    price: 2200,
    image: "https://picsum.photos/seed/tea3/600/800",
    description: "Густой, маслянистый настой с древесно-ореховым профилем.",
    origin: "Юньнань",
    year: 2018
  },
  {
    id: "yixing-teapot-classic",
    name: "Чайник из исинской глины",
    category: "equipment",
    price: 5500,
    image: "https://picsum.photos/seed/equipment2/600/800",
    description: "Настоящая исинская глина сорта Цзы Ни."
  },
  {
    id: "longjing-dragon-well",
    name: "Лунцзин «Колодец Дракона»",
    category: "tea",
    subCategory: "Зеленый чай",
    price: 1800,
    image: "https://picsum.photos/seed/tea4/600/800",
    description: "Знаменитый зеленый чай с семечковым ароматом и плоским листом.",
    origin: "Ханчжоу",
    year: 2024
  }
];
