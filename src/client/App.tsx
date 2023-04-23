import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Header from "./components/Header";
import { ContextWrapper } from "./Context";

export const App = () => {
  return (
    <ContextWrapper>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/contacts" element={<p>contacts</p>}/>
      <Route path="/about" element={<p>about</p>}/>
      </Routes>
    </ContextWrapper>
  );
};

export default App;
