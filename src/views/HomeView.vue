<template>
  <v-main>
    <v-btn to="/Completed" width="45%" height="250">
      <div class="knop">
      <v-icon style="color: #00AAA2;" size="130">mdi-checkbox-marked-circle</v-icon>
      <span>completed</span>
    </div>
    </v-btn>

    <v-btn to="/Scheduled" width="45%" height="250">
      <div class="knop"> 
      <v-icon style="color: #00AAA2;" size="130">mdi-bookmark-outline</v-icon>
      <span>Scheduled</span>
    </div>
    </v-btn>

    <v-btn to="/KnowledgeBase" width="45%" height="250">
      <div class="knop">
      <v-icon style="color: #00AAA2;" size="130">mdi-apps</v-icon>
      <span>KnowledgeBase</span>
    </div>
    </v-btn>

    <v-btn to="/Settings" width="45%" height="250">
      <div class="knop">
      <v-icon style="color: #00AAA2;" size="130">mdi-cog</v-icon>
      <span class="material-icons">settings</span>
    </div>
    </v-btn>
  </v-main>
</template>

<script>
// Components
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',

  components: {
    Footer,
  },
};
</script>

<style scoped>
  .knop{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 10px;
    align-items: center;
    margin-top: 10px;
    padding: 0;
  }
</style>