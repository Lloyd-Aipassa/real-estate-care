<template>
  <v-bottom-navigation>
    <v-btn>
      <span>active task</span>
      <v-icon>mdi-wrench</v-icon>
    </v-btn>

    <v-btn>
      <span>infromation</span>
      <v-icon>mdi-information</v-icon>
    </v-btn>

    <v-btn @click="$router.back()">
      <span>back</span>
      <v-icon>mdi-skip-previous</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
