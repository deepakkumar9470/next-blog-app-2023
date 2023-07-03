"use client";
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const {data,error,isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)


  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  console.log(data)

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard