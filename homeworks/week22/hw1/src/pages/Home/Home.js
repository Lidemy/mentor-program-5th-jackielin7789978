/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '../../WebApi'
import Paginator from '../../components/Paginator'
import { PageContext } from '../../context'
import {
  PostWrapper,
  CreatedAt,
  Title,
  ContentPreview,
  ReadMoreBTN
} from './styled'

function Post({ post }) {
  return (
    <PostWrapper>
      <CreatedAt>{new Date(post.createdAt).toDateString()}</CreatedAt>
      <Title to={`/posts/${post.id}`}>{post.title}</Title>
      <ContentPreview>{post.body}</ContentPreview>
      <ReadMoreBTN to={`/posts/${post.id}`}>READ MORE</ReadMoreBTN>
    </PostWrapper>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

export default function Home() {
  const [posts, setPosts] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [totalPosts, setTotalPosts] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setPosts(null)
    const fetchData = async() => {
      let data
      try {
        data = await getPosts(pageNum)
        setPosts(data.posts)
        setTotalPosts(data.totalPosts)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [pageNum])

  return (
    posts && (
      <PageContext.Provider value={{
        pageNum,
        setPageNum,
        totalPosts
      }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <Paginator />
      </PageContext.Provider>
    )
  )
}
