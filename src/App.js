import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/Wrapper'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About';
function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
       </Wrapper>
     </div>
   </Router>
  );
}

export default App;
