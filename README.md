# myapp_vue2
Vue + VUEX + Vue-Router example app.
Something inside also contains [Bootstrap5.0alpha](https://v5.getbootstrap.com/).

Based on [this video](https://www.youtube.com/watch?v=5lVQgZzLMHc).

## Notes:
- The main app is in the Home page
- When you change pages, by using the menu, the main component is detroyed. Returning in the Home page will crete a new component. Since the data are fake (in this example a jsonplaceholder todos list is used), every change will be removed. 
- About and Contacts are not very useful, in this example I focused on the Vuex part within the Homepage. 
- I'm still learning...

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
