<template>
  <ul class="task-list">
    <TaskItem />
    <TaskItem />
    <TaskItem />
  </ul>
</template>

<script>
import TaskItem from '../TaskItem/TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
}
</script>

<style lang="scss" scoped>
@use './TaskList.scss';
</style>
