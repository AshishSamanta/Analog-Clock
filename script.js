setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation= 30*htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;

    hourhand.style.transform =`rotate(${hrotation}deg)`;
    minhand.style.transform =`rotate(${mrotation}deg)`;
    sechand.style.transform =`rotate(${srotation}deg)`;
},1000);