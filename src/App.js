import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar /> {/* Sidebar fixed on the left */}
      <div style={{ flex: 1 }}>
        <Header /> {/* Main content starts with Header */}
        <MainContent /> {/* Main dashboard content */}
      </div>
    </div>
  );
}

export default App;
