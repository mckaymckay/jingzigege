import React from 'react'
import { Button, Form, Input } from 'antd';
import MyChildren from './MyChildren'

export default function index() {
  const handleFinish = (values: any) => {
    console.log('values', values)
  }
  return (
    <Form
      onFinish={handleFinish}
    >
      <Form.Item name="username" label="user">
        <MyChildren />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}
