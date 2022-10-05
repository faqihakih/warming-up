import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./Page/ProductList";
import ProductDetail from './Page/ProductDetail';
import 'flowbite'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/ProductDetail" element={<ProductDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
