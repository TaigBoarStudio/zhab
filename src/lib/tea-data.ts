export interface Tea {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  price?: number;
  isAvailable: boolean;
}

export interface Region {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  teas: Tea[];
}

export const regionsData: Record<string, Region> = {
  cnyn: {
    id: "CNYN",
    name: "Юньнань",
    title: "Родина Пуэра",
    description: "Здесь растут древние чайные деревья, возраст которых достигает тысячи лет. Центр производства Шэн и Шу пуэров.",
    color: "#A67C37",
    teas: [
      {
        id: "puer-1",
        name: "Шэн Пуэр 'Старый Лес'",
        type: "Шэн Пуэр",
        description: "Классический вкус с нотками сухофруктов и легкой горчинкой.",
        image: "https://picsum.photos/seed/puer1/400/300",
        isAvailable: false
      },
      {
        id: "puer-2",
        name: "Шу Пуэр 'Золотая Почка'",
        type: "Шу Пуэр",
        description: "Густой, бархатистый вкус с древесными и шоколадными оттенками.",
        image: "https://picsum.photos/seed/puer2/400/300",
        isAvailable: false
      }
    ]
  },
  cnfj: {
    id: "CNFJ",
    name: "Фуцзянь",
    title: "Колыбель Улунов",
    description: "Регион, подаривший миру Те Гуань Инь и Да Хун Пао. Горы Уишань — место силы для любителей утесного чая.",
    color: "#2d4a3e",
    teas: [
      {
        id: "da-hong-pao",
        name: "Да Хун Пао (Большой Красный Халат)",
        type: "Улун",
        description: "Легендарный утесный чай с глубоким прожаренным вкусом.",
        image: "https://picsum.photos/seed/dhp/400/300",
        isAvailable: false
      },
      {
        id: "tie-guan-yin",
        name: "Те Гуань Инь",
        type: "Улун",
        description: "Светлый улун с ярким цветочным ароматом сирени.",
        image: "https://picsum.photos/seed/tgy/400/300",
        isAvailable: false
      }
    ]
  },
  cnzj: {
    id: "CNZJ",
    name: "Чжэцзян",
    title: "Обитель Лунцзина",
    description: "Знаменитое озеро Сиху и лучший зеленый чай Китая. Здесь ценят свежесть и весеннюю легкость.",
    color: "#4a7c44",
    teas: [
      {
        id: "longjing",
        name: "Сиху Лунцзин",
        type: "Зеленый",
        description: "Король зеленых чаев с плоским листом и ореховым послевкусием.",
        image: "https://picsum.photos/seed/longjing/400/300",
        isAvailable: false
      }
    ]
  },
  cnah: {
    id: "CNAH",
    name: "Аньхой",
    title: "Горы Хуаншань",
    description: "Родина знаменитых сортов Маофэн и Цихун. Туманные горы создают идеальные условия для тонкого аромата.",
    color: "#5c6b4a",
    teas: [
      {
        id: "maofeng",
        name: "Хуаншань Маофэн",
        type: "Зеленый",
        description: "Нежный чай с ворсистыми почками и сладковатым вкусом.",
        image: "https://picsum.photos/seed/maofeng/400/300",
        isAvailable: false
      }
    ]
  },
  cnsc: {
    id: "CNSC",
    name: "Сычуань",
    title: "Древний Чайный Путь",
    description: "Один из старейших регионов. Здесь зародилась культура чаепития и начался Великий чайный путь.",
    color: "#3e5c4a",
    teas: [
      {
        id: "mengding",
        name: "Мэндин Ганьлу",
        type: "Зеленый",
        description: "Один из древнейших сортов, 'Сладкая роса с горы Мэндин'.",
        image: "https://picsum.photos/seed/mengding/400/300",
        isAvailable: false
      }
    ]
  },
  cngd: {
    id: "CNGD",
    name: "Гуандун",
    title: "Мир Дань Цунов",
    description: "Родина Гуандунских улунов (Фэн Хуан Дань Цун). Регион с богатой чайной культурой и знаменитыми 'Одинокими кустами'.",
    color: "#8b4513",
    teas: [
      {
        id: "dan-cun",
        name: "Фэн Хуан Дань Цун",
        type: "Улун",
        description: "Чай с невероятным естественным ароматом цветов и фруктов.",
        image: "https://picsum.photos/seed/dancun/400/300",
        isAvailable: false
      }
    ]
  },
  cnjs: {
    id: "CNJS",
    name: "Цзянсу",
    title: "Изумрудные спирали",
    description: "Здесь производят знаменитый Би Ло Чунь. Чай славится своим нежным цветочным ароматом и весенней свежестью.",
    color: "#2e8b57",
    teas: [
      {
        id: "bilochun",
        name: "Би Ло Чунь",
        type: "Зеленый",
        description: "Крошечные спиралевидные почки с интенсивным ароматом.",
        image: "https://picsum.photos/seed/bilochun/400/300",
        isAvailable: false
      }
    ]
  },
  cnhn: {
    id: "CNHN",
    name: "Хунань",
    title: "Край Желтого Чая",
    description: "Крупный центр производства желтого чая и черного чая (Хэй Ча). Регион с древними традициями и туманными озерами.",
    color: "#daa520",
    teas: [
      {
        id: "junshan",
        name: "Цзюньшань Иньчжэнь",
        type: "Желтый",
        description: "Редкий желтый чай с острова Цзюньшань.",
        image: "https://picsum.photos/seed/junshan/400/300",
        isAvailable: false
      }
    ]
  },
  cngx: {
    id: "CNGX",
    name: "Гуанси",
    title: "Жасминовый Сад",
    description: "Знаменит своим жасминовым чаем и уникальным черным чаем Лю Бао, который является предшественником Шу Пуэра.",
    color: "#4682b4",
    teas: [
      {
        id: "liubao",
        name: "Лю Бао",
        type: "Черный (Хэй Ча)",
        description: "Выдержанный чай с землистыми и ореховыми нотками.",
        image: "https://picsum.photos/seed/liubao/400/300",
        isAvailable: false
      }
    ]
  },
  cnhb: {
    id: "CNHB",
    name: "Хубэй",
    title: "Сердце Китая",
    description: "Один из старейших чайных регионов. Известен своими зелеными чаями и производством прессованного кирпичного чая.",
    color: "#556b2f",
    teas: [
      {
        id: "hubei-green",
        name: "Эньши Юйлу",
        type: "Зеленый",
        description: "Уникальный пропаренный зеленый чай.",
        image: "https://picsum.photos/seed/hubei/400/300",
        isAvailable: false
      }
    ]
  },
  cngz: {
    id: "CNGZ",
    name: "Гуйчжоу",
    title: "Высокогорная Чистота",
    description: "Высокогорный регион с чистой экологией. Здесь производят отличные зеленые и красные чаи, такие как Дуюнь Маоцзянь.",
    color: "#6b8e23",
    teas: [
      {
        id: "duyun",
        name: "Дуюнь Маоцзянь",
        type: "Зеленый",
        description: "Чай с высокогорных плантаций с чистым вкусом.",
        image: "https://picsum.photos/seed/duyun/400/300",
        isAvailable: false
      }
    ]
  },
  cnjx: {
    id: "CNJX",
    name: "Цзянси",
    title: "Облака и Туман",
    description: "Родина чая Лушань Юнь У. Регион славится своими живописными горами, чистой водой и древними монастырями.",
    color: "#20b2aa",
    teas: [
      {
        id: "lushan",
        name: "Лушань Юнь У",
        type: "Зеленый",
        description: "Чай 'Облаков и Тумана' с горы Лушань.",
        image: "https://picsum.photos/seed/lushan/400/300",
        isAvailable: false
      }
    ]
  },
  cntw: {
    id: "CNTW",
    name: "Тайвань",
    title: "Остров Улунов",
    description: "Остров сокровищ для любителей улунов. Знаменитые высокогорные улуны (Гао Шань Ча) и легендарный Дун Дин.",
    color: "#ff7f50",
    teas: [
      {
        id: "dong-ding",
        name: "Дун Дин Улун",
        type: "Улун",
        description: "Классический тайваньский улун средней прожарки.",
        image: "https://picsum.photos/seed/dongding/400/300",
        isAvailable: false
      }
    ]
  },
  cnhi: {
    id: "CNHI",
    name: "Хайнань",
    title: "Тропический Чай",
    description: "Тропический остров, где производят уникальные красные чаи и Кудин. Самый южный чайный регион Поднебесной.",
    color: "#ff4500",
    teas: [
      {
        id: "kudin",
        name: "Хайнаньский Кудин",
        type: "Травяной",
        description: "Горький чай с мощными оздоровительными свойствами.",
        image: "https://picsum.photos/seed/kudin/400/300",
        isAvailable: false
      }
    ]
  },
  cnha: {
    id: "CNHA",
    name: "Хэнань",
    title: "Северный Предел",
    description: "Самый северный из основных регионов. Родина знаменитого зеленого чая Синьян Маоцзянь с ярким вкусом.",
    color: "#bc8f8f",
    teas: [
      {
        id: "xinyang",
        name: "Синьян Маоцзянь",
        type: "Зеленый",
        description: "Чай с сильным ароматом и долгим послевкусием.",
        image: "https://picsum.photos/seed/xinyang/400/300",
        isAvailable: false
      }
    ]
  }
};
