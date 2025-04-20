import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { color } from "three/tsl";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,           
          highlightColor: 0xffffff,  
          backgroundColor: 0x000000, 
          points: 18.0,              
          maxDistance: 0.0,                    spacing: 20.0,             
          showDots: true 
          
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />
  );
};

export default VantaBackground;
