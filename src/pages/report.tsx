import { format, subDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
    const navigate = useNavigate();

    return ( 
        <div className="main-container">
            <div className="bg-container report-bg-container"  onClick={() => navigate('/')} />
            
            <div className='report-date-one'>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 1), 'dd')} 18时</span>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 1), 'dd')} 23时</span>
            </div>

            <div className='report-date-two'>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 2), 'dd')} 10时</span>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 2), 'dd')} 22时</span>
            </div>

            <div className='report-date-three'>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 3), 'dd')} 15时</span>
                <span>{format(new Date(), 'yyyy.MM')}.{format(subDays(new Date(), 3), 'dd')} 22时</span>
            </div>
        </div>
     );
}

export default ReportPage;