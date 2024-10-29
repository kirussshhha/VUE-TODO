import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task 1'},
      { id: 2, title: 'Task 2'},
      { id: 3, title: 'Task 3'},
    ],
  },
  mutations: {
    updateTask(state, { id, title }) {
      const task = state.tasks.find(task => task.id === id)
      if (task) {
        task.title = title
      }
    },
  },
  actions: {
    submitTaskTitle({ commit }, { id, title }){
      commit('updateTask', { id, title });
    },
  },
});
