import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const TravelCodePage = () => {
    const navigate = useNavigate();

    return ( 
        <div className="main-container">
            <div className="bg-container travel-bg-container"  onClick={() => navigate('/')} />
            
            <div className='travel-date'>{format(new Date(), 'yyyy.MM.dd HH:mm:ss')}</div>
        </div>
     );
}

export default TravelCodePage;