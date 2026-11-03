# Browology VDK

Лендинг студии бровей **Browology VDK** во Владивостоке.

**Сайт:** https://sugrinovich.github.io/BROWOLOGY_VDK/

Одностраничный сайт с услугами и ценами, галереей работ, отзывами клиентов, контактами и картой. Запись — через WhatsApp.

## Технологии

* HTML5, CSS3, JavaScript — без сборщиков и фреймворков
* [AOS](https://github.com/michalsnik/aos) 2.3.4 — анимации при прокрутке (лежит локально в `vendor/`)
* Виджет Яндекс Карт
* Изображения в формате WebP

## Структура проекта

```text
BROWOLOGY_VDK/
├── index.html
├── robots.txt            — инструкции для поисковых роботов
├── sitemap.xml           — карта сайта для Яндекс Вебмастера и Google Search Console
│
├── assets/
│   ├── images/           — фотографии, фоны первого экрана, картинка-превью og-image.jpg
│   ├── icons/            — логотип, иконки, декорации, favicon
│   └── fonts/            — шрифты Montserrat и Playfair Display
│
├── css/
│   ├── variables.css     — шрифты, цвета (--color-*) и семейства шрифтов (--font-*)
│   ├── style.css         — основные стили
│   └── adaptive.css      — адаптив: до 690px (телефоны) и 691–980px (планшеты)
│
├── js/
│   └── main.js           — запуск анимаций AOS
│
└── vendor/
    └── aos/              — библиотека AOS
```

## Локальный запуск

Открыть папку в VS Code и запустить расширение **Live Server** (кнопка «Go Live»).

## Как вносить изменения

### Добавить фото

Фото уменьшить до «размер на экране × 2» и сохранить в WebP:

```bash
cwebp -q 82 -resize 1080 0 исходник.jpg -o assets/images/work-1.webp
```

Конвертер ставится командой `brew install webp`. В `<img>` указать `width`, `height`, `alt` и `loading="lazy"`.

### Изменить цены

Цены записаны **в двух местах** в `index.html`:

1. карточки услуг в секции `#services`;
2. блок `makesOffer` в разметке Schema.org (`<script type="application/ld+json">` в `<head>`).

### Подключить свой домен

Заменить адрес `https://sugrinovich.github.io/BROWOLOGY_VDK/` на новый во всех местах:

```bash
grep -rn "sugrinovich.github.io" .
```

## Лицензии сторонних ресурсов

* AOS — MIT License
* Иконки в футере — [Font Awesome Free](https://fontawesome.com/license/free), CC BY 4.0
* Шрифты Montserrat и Playfair Display — SIL Open Font License 1.1
