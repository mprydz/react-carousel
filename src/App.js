import React from 'react';
import Section from './Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import data from './data.json';


function App() {
  return (
    <>
      <Section data={data[0]} button={true} image={"img-right"} key={0} />
      <Section data={data[1]} button={false} image={"img-left"} color={"text-primary"} key={1} />
    </>
  );
}

export default App;
