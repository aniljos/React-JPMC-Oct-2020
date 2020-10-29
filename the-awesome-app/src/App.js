import Hello from './components/Hello';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListProducts from './components/ListProducts';
//import ListProducts from './components/hooks/ListProducts';
import WikiSearch from './components/WikiSearch';
import AddProduct from './components/AddProduct';
import WikiSearchExt from './components/WikiSearchExt';
import UseCallbackDemo from './components/UseCallbackDemo';
import UseMemoDemo from './components/UseMemoDemo';
import Shopping from './components/Shopping';
import Login from './components/Login';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';



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
                <Route path="/searchext" component={WikiSearchExt}/>  
                <Route path="/addProduct" component={AddProduct}/> 
                <Route path="/callback" component={UseCallbackDemo}/>  
                <Route path="/memo" component={UseMemoDemo}/>  
                {/* <Route path="/shopping" component={Shopping}/>  */}
                <ProtectedRoute path="/shopping" component={Shopping}/>
           
                <Route path="/login" component={Login}/>   
                    
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
