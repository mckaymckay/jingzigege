import { TaskType } from './index.d'

const TaskReducer = (tasks: TaskType[], action: any) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }]
    case 'EDIT_TASK':
      return tasks?.map((task) => {
        return task.id === action.task.id ? action.task : task
      })
    case 'DELETE_TASK':
      return tasks?.filter(v => v.id != action.id)
    default:
      {
        throw Error('未知 action: ' + action.type);
      }
  }
}

export default TaskReducer;