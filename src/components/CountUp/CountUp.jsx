'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ targetNumber = 100, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * targetNumber);
                setCount(value);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [inView, hasStarted, duration, targetNumber]);

    return (
        <span ref={ref} style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {count}
        </span>
    );
};

export default CountUp;
