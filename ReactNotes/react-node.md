### very basics
1. you have react in your HTML file by including a CDN link within the html file 
 `<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
`
what and why of CDN and what is crossOrigin
   1.  there are two files here one is core React code, other one is the dom related code for web, it could be different for native etc.
1.  Adding react code in HTML: 
    `   
        <script>
        const heading = React.createElement("h1",{id: 'heading'},"Hello world from react");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        </script>
        `