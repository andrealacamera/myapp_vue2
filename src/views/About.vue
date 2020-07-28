<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Notes:</h4>

    <ul> 
      <li>The main app is in the Home page</li>
      <li>When you change pages, by using the menu, the main component is detroyed. Returning in the Home page will crete a new component. Since the data are fake (in this example a jsonplaceholder todos list is used), every change will be removed. </li>
      <li>About and Contacts are not very useful, in this example I focused on the Vuex part within the Homepage. </li>
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
</style>