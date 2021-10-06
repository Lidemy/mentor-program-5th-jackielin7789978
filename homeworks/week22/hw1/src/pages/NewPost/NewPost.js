/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { publishPost } from '../../WebApi'
import { ERR } from '../../components/general'
import { AuthContext } from '../../context'
import {
  PageWrapper,
  EditorWrapper,
  PageTitle,
  TitleInput,
  Editor,
  SubmitBTN
} from './styled'

export default function NewPost() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const history = useHistory()
  const { user } = useContext(AuthContext)

  const handleNewPost = (e) => {
    e.preventDefault()
    if (!title || !content) {
      return setErrMsg('請填寫所有欄位')
    }
    const asyncPubish = async() => {
      let res
      try {
        res = await publishPost(title, content)
        if (res.ok === 0) return setErrMsg(res.message)
        setTitle('')
        setContent('')
        history.push('./')
      } catch (e) {
        console.log(e)
      }
    }
    asyncPubish()
  }

  useEffect(() => {
    if (!user) {
      history.push('./')
    }
  })
  return (
    <PageWrapper>
      <EditorWrapper>
        <PageTitle>新文章</PageTitle>
        <TitleInput
          placeholder='請輸入文章標題'
          value={title}
          onChange={(e) => {
            setErrMsg('')
            setTitle(e.target.value)
          }}
        />
        <Editor
          placeholder='請輸入文章內容...'
          onChange={(e) => {
            setErrMsg('')
            setContent(e.target.value)
          }}
        />
        {errMsg && <ERR>ERROR: {errMsg}</ERR>}
        <SubmitBTN onClick={handleNewPost}>送出文章</SubmitBTN>
      </EditorWrapper>
    </PageWrapper>
  )
}
