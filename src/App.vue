<template>
  <v-app>
    <v-toolbar>
     <h1>
      test
     </h1>
    </v-toolbar>

      <v-main>
        <router-view/>
      </v-main>
      
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
