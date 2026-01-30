# Interson - Digital Studio Website

Профессиональный веб-сайт для IT-студии Interson, созданный на React + Vite с чистым CSS.

## 🚀 Технологии

- **React 18** - UI библиотека
- **Vite** - Сборщик и dev-сервер
- **React Router** - Маршрутизация
- **Pure CSS** - Стилизация (без UI-библиотек и Tailwind)
- **ESLint + Prettier** - Линтинг и форматирование

## 📦 Установка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшна
npm run build

# Предпросмотр продакшн-сборки
npm run preview

# Линтинг
npm run lint

# Форматирование кода
npm run format
```

## 📁 Структура проекта

```
src/
  main.jsx                 # Точка входа
  App.jsx                  # Главный компонент с роутингом

  pages/                   # Страницы приложения
    Home/                  # Главная страница
      Home.jsx
      Home.css
      sections/            # Секции страницы
        Hero/
        ServicesPreview/
        ReviewsPreview/
    
    About/                 # О нас
    Services/              # Услуги
    Subscription/          # Подписка
    Reviews/               # Отзывы
    Contact/               # Контакты
    Login/                 # Вход (заготовка)

  shared/                  # Общие компоненты
    layout/                # Компоненты layout
      Header/
      Footer/
      Layout.jsx
    
    ui/                    # UI-компоненты
      Button/
      Input/
      Card/

  assets/                  # Статические файлы
    images/
    icons/

  styles/                  # Глобальные стили
    global.css             # Базовые стили
    variables.css          # CSS-переменные
```

## 🎨 Дизайн-система

### Цвета

```css
--color-black: #0d0d0d        /* Основной фон */
--color-dark: #262626         /* Темный фон карточек */
--color-white: #ffffff        /* Белый текст */
--color-gray-light: #f3f3f3   /* Светло-серый */
--color-gray: #8c8c8c         /* Серый текст */
--color-violet: #5348d1       /* Акцентный цвет */
```

### Типографика

- **Font Family**: Inter
- **Font Sizes**: 80px (hero), 40px (h1), 30px (h2), 20px (body), 16px (small), 14px (tiny)
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 20px
--spacing-lg: 24px
--spacing-xl: 40px
--spacing-2xl: 60px
--spacing-3xl: 80px
--spacing-4xl: 120px
```

## 📄 Как добавить новую страницу

### Шаг 1: Создать структуру папок

```bash
src/pages/NewPage/
  NewPage.jsx
  NewPage.css
  sections/
    SectionOne/
      SectionOne.jsx
      SectionOne.css
    SectionTwo/
      SectionTwo.jsx
      SectionTwo.css
```

### Шаг 2: Создать компонент страницы

```jsx
// src/pages/NewPage/NewPage.jsx
import SectionOne from './sections/SectionOne/SectionOne'
import SectionTwo from './sections/SectionTwo/SectionTwo'
import './NewPage.css'

function NewPage() {
  return (
    <div className="new-page">
      <div className="new-page__hero">
        <div className="new-page__hero-container">
          <h1 className="new-page__hero-title">Заголовок</h1>
          <p className="new-page__hero-subtitle">Подзаголовок</p>
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default NewPage
```

### Шаг 3: Добавить стили

```css
/* src/pages/NewPage/NewPage.css */
.new-page {
  background-color: var(--color-black);
  min-height: 100vh;
}

.new-page__hero {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(180deg, rgba(83, 72, 209, 0.05) 0%, transparent 100%);
}

.new-page__hero-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-3xl);
  text-align: center;
}

.new-page__hero-title {
  font-size: var(--font-size-hero);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
}

.new-page__hero-subtitle {
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-tiny);
  color: var(--color-gray);
  font-weight: var(--font-weight-light);
}

@media (max-width: 768px) {
  .new-page__hero-title {
    font-size: 48px;
  }
}
```

### Шаг 4: Добавить роут в App.jsx

```jsx
// src/App.jsx
import NewPage from '@pages/NewPage/NewPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* ... существующие роуты */}
        <Route path="new-page" element={<NewPage />} />
      </Route>
    </Routes>
  )
}
```

### Шаг 5: Добавить ссылку в навигацию

```jsx
// src/shared/layout/Header/Header.jsx
<NavLink to="/new-page" className="header__link">
  Новая страница
</NavLink>
```

## 🧩 Как добавить новую секцию

### Шаг 1: Создать компонент секции

```jsx
// src/pages/PageName/sections/NewSection/NewSection.jsx
import './NewSection.css'

function NewSection() {
  return (
    <section className="new-section">
      <div className="new-section__container">
        <h2 className="new-section__title">Заголовок секции</h2>
        <p className="new-section__description">Описание секции</p>
      </div>
    </section>
  )
}

export default NewSection
```

### Шаг 2: Создать стили

```css
/* src/pages/PageName/sections/NewSection/NewSection.css */
.new-section {
  padding: var(--spacing-4xl) 0;
}

.new-section__container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-3xl);
}

.new-section__title {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-medium);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
}

.new-section__description {
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-tiny);
  color: var(--color-gray);
}

@media (max-width: 768px) {
  .new-section__title {
    font-size: 32px;
  }
}
```

### Шаг 3: Добавить в страницу

```jsx
// src/pages/PageName/PageName.jsx
import NewSection from './sections/NewSection/NewSection'

function PageName() {
  return (
    <div className="page-name">
      {/* ... другие секции */}
      <NewSection />
    </div>
  )
}
```

## 🎯 Принципы разработки

1. **Один компонент = одна папка** - каждый компонент живет в своей папке с CSS
2. **Модульность** - каждая секция страницы - отдельный компонент
3. **Переиспользование** - общие компоненты в `/shared`
4. **Читаемость** - понятные названия классов по БЭМ
5. **CSS переменные** - используем для всех цветов, отступов и размеров
6. **Адаптивность** - мобильные версии через media queries

## 🎨 Naming conventions

### CSS классы (БЭМ)

```css
.block                    /* Блок */
.block__element           /* Элемент блока */
.block__element--modifier /* Модификатор элемента */
```

### React компоненты

- PascalCase для имен компонентов: `Button`, `HomePage`
- camelCase для пропсов и функций: `onClick`, `handleSubmit`
- Префикс `is/has` для булевых пропсов: `isActive`, `hasError`

## 📱 Адаптивность

Проект адаптирован для:
- Desktop: > 768px
- Mobile: ≤ 768px

Media queries находятся в конце каждого CSS файла.

## 🔧 Кастомизация

### Изменить цветовую схему

Отредактируйте `src/styles/variables.css`:

```css
:root {
  --color-violet: #your-color;
  /* ... другие переменные */
}
```

### Изменить шрифт

Отредактируйте `index.html` для загрузки нужного шрифта и обновите `variables.css`:

```css
:root {
  --font-family: 'YourFont', sans-serif;
}
```

## 🚀 Деплой

### Vercel (рекомендуется)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Загрузите папку dist на Netlify
```

### GitHub Pages

```bash
# В vite.config.js добавьте:
base: '/repository-name/'

npm run build
# Загрузите dist в gh-pages ветку
```

## 📝 Лицензия

© 2024 Interson. Все права защищены.

## 👨‍💻 Разработка

Проект создан как production-ready архитектура для IT-студии с акцентом на:
- Чистый, поддерживаемый код
- Масштабируемость
- Производительность
- SEO-оптимизация

Для вопросов и предложений: info@interson.ru
