import Hello from './components/Hello';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css'
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import WikiSearch from './components/WikiSearch';
import AddProduct from './components/AddProduct';

function App() {
  return (

    <Router>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <AppHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 jumbotron">
            <h2>React Training Application</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                {/* <Route path="/" exact component={Hello}/>
                <Route path="/counter" component={Counter}/> */}

                <Route path="/" exact render={() => <Hello message="This is a simple functional component"/>}/>
                <Route path="/counter" render={() => <Counter message="This is a simple class component"/>}/> 
                <Route path="/products" component={ListProducts}/>  
                <Route path="/search" component={WikiSearch}/>  
                <Route path="/addProduct" component={AddProduct}/>     
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
