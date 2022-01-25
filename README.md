- Install the node modules of both server and client side using the following command.

> npm install
> 
> cd client/
> 
> npm install

- After deploying the backend, copy the server-side link and paste in  `client/src/SocketContext.js`file.
  
  ```js
  const socket = io("<LINK>");
  ```

- Now create the production build of the client side.
  
  ```bash
  npm run build
  ```

This will create a build directory with production build of the app. Your JavaScript and CSS files will be inside the **build/static** directory. A number of **.js** files are generated and placed inside the **build/static/js** directory.
