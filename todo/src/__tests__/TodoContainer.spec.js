import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TodoContainer from '../components/TodoContainer/TodoContainer.vue'
import TaskList from '../components/TaskList/TaskList.vue'
import NavControls from '@/components/NavControls/NavControls.vue'

const tasks = [
  { id: 1, title: 'Task 1', isChecked: false },
  { id: 2, title: 'Task 2', isChecked: true },
]

const actions = {
  addNewTask: vi.fn(),
  loadTasksFromLocalStorage: vi.fn(),
}

const getters = {
  filteredTasks: () => tasks,
}

const store = createStore({
  actions,
  getters,
})

describe('TodoContainer', () => {
  let wrapper

  wrapper = mount(TodoContainer, {
    global: {
      plugins: [store],
    },
  })

  it('рендерит компонент TaskList', () => {
    expect(wrapper.findComponent(TaskList).exists()).toBe(true)
  })

  it('рендерит компонент NavControls', () => {
    expect(wrapper.findComponent(NavControls).exists()).toBe(true)
  })

  it('вызывает addNewTask при клике на кнопку "Add a new task"', async () => {
    const addBtn = wrapper.find('.add-task-btn')
    await addBtn.trigger('click')
    expect(actions.addNewTask).toHaveBeenCalled()
  })

  it('вызывает loadTasksFromLocalStorage', () => {
    expect(actions.loadTasksFromLocalStorage).toHaveBeenCalled()
  })
})
