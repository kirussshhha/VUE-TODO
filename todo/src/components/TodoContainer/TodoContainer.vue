<template>
  <div class="todo__container">
    <h2 class="todo-header">to do list</h2>
    <div class="list__wrapper">
      <div class="list__container">
        <TaskList />
        <div class="add-task">
          <button class="add-task-btn">Add a new task</button>
        </div>
      </div>
    </div>
    <NavControls />
  </div>
</template>

<script>
import NavControls from '../NavControls/NavControls.vue'
import TaskList from '../TaskList/TaskList.vue';

export default {
  components: {
    NavControls,
    TaskList
  },
}
</script>

<style lang="scss">
@use './TodoContainer.scss';
</style>
