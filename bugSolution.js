```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if the current route is already '/' before pushing
    if (router.pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}
```