import React, { useState } from 'react'
import { Input, Button } from 'antd'

const AddTask = ({ onAddTask }: { onAddTask: any }) => {
  const [value, setValue] = useState('');
  const handleAddTask = () => {
    setValue('')
    onAddTask(value)
  }
  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 300, marginRight: '20px' }}
        placeholder='添加任务'
      />
      <Button type='primary' onClick={handleAddTask}>添加</Button>
    </>
  )
}
export default AddTask;