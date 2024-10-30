<template>
  <li class="task-wrapper">
    <div class="task">
      <input
        type="checkbox"
        :id="`task-${task.id}`"
        class="checkbox-inp"
        :checked="task.isChecked"
        @change="onUpdateTaskCheckbox($event.target.checked)"
      />

      <input
        type="text"
        class="edit-title"
        v-model="newTitle"
        @blur="onUpdateTaskTitle"
        autofocus
        placeholder="Edit task"
      />
    </div>
    <div class="remove-task">
      <button class="remove-task-btn" @click="onRemoveTask">✖</button>
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
    ...mapActions(['updateTaskTitle', 'toggleTaskCheckbox', 'removeTask']),
    onUpdateTaskTitle() {
      this.updateTaskTitle({ id: this.task.id, title: this.newTitle });
    },
    onUpdateTaskCheckbox(isChecked) {
      this.toggleTaskCheckbox({ id: this.task.id, isChecked });
    },
    onRemoveTask() {
      this.removeTask(this.task.id);
    },
  },
}
</script>

<style lang="scss" scoped>
@use './TaskItem.scss';
</style>
