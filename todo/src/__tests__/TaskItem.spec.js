import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TaskItem from '../components/TaskItem/TaskItem.vue'

const actions = {
  updateTaskTitle: vi.fn(),
  toggleTaskCheckbox: vi.fn(),
  removeTask: vi.fn(),
}

const store = createStore({
  actions,
})

describe('TaskItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TaskItem, {
      global: {
        plugins: [store],
      },
      props: {
        task: {
          id: 1,
          title: 'Test Task',
          isChecked: false,
        },
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('должен корректно отображатся заголовок задачи', () => {
    expect(wrapper.find('.edit-title').element.value).toBe('Test Task')
  })

  it('должен вызвать действие updateTaskTitle при изменении заголовка', async () => {
    const newTitle = 'update task'
    await wrapper.find('.edit-title').setValue(newTitle)
    await wrapper.find('.edit-title').trigger('blur')
    expect(actions.updateTaskTitle).toHaveBeenCalledWith(expect.anything(), {
      id: 1,
      title: newTitle,
    })
  })

  it('должен вызвать действие toggleTaskCheckbox при изменении чекбокса', async () => {
    await wrapper.find('.checkbox-inp').setChecked()
    expect(actions.toggleTaskCheckbox).toHaveBeenCalledWith(expect.anything(), {
      id: 1,
      isChecked: true,
    })
  })

  it('должен вызвать действие removeTask при нажатии на кнопку удаления', async () => {
    await wrapper.find('.remove-task-btn').trigger('click')
    expect(actions.removeTask).toHaveBeenCalledWith(expect.anything(), 1)
  })
})
