import React from 'react'

export default function MyChildren({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return (
    <div>
      <input type="text" value={value} onChange={(e: any) => {
        onChange(e.target.value)
      }} />
    </div>
  )
}
