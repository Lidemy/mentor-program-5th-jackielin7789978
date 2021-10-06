/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/styles'
import { PageContext } from '../context'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0px;
`
const PageInfo = styled.div`
  color: ${COLOR.text_dark};
  margin: 10px 0px;
`
const PaginatorWrapper = styled.div`
  display: flex;
`
const BTN = styled.div`
  padding: 4px 8px;
  border: 1px solid ${COLOR.text_dark};
  color: ${COLOR.text_dark};
  margin: 0 4px;
  cursor: pointer;
  trainsition: all 0.2s;
  &:hover {
    background: ${COLOR.dark_primary_hover};
    border: 1px solid ${COLOR.dark_primary};
    color: ${COLOR.text_kindawhite};
  }
`
// 待優化：用 header 裡面提供的 link 實作分頁
export default function Paginator() {
  const { pageNum, setPageNum, totalPosts } = useContext(PageContext)
  let totalPages
  if (!(totalPosts % 5)) {
    totalPages = totalPosts / 5
  } else {
    totalPages = Math.floor(totalPosts / 5 + 1)
  }
  return (
    <Container>
      <PageInfo>
        第 {pageNum} 頁，共 {totalPages} 頁
      </PageInfo>
      <PaginatorWrapper>
        {pageNum !== 1 && (
          <>
            <BTN
              onClick={() => {
                setPageNum(1)
              }}
            >
              第一頁
            </BTN>
            <BTN
              onClick={() => {
                setPageNum((pageNum) => pageNum - 1)
              }}
            >
              上一頁
            </BTN>
          </>
        )}
        {pageNum !== totalPages && (
          <>
            <BTN
              onClick={() => {
                setPageNum((pageNum) => pageNum + 1)
              }}
            >
              下一頁
            </BTN>
            <BTN
              onClick={() => {
                setPageNum(totalPages)
              }}
            >
              最後一頁
            </BTN>
          </>
        )}
      </PaginatorWrapper>
    </Container>
  )
}
