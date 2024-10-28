import React, { useEffect, useRef } from 'react';
import createToggleButton from './toggleButton';

const ToggleButtonWrapper = ({ className, options }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const toggleButton = createToggleButton(options, containerRef.current);
        
        return () => {
            containerRef.current.removeChild(toggleButton.container);
        };
    }, [options]);

    return <div className={className} ref={containerRef}></div>;
};

export default ToggleButtonWrapper;
