import Navbar from './componments/Navbar'; 

const click = ()=>{
  alert('Button Clicked!');
}
function App() {
  return (
    <>
      <div>
        <button onClick={click}>
          click me
        </button>
      </div>
    </>
  );
}

export default App;
