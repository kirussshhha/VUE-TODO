import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import NavControls from '../components/NavControls/NavControls.vue'

const tasks = [
  { id: 1, title: 'Task 1', isChecked: false },
  { id: 2, title: 'Task 2', isChecked: true },
]

const state = {
  filter: 'all',
  tasks,
}

const actions = {
  setFilter: vi.fn(),
}

const getters = {
  filteredTasks: () => tasks,
}

const mutations = {
  setFilters(state, filter) {
    state.filter = filter
  },
}

const store = createStore({
  state,
  actions,
  getters,
  mutations,
})

describe('NavControlls', () => {
  let wrapper

  beforeEach(() => {
    store.dispatch = vi.fn()

    wrapper = mount(NavControls, {
      global: {
        plugins: [store],
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('должен отображать активныу/оставшиеся задачи в фильтре all', () => {
    expect(wrapper.find('.items-left').text()).toContain('1/2 left')
  })

  it('должен отображать колличество элементов в фильтре active', async () => {
    await store.commit('setFilters', 'active')
    expect(wrapper.find('.items-left').text()).toContain('Task count: 2')
  })

  it('должен отображать колличество элементов в фильтре completed', async () => {
    await store.commit('setFilters', 'completed')
    expect(wrapper.find('.items-left').text()).toContain('Task count: 2')
  })

  it('вызывает действие setFilter при нажатии кнопок фильтра', async () => {
    const [allButton, activeButton, completedButton] = wrapper.findAll('button')

    await allButton.trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith('setFilter', 'all')

    await activeButton.trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith('setFilter', 'active')

    await completedButton.trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith('setFilter', 'completed')
  })
})
