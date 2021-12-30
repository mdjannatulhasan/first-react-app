import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [{name:'Photoshop', price:'100$'}]
    return (
        <div className="App">
            <header className="App-header">
            <Person></Person>
            <Product name={products[0].name}></Product>
            </header>
            <Person></Person>
            <Product name={products[0].name}></Product>
        </div>
    );
}
function Person(){
  return(
    <div>
      <h1>Hello there</h1>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px', 
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
    </div>
  )
}
export default App;
