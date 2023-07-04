"use client";
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import Image from 'next/image';

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const {data,error,isLoading,mutate} = useSWR('http://localhost:3000/api/posts', fetcher)

  const handlePostAdd = async (e) =>{
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username : 'deepak'
        }),
      });
      mutate()
      console.log(res)
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }

  const handlePostDelete = async (id) =>{
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.posts}>
          {
          data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="" width={300} height={200} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handlePostDelete(post._id)}
              >
                X
              </span>
            </div>
          ))} 
        </div>
        <form className={styles.new} onSubmit={handlePostAdd}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
  )
}

export default Dashboard