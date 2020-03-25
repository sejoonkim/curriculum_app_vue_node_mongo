# Frontend

## Vue

### Create Vue Project

1. > vue create curriculum-front

2. Manually select features

   - select everything except "TypeScript"
   - "CSS Pre-processors" is for **Sass**

3. Use history mode for router?

   - No

4. Pick a CSS pre-processor

   - Sass/SCSS (with node-sass)
   - **Vue Does this FOR YOU!**
     - [Configuring Webpack](https://github.com/sejoonkim/youtube_clone#frontend-webpack)

5. Pick a linter / formatter config

   - ESLint + Standard config

6. Pick additional lint features

   - Lint and fix on commit

7. Pick a unit testing solution

   - Jest

8. Pick a E2E testing solution

   - Nightwatch - including other browsers

9. Where do you prefer placing config for Babel, PostCSS, ESLint, etc?

   - In dedicated config files

10. Save this as a preset for future projects?

    - No

<br/>

### Add Components, Routes

- views/

  - UpsertCurriculum.vue, write basic div
  - DisplayCurricula.vue, write basic div
  - delete About.vue

- router.js

  - import the components in view/
  - check correct router.js is loaded in main.js

- App.vue

  - modify

    - > <router-link to="/something">Create</router-link>

- components/HelloWorld.vue

  - delete

<br/>

### Add Vuetify

- component library for VueJS - [Link](https://vuetifyjs.com/en/)

- plugin for vue-cli

- > vue add vuetify

  - Choose a preset: Default

- > npm run serve

- To use Vuetify

  - <v-app> > <div id="app">

- **TIP**
  - initiate Vuetify right after **creating** the app

<br/>

### Add Sass

- sass/
  - base/
    - general files
    - variables
    - things that are across whole application
  - components/
    - specific styles
  - libraries/
    - 3rd party mixins
  - index.sass
    - import OTHER Sass files
- sass indented syntax is used
  - [Sass Syntax](http://sass-css.org/documentation/syntax)
  - without {, }
  - with added features
- \_variables.sass

  - it is a partial, convention for Sass files

- index.js

  - import index.sass

- \_general.sass

  - add styles

<br/>
<br/>
<br/>

# curriculum-front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
