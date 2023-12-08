import React, { FC } from 'react'

interface ChildType {
  value: string | undefined
}

// 使用这种props type写法
const Child: FC<ChildType> = (props) => {
  console.log(111, props)
  const { value } = props
  return (
    <div>{value}</div>
  )
}
export default Child
