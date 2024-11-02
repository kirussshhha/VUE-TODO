import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TaskList from '../components/TaskList/TaskList.vue'
import TaskItem from '../components/TaskItem/TaskItem.vue'

const tasks = [
  { id: 1, title: 'Task 1', isChecked: false },
  { id: 2, title: 'Task 2', isChecked: true },
]

const state = {
  filteredTasks: [],
}

const getters = {
  filteredTasks: state => state.filteredTasks,
}

const mutations = {
  setFilteredTasks(state, tasks) {
    state.filteredTasks = tasks
  },
}

const store = createStore({
  state,
  getters,
  mutations,
})

describe('TaskList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TaskList, {
      global: {
        plugins: [store],
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('должен отображать taskItem для каждой задачи', async () => {
    await store.commit('setFilteredTasks', tasks)
    const taskItems = wrapper.findAllComponents(TaskItem)
    expect(taskItems.length).toBe(tasks.length)
  })

  it('отображать сообщение "Tasks no found", если задач нет', async () => {
    await store.commit('setFilteredTasks', [])
    const noTaskMessage = wrapper.find('.noFoundTasks')
    expect(noTaskMessage.exists()).toBe(true)
  })

  it('должен передавать правильные пропсы в taskItem', async () => {
    await store.commit('setFilteredTasks', tasks)
    const taskItem = wrapper.findComponent(TaskItem)
    expect(taskItem.props('task')).toEqual(tasks[0])
  })
})
