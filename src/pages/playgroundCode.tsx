import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const PlayGroundCodePage = () =>  {
	const navigate = useNavigate();
	const now = new Date();
	const updateNowStr = format(now, 'MM/dd');
	const [nowTimeStr, setNowTimeStr] = useState('--:--:--');
    
	useEffect(() => {
		let timmer = setInterval(()=>{
            setNowTimeStr(format(new Date(), 'yyyy-MM-dd HH:mm:ss')) 
		}, 1000)
		return () => {
			clearInterval(timmer)
		}
	}, [])

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

            <div className="pg-proveWrapper">
                {updateNowStr}&nbsp;03
            </div>

            <div className='date-wrapper'>
                <span>{nowTimeStr}</span>
            </div>
        </div>
     );
}

export default PlayGroundCodePage;