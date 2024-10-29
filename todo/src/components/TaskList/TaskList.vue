<template>
  <ul class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import TaskItem from '../TaskItem/TaskItem.vue';

export default {
  components: {
    TaskItem,
  },
  computed: {
    ...mapState(['tasks']),
  }
}
</script>

<style lang="scss" scoped>
@use './TaskList.scss';
</style>
