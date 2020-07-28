<template>
  <div class="about">
    <h1>Myapp_vue2</h1>
    <h4>Notes:</h4>

    <ul> 
      <li>The main app is in the Home page.</li>
      <li>When you change pages, by using the menu, the main component is detroyed. Returning in the Home page will crete a new component. Since the data are fake (in this example a <a href="http://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a> todos list is used), every change will be removed. </li>
      <li>Thanks to the <a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards" target="_blank">Navigation Guards</a>, a confirm message is fired before changing the pages. </li>
      <li>Sample page contains a first example of Local Storage data.</li>
      <li>I'm still learning...</li>
    </ul>
  </div>
</template>

<style scoped>

.about {
  min-height: 100vh;
  font-size: 1.2em;
  color: #222;
  background-image: linear-gradient(to bottom, rgba(100,200,100,0.3), rgba(0,0,0,0.3));
}
h1 {
  margin-bottom: 30px;
}

h4 {
  margin-bottom: 10px;
}
</style>