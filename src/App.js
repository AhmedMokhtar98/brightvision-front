import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './auth/Login';
import Layout from './components/Layout';
import Auth from './auth/ProtectedRoute';
import Content1 from './pages/Content1';
import Content2 from './pages/Content2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            
            <Route element={<Auth allowedRoles={["admin","client"]} />}>
              <Route path='/' element={<Home/>}/>
            </Route>

            <Route element={<Auth allowedRoles={["admin","client"]} />}>
              <Route path='/content_1' element={<Content1/>}/>
            </Route>
            
            <Route element={<Auth allowedRoles={["admin"]} />}>
              <Route path='/content_2' element={<Content2/>}/>
            </Route>
            
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
