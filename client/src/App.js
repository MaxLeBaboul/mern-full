import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {useAppContext} from "./context" 
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Single from "./pages/Single"


function App() {
  const {fetchPosts} = useAppContext()
  useEffect(() =>{
    fetchPosts()
  }, [])
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:title" element={<Single />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
