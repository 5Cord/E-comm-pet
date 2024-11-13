import React from 'react'
import cl from './Products.module.css'
import CardPC from '../../components/cardPC/CardPC'
import CardMerch from '../../components/cardMerch/CardMerch'

export default function Products() {
  return (
    <>
      <div className={cl.container_card}>
        <CardPC />
        <CardMerch />
      </div>
    </>
  )
}
