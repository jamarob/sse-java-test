import { useEffect, useState } from 'react'
import styled from 'styled-components'

function App() {
  const [messages, setMessages] = useState()

  useEffect(() => {
    setMessages((messages) => ['establishing sse connection'])
    const sse = new EventSource('/sse')
    sse.onmessage = (event) =>
      setMessages((messages) => [...messages, event.data])
  }, [])

  return (
    <Layout>
      <h1>SSE demo</h1>
      {messages?.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </Layout>
  )
}

export default App

const Layout = styled.main`
  height: 100vh;
  padding: 24px;
`
