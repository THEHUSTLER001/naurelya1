import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    if (options.unobserve !== false) {
                        observer.unobserve(entry.target);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '50px',
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options.rootMargin, options.threshold, options.unobserve]);

    return ref;
};
