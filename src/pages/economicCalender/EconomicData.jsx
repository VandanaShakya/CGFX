import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Clear the container to prevent duplicate widgets on re-renders
    if (container.current) {
      container.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    
    // Configuration to match the professional calendar layout
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "isTransparent": false,
      "width": "100%",        
      "height": "600",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "countryFilter": "us,eu,gb,jp,ca,au", 
      "currencyFilter": "USD,EUR,GBP,JPY"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "40px auto", fontFamily: 'Trebuchet MS, Roboto, sans-serif' }}>
      
      {/* --- New Content Section --- */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: '#131722', 
          marginBottom: '16px' 
        }}>
          Track Key Economic Drivers
        </h2>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.6', 
          color: '#4a4e5a', 
          textAlign: 'justify' 
        }}>
          Sometimes, a single headline can shift the market. If you're trading without knowing what's on the horizon, 
          you're working with a blind spot. The SGFX world economic calendar lays out the major events you need to 
          see before they make waves. Every data point is listed with forecast, previous figures, and impact level. 
          Whether you’re waiting for volatility or trying to avoid it, this calendar helps you plan with purpose. 
          For traders who like to think a few moves ahead, this economic calendar will help you maintain momentum.
        </p>
      </div>
      {/* --------------------------- */}

      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright" style={{ marginTop: '10px' }}>
          <a href="https://www.tradingview.com/markets/economic-calendar/" rel="noopener nofollow" target="_blank">
            <span className="blue-text" style={{ color: '#2962FF' }}>Economic Calendar</span>
          </a> by TradingView
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget); 