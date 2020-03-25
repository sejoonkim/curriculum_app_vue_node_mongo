<template>
  <v-app id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/curriculum/upsert">Create</router-link>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
