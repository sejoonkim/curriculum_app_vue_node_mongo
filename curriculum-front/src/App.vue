<template>
  <v-app id="app">
    <TopNav />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    TopNav
  }
};
</script>
