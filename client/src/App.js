import './App.css';
import './lib/font-awesome/css/all.min.css';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <div className='search'>
        <h1>Search Github Users</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
