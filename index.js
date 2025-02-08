```javascript
// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}

export { getStaticProps } from './api/getStaticProps';
```
No changes are needed in `pages/index.js` or `pages/about.js` for this solution.