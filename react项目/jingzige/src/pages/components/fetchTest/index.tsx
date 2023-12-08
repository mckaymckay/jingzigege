import React, { useEffect } from 'react'


export default function index() {
  useEffect(() => {
    fetchList()
  })
  const fetchList = async () => {
    const res = await fetch('http://example.com/movies.json')
    return res.json()
  }
  return (
    <div>index</div>
  )
}
