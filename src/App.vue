<template>
  <div id="app">
    <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">Home</router-link> | 
        <router-link to="/sample">Sample page</router-link> |
        <router-link to="/about">About</router-link> 
    </nav>
    <router-view/>
  </div>
  </div>

</template>

