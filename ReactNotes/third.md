1. in the scripts of package.json we can add the command to start the project
   1. to start the project earlier we used -> `npx parcel index.html`
   2. instead we can add within the scripts object of package.json 
        `scripts: {
            "start": "npx parcel index.html" ,
            "build": "npx parcel build index.html"
        }` 
    3. Now you can call npx parcel `index.html` as -> `npx run start`
 2. JSX is html like syntax (it is not html) it is not part of react
 3. JS engine does not understand JSX, it only undersandt Ecmascript
 4. JSX is transpiled by parcel(uses Babel internally) before reaching JS engine
    1. JSX => React.createElement => JS object => HTML
    2. Babel does JSX => React.CreateElement
    3. After React.createElement, react takes over
5. Components in React
   1. Class Based Component - OLD
   2. Functional Component - NEW
6. JSX prevents XSS attacks, sanitizes any JS being run:
   1. say we call an API which sends some script in response and that response is supposed to be used in jsx as javascript, if some malicious script is sent in response JSX will identify and prevent it.
