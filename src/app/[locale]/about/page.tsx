'use client'

import { useState, useRef, useEffect } from 'react'
import axios from '@/lib/axios'
import Layout from '@/components/Layout'

export default function About() {
  useEffect(() => {
    axios.get('/v1/user/base').then((res) => {
      console.log(res)
    })
    axios.get('/news').then((res) => {
      console.log(res)
    })
  }, [])
  return <Layout curActive="about">about</Layout>
}
