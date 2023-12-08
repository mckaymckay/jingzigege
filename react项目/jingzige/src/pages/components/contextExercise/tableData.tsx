import { Button, Modal, Table } from 'antd'
import React, { useContext, useEffect, useState } from 'react'

import { RoomContext } from './contextHandler'
import { getRoomlist } from '@/services/contextExercise'

export default function TableData() {
  const [open, setOpen] = useState(false)
  const [roomList, setRoomList] = useState([])
  const { searchParams } = useContext(RoomContext)

  useEffect(() => {
    console.log(333, "222")
    getList()
  }, [searchParams])
  const getList = async () => {
    const res: any = await getRoomlist(searchParams)
    setRoomList(res?.list || [])
  }
  const edit = () => {
    setOpen(true)
  }
  const finishEdit = () => {
    setOpen(false)
    // 重新获取列表
    getList()
  }
  const tableColumns = [{
    title: '项目名称',
    dataIndex: 'communityId',
    key: 'communityId',
    // render: (text: string) => <a>{text}</a>
  }, {
    title: '城市区域',
    dataIndex: 'cityName',
  }, {
    title: '操作',
    render: () => {
      return <Button onClick={edit}>编辑运营商</Button>
    }
  }]
  return (
    <>
      <Table
        bordered
        dataSource={roomList}
        columns={tableColumns}
      >
      </Table>
      <Modal
        title='编辑'
        open={open}
        onOk={finishEdit}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
