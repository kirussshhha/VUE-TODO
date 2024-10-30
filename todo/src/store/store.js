import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task 1', isChecked: false },
      { id: 2, title: 'Task 2', isChecked: true },
      { id: 3, title: 'Task 3', isChecked: false },
    ],
    filter: 'all',
  },
  mutations: {
    updateTaskTitle(state, { id, title }) {
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.title = title;
      }
    },
    toggleTaskCheckbox(state, { id, isChecked }) {
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.isChecked = isChecked;
      }
    },
    addNewTask(state, newTask) {
      state.tasks.push(newTask);
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    updateTaskTitle({ commit }, { id, title }) {
      commit('updateTaskTitle', { id, title });
    },
    toggleTaskCheckbox({ commit }, { id, isChecked }) {
      commit('toggleTaskCheckbox', { id, isChecked });
    },
    addNewTask({ commit }) {
      const newTask = {
        id: Date.now(),
        title: 'Click to edit',
        isChecked: false,
      }
      commit('addNewTask', newTask);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    },
    setFilter({ commit }, filter) {
      commit('setFilter', filter);
    },
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === 'active') {
        return state.tasks.filter(task => !task.isChecked);
      } else if (state.filter === 'completed') {
        return state.tasks.filter(task => task.isChecked);
      }
      return state.tasks;
    },
  },
})
