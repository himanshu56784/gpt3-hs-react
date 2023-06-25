import React from 'react';
import {Brand,CTA,Navbar} from './components';
import { WhatGPT3,Possibility,Header,Footer,Features,Blog } from './container';
import './App.css';

const App = () => {
  return (
    <div className="App"> 
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
      
      </div>
  )
}
export default App;