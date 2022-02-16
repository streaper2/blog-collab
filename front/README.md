# front

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
# Documentation STRAPI

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# Installation du projet
- git clone
- cd back-strapi
- npm install
- cd ../front
- npm install
- revenir a la racine et faire npm run dev

> il se peut que strapi demande de générer une nouvelle clé afin de pouvoir générer un token dans le fichier .env

dans ce cas il faut aller dans ./config/server.js et modifier le app:

```
app: {
    keys: env.array('APP_KEYS', 'n importe quelle style de mot ou phrase suffit'),
  },

```
# dossier exemple

dans pages/exemples, il y a une liste des exemples simple pour recuperer les informations d'une api, mais il y aussi, un exemple de l'utilisation du store qui a été implémenté.

# TODO

## NUXT
### general
- [ ] ajouter un layout de blog
- [ ] gerer toutes les datas dans le store

### pages/index.vue
- [ ] recuperer toutes les données de l'api strapi
- [ ] Update the website
- [ ] Contact the media

### pages/admin/posts/index.vue
- [ ] ajouter la liste des articles
    -   [ ] ajouter supprimer
    -   [ ] ajouter modifier

### pages/admin/posts/create/index.vue
- [ ] ajouter un formulaire de création d'article

### pages/admin/posts/update/_id.vue
- [ ] recuperer l'id du post et ajouter la liste de modification

## STRAPI
### endpoint
#### articles
- [ ] ajouter une entrée like
- [ ] ajouter une entrée commentaire
- [ ] ajouter une entrée share
- [ ] dans le schema rajouter populate

## + si affinité
- [ ] ajouter le concept de connection
    - [ ] ajouter le token dans le localstorage pour sauvegarder la session
    - [ ] ajouter la possibilité de s'inscrire sur le blog
