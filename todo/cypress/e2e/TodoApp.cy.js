describe('Todo app', () => {
  let tasks

  beforeEach(() => {
    cy.fixture('tasks').then(data => {
      tasks = data
      localStorage.setItem('taskApp', JSON.stringify(tasks))
    })
    cy.visit('/')
  })

  const assertTaskTitles = expectedTitles => {
    cy.get('.task-list')
      .children()
      .each((input, index) => {
        cy.wrap(input)
          .find('.edit-title')
          .should('have.value', expectedTitles[index])
      })
  }

  it('рендер всех компонентов', () => {
    cy.get('.todo-header').should('contain', 'to do list')
    cy.get('.task-list').should('exist')
    cy.get('.add-task-btn').should('exist')
    cy.get('.nav').should('exist')
  })

  it('загрузка задач из localStorage', () => {
    cy.get('.task-list').children().should('have.length', tasks.length)
    assertTaskTitles(tasks.map(task => task.title))
  })

  it('рендер задач по клику кнокпи Completed и Active', () => {
    cy.get('.nav-btn').contains('Active').click()
    assertTaskTitles(
      tasks.filter(task => !task.isChecked).map(task => task.title),
    )

    cy.get('.nav-btn').contains('Completed').click()
    assertTaskTitles(
      tasks.filter(task => task.isChecked).map(task => task.title),
    )
  })

  it('изменение статуса задач и сохранение после перезагрузки', () => {
    cy.get('.task-list li').first().find('.checkbox-inp').check()
    cy.reload()
    cy.get('.task-list li').first().find('.checkbox-inp').should('be.checked')
  })

  it('редактирование задачи', () => {
    cy.get('.task-list li')
      .first()
      .find('.edit-title')
      .clear()
      .type('Updated Task 1')

    cy.get('.task-list li')
      .first()
      .find('.edit-title')
      .should('have.value', 'Updated Task 1')
  })

  it('удаление задачи', () => {
    cy.get('.task-list li').first().find('.remove-task-btn').click()

    cy.get('.task-list li')
      .first()
      .find('.edit-title')
      .should('not.be', 'Updated Task 1')
  })

  it('оставшиеся задачи и колличество задач', () => {
    cy.get('.items-left').should('contain', '2/3 left')

    cy.get('.task-list li').first().find('.checkbox-inp').check()
    cy.get('.items-left').should('contain', '1/3 left')

    cy.get('.nav-btn').contains('Active').click()
    cy.get('.items-left').should('contain', 'Task count: 1')

    cy.get('.nav-btn').contains('Completed').click()
    cy.get('.items-left').should('contain', 'Task count: 2')
  })

  it('добавление задачи', () => {
    cy.get('.add-task-btn').click()

    cy.get('.task-list li')
      .last()
      .find('.edit-title')
      .should('have.value', 'Click to edit')

    cy.get('.task-list li')
      .last()
      .find('.checkbox-inp')
      .should('not.be.checked')
  })
})
