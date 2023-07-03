import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 DeepakTV. All rights reserved.</div>
      <div  className={styles.social}>
        <Image className={styles.icon} src="/1.png"  alt="deepaktv" width={15} height={15}/>
        <Image className={styles.icon} src="/2.png"  alt="deepaktv" width={15} height={15}/>
        <Image className={styles.icon} src="/3.png"  alt="deepaktv" width={15} height={15}/>
        <Image className={styles.icon} src="/4.png"  alt="deepaktv" width={15} height={15}/>
      </div>

    </div>
  )
}

export default Footer