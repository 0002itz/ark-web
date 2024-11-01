## Docker compose 
    contenedores: 1
    Nombres: arkline-circle-con-dev
    Imagen : ogtdocker/ark-img-dev:v.2.3
    Server: Node, apache

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cardproductsm.astro
│   │   ├── Cardproductxl.astro
│   │   ├── Alertmeseng.astro
│   │   ├── Footer.jsx
│   │   ├── Footerbutton.jsx
│   │   ├── Header.jsx
│   │   ├── Headerbotton.jsx
│   │   └── Products.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── Product/
│       │    └── [product_name].astro
│       ├── index.astro
│       ├── event.astro
│       ├── 404.astro
│       ├── PrivacyNotice.astro
│       ├── remedies.astro
│       └── Terms&Conditions.astro
└── package.json
```


Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
