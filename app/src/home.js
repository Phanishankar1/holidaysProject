import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const b=useNavigate();
  function get1()
{
  b('/items')
}
  // const a = useNavigate();

  // function get() {
  //   return a('/success');
  // }
  return (
    <div id="d1">
      <h1 id="g">WELCOME TO ICE CREAM PARLAR</h1>
      <h4 id="o"><q>Life is like an ice cream. Enjoy it before it melts</q></h4>
      <div id="a1">
      </div>
      <div id="a2">
      </div>
      <div id="a5"><button onClick={get1}id="homebutton">Buy Now</button></div>
      <div id="a3">
      </div>
      <div id="a4">
      </div>
      </div>
  )
}

export default Home;
