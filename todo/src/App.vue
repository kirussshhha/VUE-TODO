<template>
  <div class="wrapper">
    <TodoContainer />
    <img class="list-img" src="./assets/img/list.png" alt="Список" />
  </div>
</template>

<script>
import TodoContainer from './components/TodoContainer/TodoContainer.vue';

export default {
  components: {
    TodoContainer
  }
}
</script>

<style lang="scss">
@use './styles/main.scss';
</style>
