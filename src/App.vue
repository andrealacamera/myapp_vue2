<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link> | 
        <router-link to="/contacts">Contacts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

