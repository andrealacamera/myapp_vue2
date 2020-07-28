<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <ul class="nav justify-content-center">
        <li class="nav-item"><router-link to="/">Home</router-link></li>
        <li class="nav-item"><router-link to="/about">About</router-link></li>
        <li class="nav-item"><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
</style>
