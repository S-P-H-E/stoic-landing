"use client"
import React, { useEffect, useRef } from 'react';

interface VideoProps {
    src: string;
}

export default function Video({ src }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      if (!canvas || !video) return; // Exit if canvas or video is not available
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return; // Exit if context is not available
  
      const getDominantColor = (data: Uint8ClampedArray) => {
        let r = 0, g = 0, b = 0;
  
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
  
        r /= (data.length / 4);
        g /= (data.length / 4);
        b /= (data.length / 4);
  
        return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.2)`;
      };
  
      const updateGlowInterval = setInterval(() => {
        if (!video.paused) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const glowColor = getDominantColor(imageData.data);
          video.style.boxShadow = `0px 0px 100px ${glowColor}, 0px 0px 100px ${glowColor}`;
          video.style.borderRadius = "25px"; // Ensure boxShadow follows the borderRadius
          video.style.zIndex = "10"; // Ensure video is above other elements
          console.log(glowColor);
        }
      }, 100); // Update glow every 100ms
  
      return () => {
        clearInterval(updateGlowInterval);
      };
  
    }, [canvasRef, videoRef]);

    return (
        <>
        <div className='p-10'>
            <div style={{ width: "1000px", height: "560px", margin: "0 auto", position: "relative"}} className="video-container rounded-3xl">
                <video 
                ref={videoRef}
                src={src}
                controls
                style={{ position: "relative", width: "100%", height: "100%", borderRadius: "25px"}} 
                title="This Is The Future of Education"
                ></video>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} width="1000" height="560"></canvas> 
        </div>
        </>
    )
}
