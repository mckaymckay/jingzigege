import React, { createContext, useReducer } from 'react'

interface SearchParamsType {
  cityId: number | undefined
}

const initialParams: SearchParamsType = {
  cityId: undefined
}

export const RoomContext = createContext({
  searchParams: initialParams,
  dispatch: (params: SearchParamsType) => { }
})

// 定义Reducer -- 作用：修改searchParams
export const RoomReducer = (state: any, action: SearchParamsType) => {
  return action
}

export default function ContextHandler({ children }: any) {
  // 定义Reducer：定义state，以及改变state，使用useState也可
  const [values, dispatch] = useReducer(RoomReducer, initialParams)
  return (
    <div>
      {/* 给子组件使用searchParams以及改变searchParams的能力 */}
      <RoomContext.Provider value={{ searchParams: values, dispatch }}>
        {children}
      </RoomContext.Provider>

    </div>
  )
}
