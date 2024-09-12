# ixtreeissue
Example project to demonstrate a bug in IX version 2.4.0

When scrolling down in a ix-tree, the elements above the current view are unloaded and can't be accessed anymore.

relevant coding to reproduce issue can be found in files
  - app.component.html
  - app.component.ts

To start project open terminal and execute the following commands:
  - npm install
  - npm run start

then open in browser url http://127.0.0.1:4200/
