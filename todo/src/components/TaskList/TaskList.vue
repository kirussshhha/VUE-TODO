<template>
  <ul class="task-list" v-if="filteredTasks.length > 0">
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </ul>
  <div class="noFoundTasks" v-else>
    <p class="noFoundTasks-title">Tasks no found</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskItem from '../TaskItem/TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
  computed: {
    ...mapGetters(['filteredTasks']),
  },
}
</script>

<style lang="scss" scoped>
@use './TaskList.scss';
</style>
