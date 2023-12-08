import React, { Children, useEffect, cloneElement } from 'react'



const Hello = (props: any) => {
  console.log(666, props)
  return (
    <div>index</div>
  )
}

const MainContent = ({ children }: { children: any }) => {
  const newChildren = cloneElement(children, { color: 'red' })
  return <>
    {newChildren}
  </>
}

export default function APP() {
  return (
    <MainContent>
      <Hello message="Hello world!" />
    </MainContent>
  )
}
