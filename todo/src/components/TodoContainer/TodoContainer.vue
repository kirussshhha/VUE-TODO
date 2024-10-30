<template>
  <div class="todo__container">
    <h2 class="todo-header">to do list</h2>
    <div class="list__wrapper">
      <div class="list__container">
        <TaskList />
        <div class="add-task">
          <button class="add-task-btn" @click="addNewTask">
            Add a new task
          </button>
        </div>
      </div>
    </div>
    <NavControls />
  </div>
</template>

<script>
import NavControls from '../NavControls/NavControls.vue'
import TaskList from '../TaskList/TaskList.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    NavControls,
    TaskList,
  },
  methods: {
    ...mapActions(['addNewTask']),
  },
}
</script>

<style lang="scss">
@use './TodoContainer.scss';
</style>
