import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Pages/Home/Home';
import Category from './components/Pages/Category/Category';
import Header from './components/Header/Header';
import styles from './app.module.scss';
import ActionComponent from './components/ActionComponent/ActionComponent';

function App() {
    const [limit, setLimit] = useState(10);
    const handleLoadMore = () => {
        setLimit(limit + 10);
    }
  return (
      <div className={styles.wrapper}>
          <Router>
              <Header setLimit={setLimit} />
              <Routes>
                  <Route path='/' element={<Home limit={limit} />} />
                  <Route path='/home' element={<Home limit={limit} />} />
                  <Route path='/home/:categoryId' element={<Category limit={limit} />} />
                  <Route path='/*' element={ <Navigate  to={'/home'} />} />
              </Routes>
              <ActionComponent handleLoadMore={handleLoadMore}/>
          </Router>
      </div>
  );
}

export default App;
