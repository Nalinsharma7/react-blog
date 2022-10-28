import { Routes, Route } from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from './index'
// import Navbar from './Navbar'


function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post/:postID' element={<PostDetail />} />
        <Route exact path='/create-Post' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
