import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Project } from './components/Project'

import { GlobalStyle } from "./GlobalStyle"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
      <Header />
      <Profile />
      
      <hr />

      <Project />

      <hr />

      <Contact />
      <Footer />
  </React.StrictMode>
)
