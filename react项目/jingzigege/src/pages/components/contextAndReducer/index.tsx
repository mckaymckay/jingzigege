import { useEffect, useReducer, useState } from 'react';

import AddTask from './AddTask'
import TaskList from './TaskList';
import { TaskType } from './index.d'
import { fetchTaskList } from '@/services/contextAndReducer'
import TaskReducer from './taskReducer';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [count, setCount] = useState(tasks?.length)

  useEffect(() => {
    getTaskList()
  }, [])
  // 获取task列表
  const getTaskList = async () => {
    const res = await fetchTaskList()
    dispatch({
      type: 'FETCH_TASKS',
      tasks: res?.data
    })
  }
  // 添加任务
  function handleAddTask(text: string) {
    setCount(count + 1)
    dispatch({
      type: 'ADD_TASK',
      text: text,
      id: count + 1
    })
  }
  // 修改任务
  function handleChangeTask(task: TaskType) {
    dispatch({
      type: 'EDIT_TASK',
      task: task
    })
  }
  // 删除任务
  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'DELETE_TASK',
      id: taskId
    })
  }

  return (
    <>
      <h2>Advanced</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}


