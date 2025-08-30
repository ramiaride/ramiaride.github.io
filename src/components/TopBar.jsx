import './styles/Topbar.css';
import logo from '/assets/logo.png'
import { useNavigate } from 'react-router-dom';



function Topbar() {
  const navigate = useNavigate();
   const handleMenuClick = () => {
    console.log('Menu clicked!');
    // Here you can toggle a menu open/close
  };
  return (
    <div className="topbar">
    
      <div className="logo">
        <img className='logo'  onClick={() => navigate('/')}  src={logo}></img>
      </div>
  
    </div>
  );
}

export default Topbar;
