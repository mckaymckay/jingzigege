
/**
 * 模拟一个筛选项搜索以及表格展示列表
 */
import React from 'react'
import ContextHandler from './contextHandler'
import SearchItems from './searchItems'
import TableData from './tableData'

export default function index() {

  return (
    <div>
      <ContextHandler>
        <SearchItems></SearchItems>
        <TableData></TableData>
      </ContextHandler>

    </div>
  )
}
