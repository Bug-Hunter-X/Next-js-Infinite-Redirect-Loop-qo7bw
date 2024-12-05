```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite redirect loop if the current route is already '/'
    router.push('/');
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}
```