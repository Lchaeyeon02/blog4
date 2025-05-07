import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Button from './jsx/Button.jsx'
import TextInput from './jsx/TextInput.jsx'
import PostItem from './jsx/PostItem.jsx'
import CommentItem from './jsx/CommentItem.jsx'
import PostContainer from './jsx/PostContainer.jsx'

import PostList from "./jsx/PostList.jsx";
import MainPage from "./jsx/MainPage.jsx";
import PostWritePage from "./jsx/PostWritePage.jsx";
import CommentList from './jsx/CommentList.jsx'
import PostViewPage from './jsx/PostViewPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<MainPage/>}></Route>
      <Route path="main" element={<MainPage/>}></Route>
      <Route path='write' element={<PostWritePage/>}></Route>
      <Route path='post/:id' element={<PostViewPage/>}></Route>
    </Routes>
  </BrowserRouter>
)
