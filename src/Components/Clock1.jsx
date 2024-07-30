import React from 'react'
import './style.css'
import { useEffect } from 'preact/hooks';
import  './Clock.png'
import './Empty.png'
import './Green.jpg'


const Clock1 = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      const htime = d.getHours();
      const mtime = d.getMinutes();
      const stime = d.getSeconds();
      const hrotation = 30 * htime + mtime / 2;
      const mrotation = 6 * mtime;
      const srotation = 6 * stime;

      document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
      document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
      document.getElementById('second').style.transform = `rotate(${srotation}deg)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <body>
    <div id="clockContainer">
        <div id="circle"></div>
        <div id="hour"> </div>
        <div id="minute"></div>
        <div id="second"> </div>
    </div>
    </body>
  )
}

export default Clock1