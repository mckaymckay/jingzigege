import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import { TaskType, TaskListProps } from '.'

const TaskList = (props: TaskListProps) => {
  const { tasks, onChangeTask, onDeleteTask } = props
  const [taskList, setTaskList] = useState<TaskType[]>([])

  useEffect(() => {
    setTaskList(tasks?.map(t => ({ ...t, edit: false })))
  }, [tasks])

  // 编辑
  const editTask = (task: TaskType) => {
    task.edit ?
      onChangeTask({
        id: task.id,
        text: task.text,
        done: false
      }) : setTaskList(taskList.map(t => (t.id === task.id ? { ...t, edit: true } : t)))
  }
  const handleChangeInput = (e: any, task: TaskType) => {
    setTaskList(taskList.map(t => (t.id === task.id ? { ...t, text: e.target.value } : t)))
  }

  return (
    <>
      <ul>
        {taskList.map(task => (
          <div style={{ margin: '10px' }}>
            {task?.edit ?
              <Input
                value={task.text}
                onChange={(e) => handleChangeInput(e, task)}
                style={{ width: 150, marginRight: '20px' }}
                placeholder='填写任务名称'
              /> :
              <span key={task.id}>{task.text}</span>
            }
            <Button
              size="small"
              style={{ margin: '0px 5px 0px 10px' }}
              onClick={() => editTask(task)}
            >
              {task.edit ? 'save' : '编辑'}
            </Button>
            <Button
              size="small"
              onClick={() => onDeleteTask(task.id)}
            >
              删除
            </Button>
          </div>
        )
        )}
      </ul>
    </>
  )
}

export default TaskList