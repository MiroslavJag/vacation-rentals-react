import React from 'react';
import './App.css';
import RentalList from './components/RentalList'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <RentalList />
      </Layout>
    </div>
  );
}

export default App;
