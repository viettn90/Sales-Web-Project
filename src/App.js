import './App.css';
import Header from './components/Header'
import ProductList from "./components/ProductList";
import ProductInfo from "./components/ProductInfo";
import MyCart from "./components/MyCart";


import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductInfo} />
          <Route path="/myCart" component={MyCart} />

        </div>
      </Router>
    </BrowserRouter>
    
    
  );
}

export default App;
