import React,{useState,useEffect} from 'react'
import './TimeDate.css'

function TimeDate({timeZone}) {
    const [time,setTime]=useState('');
    const [date,setDate]=useState('');
    const [timeZon,setTimeZon]=useState();
    const [diff,setDiff]=useState('');
    const [analog,setAnalog]=useState(false);

    let [second, setSecond] = useState('');
    let [minute, setMinute] = useState('');
    let [hours, setHours] = useState('');

    const handleSubmet=()=>{
      setAnalog(!analog)
    }

    useEffect(()=>{
        setTimeZon(timeZone);
        
    },[timeZone])

    useEffect(()=>{
        const getClock=()=>{
            let now = new Date(); // Get current time
            let localOffset = now.getTimezoneOffset() * 60000;
            let localTime = now.getTime();
            let utc = localTime + localOffset;
            var found_city = utc + (1000 * timeZon);
            let nd = new Date(found_city);

            setSecond(nd.getSeconds());
            setMinute(nd.getMinutes());
            setHours(nd.getHours());

            setDiff((now-nd)/(60*60*1000));
            setTime(nd.toLocaleTimeString('en-IT'));
        }

        const getToday=()=>{
            let today=new Date();
            let localOffset = today.getTimezoneOffset() * 60000;
            let localTime = today.getTime();
            let utc = localTime + localOffset;
            var found_city = utc + (1000 * timeZon);
            let nd = new Date(found_city);
            setDate(nd.toDateString());
        }
        setTimeout(getClock, 1000); // Run again in 1s
        getToday();
      
        },[time])

        
    return (
        
        <div className='date-time-wrap'>
             <p className='date'>{(date ==="Invalid Date") ? ' ': date}</p>

            {analog? 
            <>
                <div className="clocKk">
                    <div className="handContainer">
                      <div className="secondHand" style={{ transform: 'rotate(' + second * 6 + 'deg)' }}></div>
                    </div>
                    <div className="handContainer">
                      <div className="minuteHand" style={{ transform: 'rotate(' + minute * 6 + 'deg)' }}></div>
                    </div>
                    <div className="handContainer">
                      <div className="hourHand" style={{ transform: 'rotate(' + 0.5 * (60 * hours + minute) + 'deg)',}}></div>
                    </div>
                </div>

            </>: <p className='time'>{ (time ==="Invalid Date") ? ' ': time}</p>}
            
        
           
            
            <hr className='border-color'/>
                <div className='summery-item'>

                    <span className='diff-imag'><img src="//c.tadst.com/gfx/n/i/wc-dff.png" alt='' width='40px' height='40px'/> </span>
                    <span className='summery-item-temp'><b style={{color:'#fff'}}>{(isNaN(diff)) ? ' ': diff > 0 ? `${Math.abs(diff)} Hours behind`: diff === 0 ? `${Math.abs(diff)} Hours` :`${Math.abs(diff)} Hours Ahead`} </b></span>
                    
                </div>
            <hr className='border-color'/>
            <button  type='submit' className='choose-button' onClick={handleSubmet} >{analog ?<i className="fas fa-digital-tachograph"></i>:<i className="fas fa-clock"></i>}</button>
        </div>
    )
}

export default TimeDate
