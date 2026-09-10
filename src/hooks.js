import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

/* Router navigations don't move the viewport on their own. Jump to a hash
   target when there is one, otherwise return to the top on a route change. */
export function useScrollBehaviour() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView({ block: 'start' });
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);
}
