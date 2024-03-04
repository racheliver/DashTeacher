<template>
  <div class="contanier">
    <Menu />
    <LessonDashboard :data="data" />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import data from "./data.json";
import LessonDashboard from "./components/LessonDashboard.vue"

export default {
  components: {
    Menu,
    LessonDashboard,
  },
  data() {
    return {
      data: data
    };
  }
};
</script>
<style scoped>
.contanier{
  background-color: var(--root-background-color);
}

</style>