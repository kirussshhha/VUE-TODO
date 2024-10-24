<template>
  <div class="wrapper">
    <div class="todo__container">
      <h2 class="todo-header">to do list</h2>
      <div class="list__wrapper">
        <div class="list__container">
          <ul class="task-list">
            <li class="task">
              <div class="task-checkbox">
                <input type="checkbox" id="task1" class="task-inp" />
                <label for="task1" class="task-label">Task 1</label>
              </div>
              <div class="remove-task">
                <button class="remove-task-btn">✕</button>
              </div>
            </li>
            <li class="task">
              <div class="task-checkbox">
                <input type="checkbox" id="task2" class="task-inp" />
                <label for="task2" class="task-label">Task 2</label>
              </div>
              <div class="remove-task">
                <button class="remove-task-btn">✕</button>
              </div>
            </li>
            <li class="task">
              <div class="task-checkbox">
                <input type="checkbox" id="task2" class="task-inp" />
                <label for="task2" class="task-label">Task 2</label>
              </div>
              <div class="remove-task">
                <button class="remove-task-btn">✕</button>
              </div>
            </li>
          </ul>
          <div class="add-task">
            <button class="add-task-btn">Add a new task</button>
          </div>
        </div>
      </div>
      <div class="nav__wrapper">
        <div class="nav__container">
          <p class="items-left">1/3 left</p>

          <div class="btn-nav__container">
            <button class="all-nav-btn">All</button>
            <button class="nav-btn">Active</button>
            <button class="nav-btn">Completed</button>
          </div>
        </div>
      </div>
    </div>
    <img class="list-img" src="./assets/img/list.png" alt="Список" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use './styles/main.scss';
</style>
