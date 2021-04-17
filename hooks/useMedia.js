import { useState, useEffect } from 'react';

export default function useMedia(query) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query])

  return matches;
}
