<template>
  <v-bottom-navigation>
    <v-btn>
      <span style="color: #FFF;">active task</span>
      <v-icon style="color: #FFF;">mdi-wrench</v-icon>
    </v-btn>

    <v-btn>
      <span style="color: #FFF;">infromation</span>
      <v-icon style="color: #FFF;">mdi-information</v-icon>
    </v-btn>

    <v-btn @click="$router.back()">
      <span style="color: #FFF;">back</span>
      <v-icon style="color: #FFF;">mdi-skip-previous</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style>
  .v-bottom-navigation__content{
    background-color:#00AAA2 ;
  }
</style>