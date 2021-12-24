import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Footer from './components/footer/index.jsx'
import Archive from './components/archive/index.jsx'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <Archive/>
      </div>
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
