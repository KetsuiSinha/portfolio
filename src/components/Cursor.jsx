import { useState, useEffect, useCallback } from 'react';

const FluidCursor = () => {
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMainCursor({ x: e.clientX, y: e.clientY });
    });
  }, []);

  // Animate dot in circular motion
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle(prev => (prev + 0.1) % (2 * Math.PI));
    }, 1000 / 60);
    
    return () => clearInterval(intervalId);
  }, []);

  // Handle interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.matches('button, a, input, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches('button, a, input, [role="button"]')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  // Calculate dimensions
  const ringSize = isHovering ? 40 : 24;
  const dotSize = 2;
  const radius = (ringSize / 2) - (dotSize / 2);
  const dotX = mainCursor.x + Math.cos(angle) * radius;
  const dotY = mainCursor.y + Math.sin(angle) * radius;

  return (
    <>
      <style>
        {`
          * {
            cursor: none !important;
          }
          
          .cursor-main {
            background: rgb(255, 255, 255);
            mix-blend-mode: difference;
          }
          
          .cursor-ring {
            border: 2px solid rgb(180, 181, 183);
            background: transparent;
          }
        `}
      </style>
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Ring cursor */}
        <div
          className="cursor-ring fixed rounded-full will-change-transform"
          style={{
            width: `${ringSize}px`,
            height: `${ringSize}px`,
            transform: `translate(${mainCursor.x - ringSize/2}px, ${mainCursor.y - ringSize/2}px) scale(${isClicked ? 1.2 : 1})`,
            transition: 'width 0.3s, height 0.3s'
          }}
        />
        
        {/* Center dot cursor */}
        <div
          className="cursor-main fixed w-1 h-1 rounded-full will-change-transform"
          style={{
            transform: `translate(${mainCursor.x - 0.5}px, ${mainCursor.y - 0.5}px) scale(${isClicked ? 0.5 : 1})`,
            transition: 'transform 0.1s'
          }}
        />
        
        {/* Orbiting dot cursor */}
        <div
          className="cursor-main fixed rounded-full will-change-transform"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            transform: `translate(${dotX - dotSize/2}px, ${dotY - dotSize/2}px) scale(${isClicked ? 0.5 : 1})`,
            transition: 'transform 0.1s'
          }}
        />
      </div>
    </>
  );
};

export default FluidCursor;