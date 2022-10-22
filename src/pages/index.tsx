import { useEffect, useState } from 'react';
import LineGif from '../asset/line.gif';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './index.css';

function App() {
	const [nowTimeStr, setNowTimeStr] = useState('--:--:--');
	const navigate = useNavigate();
  
	const now = new Date();
	const nowStr = format(now, 'yyyy-MM-dd');
	const updateNowStr = format(now, 'MM/dd');

	useEffect(() => {
		let timmer = setInterval(()=>{
				setNowTimeStr(format(new Date(), 'HH:mm:ss')) 
		}, 1000)
		return () => {
			clearInterval(timmer)
		}
	}, [])

  return (
    <div className="main-container">
      <div className="bg-container healthyCode-bg" />

      <div className="marqueeWrapper">
            <div className="container">
                <Marquee gradient={false} speed={100} className='moving-text'>
                    👉 重要通知：我市已不再要求全核酸，请成都各位市民请安心上班，无须再佩戴口罩进出公共场所，写字楼等。【点击查看】
                </Marquee>
            </div>
        </div>

        <div className="dateWrapper">
            <div className="container">
                <div className="time">
                    <span>{nowTimeStr}</span>
                </div>
                <div className="date">
                    <span>{nowStr}</span>
                </div>
            </div>
        </div>

        <div className='lineWrapper'>
            <img className='lineGif' src={LineGif} alt="line" />
        </div>

        <div className="proveWrapper">
            {updateNowStr}&nbsp;03
        </div>

				<div className='playGround-code' onClick={() => navigate('/palyGround')} />
				<div className='travel-report-code'>
					<div className="reportCheck" onClick={() => navigate('/report')} />
					<div className="formDom" onClick={() => navigate('/form')} />
					<div className="travelCode" onClick={() => navigate('/travelCode')} />
				</div>
    </div>
  );
}

export default App;
