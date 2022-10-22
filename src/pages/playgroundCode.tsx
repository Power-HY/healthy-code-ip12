import successImg from '../asset/success.png'
import { useNavigate } from 'react-router-dom';

const PlayGroundCodePage = () =>  {
	const navigate = useNavigate();

    return ( 
        <div className="main-container">
            <div className="bg-container playground-bg-container" onClick={() => navigate('/')} />

            <div className="text-container">
                <div className='text-wrapper'>
                    <div className='header-tile'>{ window.sessionStorage.getItem('place') || '新发展国际大厦' }</div>
                    <div className='other'>其他</div>
                    <div className='sub-title'>四川省/成都市/{ window.sessionStorage.getItem('area') || '新发展国际大厦' }</div>
                    <div className='location'>成都市{ window.sessionStorage.getItem('area') || '新发展国际大厦' }盛和一路132号</div>
                </div>
            </div>
            
            <div className='img-wrapper success-icon-wrapper'>
                <img src={successImg} alt="playground" />
            </div>
        </div>
     );
}

export default PlayGroundCodePage;