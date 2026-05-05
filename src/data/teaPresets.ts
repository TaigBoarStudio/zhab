export interface TeaPreset {
  id: string;
  name: string;
  temp: string;
  time: number;
  color: string;
  ratio: string; // e.g., "5g / 150ml"
}

export const teaPresets: TeaPreset[] = [
  { 
    id: "shen-puer",
    name: "Шэн Пуэр", 
    temp: "95°C", 
    time: 15, 
    color: "var(--color-gold-500)",
    ratio: "6-8г / 150мл"
  },
  { 
    id: "shu-puer",
    name: "Шу Пуэр", 
    temp: "100°C", 
    time: 20, 
    color: "var(--color-gold-400)",
    ratio: "8-10г / 150мл"
  },
  { 
    id: "tie-guanyin",
    name: "Те Гуань Инь", 
    temp: "85°C", 
    time: 10, 
    color: "var(--color-gold-300)",
    ratio: "7г / 150мл"
  },
  { 
    id: "longjing",
    name: "Лунцзин", 
    temp: "80°C", 
    time: 15, 
    color: "var(--color-gold-500)",
    ratio: "4-5г / 200мл"
  },
  { 
    id: "da-hong-pao",
    name: "Да Хун Пао", 
    temp: "95°C", 
    time: 20, 
    color: "var(--color-gold-400)",
    ratio: "7-8г / 150мл"
  },
  { 
    id: "bai-hao-yinzhen",
    name: "Бай Хао Инь Чжэнь", 
    temp: "85°C", 
    time: 25, 
    color: "var(--color-gold-300)",
    ratio: "5г / 150мл"
  }
];
