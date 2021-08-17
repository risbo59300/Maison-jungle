import './App.css';
import Banner from './Banner';
import Cart from './Cart';
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList';
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
  return (
    <div className="App">
     <Banner>
        <img src = {logo} alt = "La maison jungle" className = 'lmj-logo' />
        <h1 className = 'lmj-title'>La maison jungle</h1>
     </Banner>
     <div className = 'lmj-layout-inner'>
        <Cart /> 
        <ShoppingList/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
