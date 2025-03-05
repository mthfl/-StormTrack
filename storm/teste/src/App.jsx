import React from 'react';
import Section1 from './section1.jsx';
import Section2 from './section2.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="flex flex-col"> 
      <Section1 />
      <Section2 />
      <Footer/>
    </div>
  );
}

export default App;