# criteriodigitale.ru

Одностраничный сайт Татьяны Мирошиной — русскоязычная версия проекта [criteriodigitale.it](https://criteriodigitale.it).

## Стек

- Vite + React 18 + TypeScript
- Tailwind CSS
- embla-carousel-react (для блока «Случаи»)
- lucide-react (иконки)
- Prerender через `react-dom/server` — статический HTML в `dist/index.html` для поисковиков и ИИ-краулеров

## Локальный запуск

```bash
npm install
npm run dev          # http://localhost:5180
```

## Сборка

```bash
npm run build        # производит dist/ с уже отрендеренным HTML внутри
npm run preview      # локальный просмотр сборки
```

## Деплой

Vercel-ready. Просто подключить репозиторий — `npm run build` запустится автоматически, `dist/` уйдёт на CDN. Контент уже статический, краулеры читают всё без выполнения JavaScript.
