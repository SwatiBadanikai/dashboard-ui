
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/sidebar';
function App() {
  return (
    <>
    <div class='container'>
    <Sidebar/>
    <div>
    <Header/>
    <MainContent/>
    </div>
      
    </div>
    </>
  );
}

export default App;
