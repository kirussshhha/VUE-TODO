<template>
  <li class="task">
    <div class="task-checkbox">
      <input type="checkbox" id="task1" class="task-inp" />
      <label for="task1" class="task-label">Task 1</label>
    </div>
    <div class="remove-task">
      <button class="remove-task-btn">✖</button>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use './TaskItem.scss';
</style>
