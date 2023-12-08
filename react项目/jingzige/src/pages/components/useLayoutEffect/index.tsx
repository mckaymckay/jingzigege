import React, { useEffect, useLayoutEffect, useState } from 'react'
import Child from './child'

export default function index() {
  const [value, setValue] = useState('hello world')
  // 其实不太明白两者区别
  useEffect(() => {
    setValue('world hello')
  }, [])

  // useLayoutEffect(() => {
  //   setValue('world hello')
  // }, [])
  return (
    <div>
      <span>{value}</span>
      <Child value={value} />
    </div>
  )
}
