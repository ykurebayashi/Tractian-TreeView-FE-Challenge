import { useEffect, useState } from "react";

export const useMobileInfo = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleChange = () => setIsMobile(mediaQuery.matches);
  
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
  
    return {isMobile};
}