import { Button, Form, Select } from 'antd'
import React, { useContext } from 'react'

import { cityOptions } from '@/assets/config/contextExercise'
import { getRoomlist } from '@/services/contextExercise'
import { RoomContext } from './contextHandler'

export default function SearchItems() {
  const [searchForm] = Form.useForm()
  const { dispatch } = useContext(RoomContext)

  const handleSearch = async () => {
    const values = searchForm.getFieldsValue()
    dispatch(values)
  }

  const resetForm = () => {
    searchForm.resetFields()
  }
  return (
    <>
      <Form
        layout='inline'
        name='searchForm'
        form={searchForm}
      >
        <Form.Item
          name='cityId'
        >
          <Select
            placeholder='城市'
            options={cityOptions}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={resetForm}>
            重置
          </Button>
          <Button type="primary" onClick={handleSearch}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
