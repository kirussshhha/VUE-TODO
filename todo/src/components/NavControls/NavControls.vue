<template>
  <div class="nav">
    <div class="nav__container">
      <p class="items-left" v-if="filter === 'all'">
        {{ itemsLeft }}/{{ itemLength }} left
      </p>
      <p class="items-left" v-else>Task count: {{ itemLength }}</p>

      <div class="btn-nav__container">
        <button class="all-nav-btn" @click="setFilter('all')">All</button>
        <button class="nav-btn" @click="setFilter('active')">Active</button>
        <button class="nav-btn" @click="setFilter('completed')">Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['filteredTasks']),
    itemsLeft() {
      return this.filteredTasks.filter(task => !task.isChecked).length;
    },
    itemLength() {
      return this.filteredTasks.length;
    },
  },
  methods: {
    ...mapActions(['setFilter']),
  },
}
</script>

<style lang="scss">
@use './NavControls.scss';
</style>
