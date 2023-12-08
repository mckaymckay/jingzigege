import { useEffect, useState } from 'react';

import AddTask from './AddTask'
import TaskList from './TaskList';
import { TaskType } from './index.d'
import { fetchTaskList } from '@/services/contextAndReducer'



export default function TaskApp() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    getTaskList()
  }, [])

  const getTaskList = async () => {
    const res = await fetchTaskList()
    setTasks(res?.data || [])
  }
  // 添加任务
  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: tasks?.length,
        text: text,
        done: false,
      },
    ]);
  }
  // 修改任务
  function handleChangeTask(task: TaskType) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  // 删除任务
  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h2>Original</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}


