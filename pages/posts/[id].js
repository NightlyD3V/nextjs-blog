import Layout from '../../components/layout'
import utilStyles from '../../components/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
    return (
      <Layout>
          <head>
            <title>{postData.title}</title>
          </head>
          <article>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br />
                <Date dateString={postData.date} />
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
      </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }