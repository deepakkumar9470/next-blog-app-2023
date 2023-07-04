import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'
export const metadata = {
  title: 'NexJS Blog Contact',
  description: 'This is Contact Page',
}
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
    
    <div className={styles.content}>
         <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true}
          alt="contact" className={styles.image}/>
         </div>
         <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Enter name"/>
          <input type="text" className={styles.input} placeholder="Enter email"/>
          <textarea  
           col="30" row="10" type="text"
           className={styles.textArea} placeholder="Enter message"/>
           <Button url="#" text="Send"/>
         </form>
    </div>
    </div>
  )
}

export default Contact