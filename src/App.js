import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Products from './components/products';
import Mens from "./components/Mens"
import Women from "./components/Women"
import Electronics from "./components/Electronics"
import ProductDescription from './components/productDescription';

const Layout = ({ children }) => {
  return (<>
    <Home />
    {children}
  </>)
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Products/>
          </Layout>
        </Route>
         <Route path="/mens" exact>
          <Layout>
            <Mens />
          </Layout>
        </Route>
         <Route path="/women" exact>
          <Layout>
            <Women />
          </Layout>
        </Route>
         <Route path="/electronics" exact>
          <Layout>
            <Electronics />
          </Layout>
        </Route>
        <Route path="/description:id" exact>
          <Layout>
            <ProductDescription/>
          </Layout>
        </Route>
     </Switch>
  
    </Router>
  );
}

export default App;
