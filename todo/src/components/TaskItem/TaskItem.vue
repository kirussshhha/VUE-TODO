<template>
  <li class="task-wrapper">
    <div class="task">
      <input 
        type="checkbox" 
        :id="`task-${task.id}`" 
        class="checkbox-inp" 
      />

      <input
        type="text"
        class="edit-title"
        v-model="newTitle"
        @blur="updateTaskTitle"
        autofocus
        placeholder="Edit task"
      />
    </div>
    <div class="remove-task">
      <button class="remove-task-btn">✖</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newTitle: this.task.title,
    }
  },
  methods: {
    ...mapActions(['submitTaskTitle']),
    updateTaskTitle() {
      this.submitTaskTitle({ id: this.task.id, title: this.newTitle })
    },
  },
}
</script>

<style lang="scss" scoped>
@use './TaskItem.scss';
</style>
