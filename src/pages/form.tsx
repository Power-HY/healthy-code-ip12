import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

const Form = () => {
    const navigate = useNavigate();
    const [area, setArea] = useState('')
    const [place, setPlace] = useState('')
    const areaList = [{
            area: '锦江区',
            value: 1
        }, {
            area: '青羊区',
            value: 2
        }, {
            area: '金牛区',
            value: 3
        }, {
            area: '武侯区',
            value: 4
        }, {
            area: '成华区',
            value: 5
        }, {
            area: '龙泉驿区',
            value: 6
        }, {
            area: '新都区',
            value: 7
        }, {
            area: '郫都区',
            value: 8
        }, {
            area: '温江区',
            value: 9
        }, {
            area: '双流区',
            value: 10
        }, {
            area: '青白江区',
            value: 11
        }, {
            area: '新津区',
            value: 12
    }]

    return (
        <div className="form-container">
            <p>所在区域：</p>
            <div className='area-wrapper'>
               { areaList.map(item => <div key={item.value} className={`area-item ${area === item.area && 'area-item-active'}`} onClick={()=> setArea(item.area)}>{item.area}</div>)} 
            </div>

            <p>所在地名：</p>
            <input type="text" style={{ paddingLeft: '5px' }} placeholder="请输入所在地" onChange={(e) => setPlace(e.target.value)} />
            <br />
            <button 
                style={{marginTop: 12, lineHeight: 3 }} 
                onClick={() => {
                    window.sessionStorage.setItem('area', area)
                    window.sessionStorage.setItem('place', place)
                    navigate('/')
                }}
            >提交</button>
        </div>
    );
}

export default Form;
