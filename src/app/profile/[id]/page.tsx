import React from 'react'

export default function page({params}: {params: {id:string}}) {
  return (
    <section>Profile {params.id}</section>
  )
}
