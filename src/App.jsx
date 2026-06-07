import React, { useEffect, useState } from "react";
const imgImg20251102Wa00292 = "/assets/img2025.png";
const imgEllipse1 = "/assets/ellipse.svg";

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const zoom = windowWidth / 1920;
      setScale(zoom);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: '1920px', height: '1080px', overflow: 'visible' }}>
      <div style={{ backgroundColor: "white", position: "relative", width: "1920px", height: "2200px", margin: "0 auto", overflow: "hidden" }} data-name="Desktop - 1">
        <div style={{ position: "absolute", height: "1080px", left: "0", borderRadius: "70px", top: "1px", width: "1920px", backgroundImage: "linear-gradient(111.922deg, rgb(17, 18, 13) 35.526%, rgb(255, 251, 244) 56.678%, rgb(86, 84, 73) 72.949%, rgb(216, 207, 188) 91.931%)" }} data-name="hero section">
        <div style={{ position: "absolute", display: "flex", height: "1100px", alignItems: "center", justifyContent: "center", left: "calc(25% + 31px)", top: "-20px", width: "957px" }}>
          <div style={{ transform: "rotate(-90deg)", flex: "none" }}>
            <div style={{ height: "957px", position: "relative", width: "1100px" }}>
              <img alt="" src={imgEllipse1} style={{ position: "absolute", display: "block", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", height: "1080px", left: 0, borderRadius: "70px", top: 0, width: "1920px", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(5.8783e-15 54 -96 3.3065e-15 960 540)'><stop stop-color='rgba(255,251,244,0.98)' offset='0'/><stop stop-color='rgba(216,207,188,0.83)' offset='0.23077'/><stop stop-color='rgba(184,176,159,0.855)' offset='0.32332'/><stop stop-color='rgba(151,146,131,0.88)' offset='0.41587'/><stop stop-color='rgba(119,115,102,0.905)' offset='0.50841'/><stop stop-color='rgba(86,84,73,0.93)' offset='0.60096'/><stop stop-color='rgba(52,51,43,0.865)' offset='0.80048'/><stop stop-color='rgba(34,35,28,0.8325)' offset='0.90024'/><stop stop-color='rgba(17,18,13,0.8)' offset='1'/></radialGradient></defs></svg>\")" }} />
        <p style={{ wordBreak: "break-word", position: "absolute", fontFamily: "\"Logirent\", sans-serif", lineHeight: "normal", left: "127px", fontStyle: "normal", color: "#fffbf4", fontSize: "293px", top: "306px", whiteSpace: "nowrap", margin: 0 }}>Portfolio</p>
        <div style={{ position: "absolute", backgroundColor: "rgba(217,217,217,0.06)", height: "100px", left: 0, borderTopLeftRadius: "70px", borderTopRightRadius: "70px", top: "-11px", width: "1920px" }} />
        <div style={{ wordBreak: "break-word", position: "absolute", alignContent: "stretch", display: "flex", fontFamily: "\"Koulen\", sans-serif", gap: "75px", alignItems: "center", lineHeight: "normal", left: "calc(25% + 149px)", fontStyle: "normal", fontSize: "20px", color: "white", top: "28px", whiteSpace: "nowrap" }}>
          <p style={{ position: "relative", flexShrink: 0, margin: 0 }}>Featured Projects</p>
          <p style={{ position: "relative", flexShrink: 0, margin: 0 }}>About Me</p>
          <p style={{ position: "relative", flexShrink: 0, margin: 0 }}>Skills</p>
          <p style={{ position: "relative", flexShrink: 0, margin: 0 }}>Showreel</p>
          <p style={{ position: "relative", flexShrink: 0, margin: 0 }}>Contact Us</p>
        </div>
      </div>
      <div style={{ position: "absolute", height: "1080px", left: 0, overflow: "clip", top: "1081px", width: "1920px" }} data-name="about section">
        <div style={{ position: "absolute", height: "1080px", left: 0, mixBlendMode: "multiply", borderRadius: "70px", top: 0, width: "1920px", backgroundImage: "linear-gradient(120.878deg, rgba(86, 84, 73, 0.78) 0%, rgb(255, 251, 244) 39.125%, rgba(255, 251, 244, 0.68) 72.645%, rgba(86, 84, 73, 0.78) 102.99%)" }} />
      </div>
      <div style={{ position: "absolute", height: "1121px", left: "96px", top: "-40px", width: "1508px" }} data-name="IMG-20251102-WA0029 2">
        <img alt="" src={imgImg20251102Wa00292} style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, maxWidth: "none", objectPosition: "bottom", pointerEvents: "none", width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
    </div>
  );
}
