# Next.js Infinite Redirect Loop Bug

This repository demonstrates a common but subtle bug in Next.js applications: an infinite redirect loop caused by pushing to the current route using `useRouter.push()`.  The bug occurs when the component attempts to redirect to the current route, causing a continuous redirect cycle.

## Bug Description
The `MyComponent` attempts to navigate to the root path ('/') using `router.push('/')`. If the application is already at the root path, this will trigger an infinite redirect loop, leading to a poor user experience and potentially crashing the browser.

## Solution
The solution is to add a check to see if the current route is already '/' before attempting to push to it.  This prevents the infinite redirect loop by only performing the navigation when necessary.