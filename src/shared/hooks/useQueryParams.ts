import { useEffect, useState } from 'react';

function useQueryParams() {
  const [ query, setQuery ] = useState<URLSearchParams>();

  const windowFallback = {
    location: {
      href: '',
    },
  };
  const _window = typeof window === 'undefined' ? windowFallback : window;

  useEffect(() => {
    const currentURL = new URL(_window.location.href);
    const params = currentURL.searchParams;

    setQuery(params);
  }, [ _window.location ]);

  return query;
}

export default useQueryParams;