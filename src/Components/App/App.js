import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header';
import {HomeCC, HomeFC, Setting} from '../Pages';
import { Container } from './styled'

function App() {
  return (
   <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeFC />} />
        <Route path="/HomeCC" element={< HomeCC/>} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
   </Container>
  );
}

export default App;
