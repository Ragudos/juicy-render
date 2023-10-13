<div>
    <img src="../docs/public/icon.png" width="250" alt="vanilla-toast-logo-png">
    <br />
      <div>
        <img alt="GitHub" src="https://img.shields.io/github/license/Ragudos/vanilla-toast">
    </div>
</div>

# Vanilla Toast
A toast library for vanilla lovers :heartpulse:.

## Why vanilla toast?
Well, with all the amount of frameworks out there, it's become overwhelming. They are great tools, yes, but the abstraction is crazy and I did not get a change to learn about the lower level APIs like EventSource, Websocket, Clusters for concurrency, ArrayBuffers, etc. That's why I decided to make this toast library to make my life easier when I develop client-side apps with Vanilla JavaScript. Besides, I will be able to freely explore Vanilla JS and understand how libraries like React work under the hood in a clearer view.

## Features
- Dependency Free
- Follows the ARIA Conventions as much as possible
- Stackable toasts
- Smooth movements

## Showcase

A video of showing how the toasts are rendered:

- neutral:

<img src="../docs/public/white-toast.png" width="250" alt="vanilla-toast-logo-png">

- success:

<img src="../docs/public/success-toast-plain.png" width="250" alt="success-toast-glass-png">
<br />
<img src="../docs/public/success-toast-glass.png" width="250" alt="success-toast-plain-png">
<br />
<img src="../docs/public/success-toast-icons.png" width="250" alt="success-toast-icons-png">
<br />

- error:

<img src="../docs/public/error-toast-plain.png" width="250" alt="error-toast-glass-png">
<br />
<img src="../docs/public/error-toast-glass.png" width="250" alt="error-toast-plain-png">
<br />
<img src="../docs/public/error-toast-icons.png" width="250" alt="error-toast-icons-png">
<br />

- info:

<img src="../docs/public/info-toast-plain.png" width="250" alt="info-toast-glass-png">
<br />
<img src="../docs/public/info-toast-glass.png" width="250" alt="info-toast-plain-png">
<br />
<img src="../docs/public/info-toast-icons.png" width="250" alt="info-toast-icon-png">
<br />

- warn:

<img src="../docs/public/warn-toast-plain.png" width="250" alt="warn-toast-glass-png">
<br />
<img src="../docs/public/warn-toast-glass.png" width="250" alt="warn-toast-plain-png">
<br />
<img src="../docs/public/warn-toast-icons.png" width="250" alt="warn-toast-icons-png">
<br />

- loading:

<img src="../docs/public/loading-toast-normal.png" width="250" alt="loading-toast-normal-png">
<br />
<img src="../docs/public/loading-toast-eclipse.png" width="250" alt="loading-toast-eclipse-png">
<br />
<img src="../docs/public/loading-toast-broken-rounded.png" width="250" alt="loading-toast-broken-rounded-png">
<br />
<img src="../docs/public/loading-toast-broken-straight.png" width="250" alt="loading-toast-broken-straight-png">
<br />
<img src="../docs/public/loading-toast-broken-flat.png" width="250" alt="loading-toast-broken-flat-png">
<br />

## Installation

npm:

```bash
  npm install @webdevaaron/vanilla-toast
```

pnpm:

```bash
  pnpm install @webdevaaron/vanilla-toast
```

## How to use

1. From your main JavaScript file, import the necessary files:

```ts
  import { toast, mount_toast } from "@vanilla-toast/vanilla-toast";
  import "@vanilla-toast/vanilla-toast/build/index.min.css";
```

2. Mount the toast container:

```ts
  // You can pass in options to this function.
  mount_toast();

  // or
  window.addEventListener("DOMContentLoaded", () => {
    mount_toast();
  });
```

3. To render a toast, you can do:

```ts
  // Neutral
  toast.default({ message: "Hello, World!" });

  // Success
  toast.success({ messsage: "Hello, World!" });

  // Error
  toast.error({ message: "Hello, World!" });

  // Promise
  const response = await toast.promise(fetch, "https://jsonplaceholder.typicode.com/posts");
  
  if (!(response instanceof Error)) {
    const data = response.json();

    console.table(data);
  }

  // And other methods...
```

4. Have fun!

There are various options to assign to a toast. API References to guide you are coming up soon when the website for this library becomes live.

### LICENSE
MIT License

Copyright (c) 2023 Aaron

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
