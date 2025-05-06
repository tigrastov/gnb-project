
import './OurWorks.css'
import { useNavigate } from 'react-router-dom';



function OurWorks() {
const navigate = useNavigate();


    return (
      <div className="our-works">

<button className="equipment-button" onClick={() => navigate('/equipment')}>
  <i className="fas fa-truck-pickup" style={{marginRight: '10px'}}></i>
  Парк техники
</button>


      </div>

      
    );
  }
  
  export default OurWorks;