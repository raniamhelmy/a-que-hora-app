import React,{useState,useEffect} from 'react'
import './SunRiseSet.css'

function SunRiseSet({data,timeZone}) {
    const [sunrise,setSunrise]=useState();
    const [sunset,setSunset]=useState();
    const [timeZon,setTimeZon]=useState();

    useEffect(()=>{
        setTimeZon(timeZone);
    },[timeZone])

    const get_time=(time)=>{

        var date = new Date(time * 1000);
        let localOffset = date.getTimezoneOffset() * 60000;
        let localTime = date.getTime();
        let utc = localTime + localOffset;
        var found_city = utc + (1000 * timeZon);
        let nd = new Date(found_city);
        return (nd.toLocaleTimeString('en-IT'));
    

    }

    useEffect(()=>{
        setSunrise(data.sunrise);
        setSunset(data.sunset);
      },[data]) 

    return (
        <div className='sun-container'>
            
            <div className='sun-rise-container'>
            <svg version="1.1" id="sunriseAlt" className="climacon climacon_sunriseAlt" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="15 15 70 70" enableBackground="new 15 15 70 70"
                xmlSpace="preserve">
                <clipPath id="sunriseClip">
                    <rect x="15" y="15" width="70" height="45"/>
               </clipPath>
                <g className="climacon_iconWrap climacon_iconWrap-sunriseAlt" fill="#fff">
                    <g clipPath="url(#sunriseClip)">
                        <g className="climacon_componentWrap climacon_componentWrap-sunriseAlt">
                            <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M71.997,74.002h-3.999c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h3.999c1.104,0,2,0.895,2,2C73.997,73.105,73.104,74.002,71.997,74.002z"/>
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M64.141,60.689c-0.781,0.78-2.048,0.78-2.828,0c-0.779-0.781-0.779-2.047,0-2.828l2.828-2.828c0.78-0.78,2.047-0.78,2.828,0c0.78,0.781,0.78,2.047,0,2.828L64.141,60.689z"/>
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M50,56.003c-1.104,0-1.999-0.896-1.999-2v-3.999c0-1.104,0.896-2,1.999-2s2,0.896,2,2v3.999C52,55.107,51.104,56.003,50,56.003z"/>
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M35.86,60.689l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.78,2.047-0.78,2.828,0l2.828,2.828c0.78,0.781,0.78,2.047,0,2.828C37.907,61.47,36.641,61.47,35.86,60.689z"/>
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M34.002,72.002c0,1.104-0.896,2-1.999,2h-4c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h4C33.106,70.002,34.002,70.896,34.002,72.002z"/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                d="M61.302,76h-4.381c0.683-1.176,1.078-2.539,1.078-3.998c0-4.418-3.581-8-7.999-8c-4.417,0-7.999,3.582-7.999,8c0,1.459,0.396,2.822,1.079,3.998h-4.381c-0.444-1.252-0.698-2.594-0.698-3.998c0-6.627,5.373-11.999,11.999-11.999c6.627,0,11.999,5.371,11.999,11.999C61.999,73.406,61.745,74.748,61.302,76z"/>
                            </g>
                        </g>
                    </g>
                    <g className="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                        d="M40.001,63.998h19.998c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H40.001c-1.104,0-2-0.895-2-2C38.001,64.895,38.897,63.998,40.001,63.998z"/>
                    </g>
                </g>
                    
            </svg>
                 <p className='time-text '>{get_time(sunrise)==="Invalid Date" ? ' ' :get_time(sunrise)} </p>
            </div>
            <div className='sun-set-container'>
                
             <svg version="1.1" id="sunsetAlt" className="climacon climacon_sunsetAlt" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  x="0px" y="0px"
                    viewBox="15 15 70 70" enableBackground="new 15 15 70 70" xmlSpace="preserve">
                <clipPath id="sunriseClip">
                    <rect x="15" y="15"  width="70" height="45"/>
                </clipPath>
                <g className="climacon_iconWrap climacon_iconWrap-sunsetAlt" fill="#fff">
                    <g clipPath="url(#sunriseClip)">
                        <g className="climacon_componentWrap climacon_componentWrap-sunsetAlt">
                            <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M71.997,74.002h-3.999c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h3.999c1.104,0,2,0.895,2,2C73.997,73.105,73.104,74.002,71.997,74.002z"/>
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M64.141,60.689c-0.781,0.78-2.048,0.78-2.828,0c-0.779-0.781-0.779-2.047,0-2.828l2.828-2.828c0.78-0.78,2.047-0.78,2.828,0c0.78,0.781,0.78,2.047,0,2.828L64.141,60.689z"/>
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M50,56.003c-1.104,0-1.999-0.896-1.999-2v-3.999c0-1.104,0.896-2,1.999-2s2,0.896,2,2v3.999C52,55.107,51.104,56.003,50,56.003z"/>
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M35.86,60.689l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.78,2.047-0.78,2.828,0l2.828,2.828c0.78,0.781,0.78,2.047,0,2.828C37.907,61.47,36.641,61.47,35.86,60.689z"/>
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                                d="M34.002,72.002c0,1.104-0.896,2-1.999,2h-4c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h4C33.106,70.002,34.002,70.896,34.002,72.002z"/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                                <path fill="#fff" className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                                d="M61.302,76h-4.381c0.683-1.176,1.078-2.539,1.078-3.998c0-4.418-3.581-8-7.999-8c-4.417,0-7.999,3.582-7.999,8c0,1.459,0.396,2.822,1.079,3.998h-4.381c-0.444-1.252-0.698-2.594-0.698-3.998c0-6.627,5.373-11.999,11.999-11.999c6.627,0,11.999,5.371,11.999,11.999C61.999,73.406,61.745,74.748,61.302,76z"/>
                            </g>
                        </g>
                    </g>
                    <g className="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                        d="M40.001,63.998h19.998c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H40.001c-1.104,0-2-0.895-2-2C38.001,64.895,38.897,63.998,40.001,63.998z"/>
                    </g>
                </g>
    </svg>
               
                 <p className='time-text'>{get_time(sunset)==="Invalid Date" ? ' ' : get_time(sunset)}</p>
            </div>
        </div>
    )
}

export default SunRiseSet
