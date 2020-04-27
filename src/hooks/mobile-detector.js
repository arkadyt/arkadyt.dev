import { useState, useEffect } from 'react';

export const useMobileDetector = () => {
  const mQ = window.matchMedia("(orientation: portrait)");
  const [ isMobile, setMobile ] = useState(mQ.matches);

  useEffect(() => {
    const handleChange = e => setMobile(e.matches);
    mQ.addListener(handleChange);
    return () => mQ.removeListener(handleChange);
  }, []);

  return isMobile;
};
