'use client'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './index.module.less'

interface IProps {
  children: React.ReactNode
  curActive: string
  defaultOpen?: string[]
}

const CommonLayout: React.FC<IProps> = ({ children, curActive, defaultOpen = ['/'] }) => {
  return (
    <>
      <Header />
      <div className="px-6 py-6 text-gray-400 min-h-full">{children}</div>
      <Footer />
    </>
  )
}

export default CommonLayout
