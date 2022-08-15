import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav.js'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <h1> Welcome to Next.js Sample </h1>
      <p> Developed By <a href="https://www.furqanhussain.com"> Furqan Hussain </a> </p>

      <b>Contact Me:</b>
      <p>
        <a href="https://www.furqanhussain.com"> 
          https://www.furqanhussain.com
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/furqan2hussain/"> 
          https://www.linkedin.com/in/furqan2hussain/
        </a>
      </p>
      <a href="https://github.com/Furqan2dubai"> 
        https://github.com/Furqan2dubai
      </a>
    </div>
  )
}
