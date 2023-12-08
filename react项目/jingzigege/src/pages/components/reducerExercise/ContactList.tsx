import React from 'react'
import { ContactType } from './index'

interface propsType {
  contacts: ContactType[],
  selectedId: number,
  dispatch: any
}

export default function ContactList(props: propsType) {
  const { contacts, selectedId, dispatch } = props
  return (
    <>
      {
        contacts?.map((v: ContactType) => {
          return (
            <div
              key={v.id}
              style={{ border: '1px solid #ccc', margin: '5px ', width: 100, textAlign: 'center', lineHeight: '30px', cursor: 'pointer' }}
              onClick={() => {
                dispatch({
                  type: 'SELECT_Contact',
                  id: v.id
                })
              }}
            >
              <span style={{ fontWeight: v.id === selectedId ? 'bold' : '' }}> {v.name}</span>
            </div>
          )
        })
      }
    </>
  )
}
