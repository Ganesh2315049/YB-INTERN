import React, { useState } from 'react';
import Page1 from './1page.jsx';
import Page2 from './2page.jsx';
import Page3 from './3page.jsx';

const App = () => {
  const [name, setName] = useState("Ganesh B");
  const [degree, setDegree] = useState("Bachelor of Information Technology");
  const [gmail, setGmail] = useState("2315049@nec.edu.in");

  return (
    <div>
      <h1>Welcome to the Application</h1>
      <Page1 name={name} degree={degree} gmail={gmail} />
      <Page2 />
      <Page3 setName={setName} setDegree={setDegree} setGmail={setGmail} />
    </div>
  );
}
export default App;




