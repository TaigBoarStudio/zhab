# Структура проекта "Чайный Жабъ"

## 1. Файловая структура (File Structure)

Для удобства поддержки и масштабирования мы будем использовать следующую организацию:

```text
/app                # Маршруты Next.js (App Router)
  /article          # Страницы статей
  /category         # Страницы категорий
  /library          # Библиотека знаний
  layout.tsx        # Глобальный макет
  page.tsx          # Главная страница

/src
  /components       # Компоненты UI
    /layout         # Navbar, Footer, PageWrapper
    /ui             # Базовые элементы (Button, Card, Badge) - зависят от темы
    /sections       # Крупные блоки страниц (Hero, Philosophy)
    /features       # Функциональные блоки (BrewingAssistant, TeaMap)
    /shared         # Общие декоративные элементы (Ornaments, Cursor)
  /lib              # Логика, утилиты, работа с данными (DB, Markdown)
  /hooks            # Кастомные React хуки
  /types            # TypeScript интерфейсы и типы
  /styles           # CSS и конфигурация темы (theme.css)
  /data             # Статические данные (JSON) или схемы БД

/data               # Хранилище данных (JSON/SQLite)
/articles_md        # Исходные тексты статей в Markdown
```

## 2. Модели данных (Data Models)

### Article (Статья)
- `slug`: уникальный ID для URL
- `title`: заголовок
- `subtitle`: краткое описание
- `content`: текст (Markdown)
- `category`: категория (Пуэр, Улун и т.д.)
- `tags`: массив тегов
- `image`: URL обложки
- `date`: дата публикации
- `readTime`: время чтения
- `brewingStats`: (опционально) параметры заваривания

### Tea (Чай - для карты и помощника)
- `id`: уникальный ID
- `name`: название
- `type`: вид чая
- `origin`: регион произрастания
- `description`: описание вкуса и эффекта
- `brewingGuide`: { temp, time, ratio }

## 3. Система стилей (Theming)

Все компоненты в `/src/components/ui` должны использовать CSS-переменные из `src/styles/theme.css`. 
Это позволяет менять стиль всего сайта одним переключением пресета.

---
*Этот документ является живым и будет дополняться по мере развития проекта.*
