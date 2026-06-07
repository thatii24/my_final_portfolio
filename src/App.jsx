import React, { useEffect, useState } from "react";
import "./App.css";

const imgImg20251102Wa00292 = "/assets/img2025.png";
const imgEllipse1 = "/assets/ellipse.svg";
const imgEllipse2 = "/assets/ellipse.svg";

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
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }} className="app-container">
      <div className="hero-wrapper" data-name="hero">
        <div className="hero-section" data-name="hero section">
          
          <div className="nav-menu" data-name="Navigation menu">
            <p>Featured Projects </p>
            <p>About Me</p>
            <p>Skills</p>
            <p>Showreel</p>
            <p>Contact Us</p>
          </div>
          
          <div className="main-content-bg" data-name="Main content background" />
          
          <div className="ellipse-1-container">
            <div className="ellipse-inner" style={{ transform: "rotate(124.82deg)" }}>
              <img alt="" className="ellipse-img" src={imgEllipse1} />
            </div>
          </div>
          
          <div className="ellipse-2-container">
            <div className="ellipse-inner" style={{ transform: "rotate(81.06deg)" }}>
              <img alt="" className="ellipse-img" src={imgEllipse2} />
            </div>
          </div>
        </div>
        
        <p className="portfolio-text t1">Portfolio </p>
        <p className="portfolio-text t2">Portfolio </p>
        <p className="portfolio-text t3">Portfolio </p>
        
        <div className="main-image-container" data-name="IMG-20251102-WA0029 2">
          <img alt="Hero Profile" className="main-image" src={imgImg20251102Wa00292} />
        </div>
        
        <p className="portfolio-text-transparent t1">Portfolio </p>
        <p className="portfolio-text-transparent t2">Portfolio </p>
        <p className="portfolio-text-transparent t3">Portfolio </p>
        
        <div className="ui-ux-web">
          <p>UI</p>
          <p>UX</p>
          <p>web </p>
        </div>
        
        <div className="stats-container" data-name="Stats container">
          <div className="stats-bg" data-name="Stats background" />
          
          <div className="progress-container" data-name="Progress bars container">
            <div className="progress-wrapper">
              <div className="progress-track" />
              <div className="progress-fill" style={{ width: "191px" }} />
            </div>
            
            <div className="progress-wrapper">
              <div className="progress-track" />
              <div className="progress-fill" style={{ width: "68px" }} />
            </div>
            
            <div className="progress-wrapper">
              <div className="progress-track" />
              <div className="progress-fill" style={{ width: "147px" }} />
            </div>
            
            <div className="progress-wrapper">
              <div className="progress-track" />
              <div className="progress-fill" style={{ width: "283px" }} />
            </div>
          </div>
          
          <p className="stat-number" style={{ left: "578px", top: "1362px" }}>15+</p>
          <p className="stat-number" style={{ left: "926px", top: "1365px" }}>5+</p>
          <p className="stat-number" style={{ left: "1239px", top: "1365px" }}>3+</p>
          <p className="stat-number" style={{ left: "1557px", top: "1365px", fontVariationSettings: '"CTGR" 0, "wdth" 100', fontWeight: 'normal' }}>100+ </p>
          
          <p className="stat-label" style={{ left: "578px", top: "1420px" }}>Projects</p>
          <p className="stat-label" style={{ left: "926px", top: "1423px" }}>Hackathons</p>
          <p className="stat-label" style={{ left: "1239px", top: "1423px", fontVariationSettings: '"CTGR" 0, "wdth" 100', fontWeight: 'normal' }}>Creative Fields </p>
          <p className="stat-label" style={{ left: "1557px", top: "1423px" }}>Design Assets Created</p>
        </div>
      </div>
    </div>
  );
}
