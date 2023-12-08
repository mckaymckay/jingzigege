import React, { useState } from 'react'
import { ContactType } from './index'
import { Button } from 'antd'


interface propsType {
  key: number | undefined,
  message: string,
  contact: ContactType | undefined,
  dispatch: any
}

export default function Chat(props: propsType) {
  const { key, message, contact, dispatch } = props
  return (
    <div>
      <textarea
        style={{ width: 100, height: 100, border: '1px solid #ccc' }}
        placeholder={'和 ' + contact?.name + ' 聊天'}
        onChange={(e) => {
          dispatch({
            type: 'Edit_Message',
            text: e.target.value
          })
        }}
      >
        {message}
      </textarea>
      <Button>{`发送给${contact?.email}`}</Button>
    </div>
  )
}
