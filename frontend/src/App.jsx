import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Discussion from './pages/Discussion';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discussion/:id" element={<Discussion />} />
      </Routes>

    </div>
  );
}

export default App;

