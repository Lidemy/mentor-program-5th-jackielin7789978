/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState, useEffect, useContext } from 'react'
import { getSinglePost } from '../../WebApi'
import { PostWrapper, CreatedAt, Title, Content } from './styled'
import { LoadingContext } from '../../context'

function PostItem({ post }) {
  return (
    <PostWrapper>
      <CreatedAt>{new Date(post.createdAt).toDateString()}</CreatedAt>
      <Title>{post.title}</Title>
      <Content>{post.body}</Content>
    </PostWrapper>
  )
}

PostItem.propTypes = {
  post: PropTypes.object
}

export default function Post() {
  const [post, setPost] = useState([])
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { id } = useParams()

  useEffect(() => {
    const asyncGetPost = async() => {
      setIsLoading(true)
      let data
      try {
        data = await getSinglePost(id)
        setIsLoading(false)
        setPost(data)
      } catch (e) {
        console.log(e)
      }
    }
    asyncGetPost()
  }, [id, setIsLoading])

  return !isLoading && <PostItem post={post} />
}
