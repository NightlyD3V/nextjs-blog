import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts' 
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../components/utils.module.css'
import Date from '../components/date'

function Home({ ...props }) {
  return (      
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.centerAlign}>
           Hello, I'm <b>Tyler.</b> A software engineer and web developer from New Jersey
           I hope you enjoy your stay on my blog powered by Next.js and copius amounts of caffeine.
        </p>
      </section>
      <h2 className={utilStyles.headingLg}>Blog posts</h2>
        <ul className={utilStyles.list}>
          {props.data.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
            <li className={utilStyles.listItem} key={id}>
              <a>{title}</a>
            </li>
            </Link>
          ))}
        </ul>
    </Layout>
  )
}

export default Home

export const getStaticProps = () => {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {  
      data: allPostsData
    },
    revalidate: 1,  
  }
}




