import { createStore } from 'vuex'

const localStorageKey = 'taskApp'

export default createStore({
  state: {
    tasks: [],
    filter: 'all',
  },
  mutations: {
    updateTaskTitle(state, { id, title }) {
      const task = state.tasks.find(task => task.id === id)
      if (task) {
        task.title = title;
        this.commit('saveToLocalStorage');
      }
    },
    toggleTaskCheckbox(state, { id, isChecked }) {
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.isChecked = isChecked
        this.commit('saveToLocalStorage');
      }
    },
    addNewTask(state, newTask) {
      state.tasks.push(newTask)
      this.commit('saveToLocalStorage');
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      this.commit('saveToLocalStorage');
    },
    setFilter(state, filter) {
      state.filter = filter;
      this.commit('saveToLocalStorage');
    },
    saveToLocalStorage(state) {
      localStorage.setItem(localStorageKey, JSON.stringify(state.tasks));
    },
    loadFromLocalStorage(state) {
      const tasks = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      state.tasks = tasks;
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
    loadTasksFromLocalStorage({ commit }) {
      commit('loadFromLocalStorage');
    },
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === 'active') {
        return state.tasks.filter(task => !task.isChecked)
      } else if (state.filter === 'completed') {
        return state.tasks.filter(task => task.isChecked)
      }
      return state.tasks;
    },
  },
})
