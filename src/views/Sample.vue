<template>
  <div class="sample">
    <main>
      <div class="container" id="app">
        <!-- <h1>Primi test con Vue.js e Bootstrap5 (alpha)</h1> -->
        <h1> Sample Page with Vue and Bootstrap5</h1>
        
        <div class="row align-items-start">
          <div class="col">
            <p>Default message: <br /><kbd>{{ message }}</kbd></p>
          </div>
          <div class="col">
            <p>Edit the text below and press save. The value is saved in the local storage of your browser.</p>
            <p>Please return to this page later to verify your save...</p>
          </div>
        </div>

        <p>Edit the message:
        <input v-model="message" name="new" placeholder="Insert new message..." type="text" class="message form-control" width="50px"></p> 
        
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary"  @click="setnewmess">Save message</button>
          <button class="btn btn-primary" @click="getnewmess">Load message</button>
        </div>
      </div>
    </main>


  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      message: 'Hello World!'
    }
  }, 
  methods: {
    setnewmess() {
      localStorage.setItem('vue', this.message);
    },
    getnewmess() {
      this.message=localStorage.getItem('vue');
    }
  },
  created() {
    if (localStorage.getItem('vue') !== null) {
      this.getnewmess();
    }
  }
};
</script>

<style>
.sample {
  /* display: inline-flex; */
  color: rgb(0, 160, 21)
}

main {
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(28, 226, 177, 0.2), rgba(25, 3, 78, 0.9));
}
.message {
    background-color: rgba(255,255,255,0.5);
    border-radius: 4px;
}

.message:focus {
    background-color: rgba(255,255,255,0.8);
}
</style>