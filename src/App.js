
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMneu from './SideMneu';
function App() {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <Post />
        <SideMneu />

      </div>
    </div>
  );
}



export default App;
