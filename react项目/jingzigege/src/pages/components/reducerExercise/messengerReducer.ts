import React from 'react'
import { SelectedType } from './index'

export const initialState = {
  selectedId: 0,
  message: '你好'
}
export const messengerReducer = (state: SelectedType, action: any) => {
  switch (action.type) {
    case 'SELECT_Contact':
      return {
        selectedId: action.id,
        message: ''
      }

    case 'Edit_Message':
      return {
        ...state,
        message: action.message
      }
    default:
      {
        throw Error('未知 action: ' + action.type)
      }
  }
}


