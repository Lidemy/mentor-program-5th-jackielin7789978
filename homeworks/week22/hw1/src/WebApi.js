const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = (pageNum) => {
  const data = {}
  return fetch(
    `${BASE_URL}/posts?_sort=createdAt&_order=desc&_page=${pageNum}&_limit=5`
  )
    .then((res) => {
      data.totalPosts = res.headers.get('x-total-count')
      return res.json()
    })
    .then((res) => {
      data.posts = res
      return data
    })
}

export const getSinglePost = async(id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`)
  return await res.json()
}

export const getMe = async() => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  return await res.json()
}

export const login = async(username, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  return await res.json()
}

export const register = async(username, password, nickname) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      nickname,
      username,
      password
    })
  })
  return await res.json()
}

export const publishPost = async(title, body) => {
  const token = localStorage.getItem('token')
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      body
    })
  })
  return await res.json()
}
