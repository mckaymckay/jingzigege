import React, { useState } from 'react'
import styles from './index.less'
import { DemoListsType } from './index.d'
import { pathLists } from '@/routes/path'


export default function Index() {
  const handleClickGame = (e: DemoListsType) => {
    console.log(20, e.url)
    window.location.href = e?.url
  }
  return (
    <div className={styles.home_page}>
      <h1>Home Page</h1>
      <span>请选择：</span>
      <ul>
        {pathLists.map(v => {
          return (
            <li key={v?.id} className={styles.demo_item} onClick={() => handleClickGame(v)} style={{ width: '150px' }}>
              {v.name}
            </li>
          )
        })}
      </ul>

    </div>

  )
}