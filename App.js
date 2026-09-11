    // const heading =React.createElement(
    //     'h1', {id: 'heading',xyz:"abc"}, 'Hello World');
    // console.log(heading);/
    const parent =React.createElement("div", {id: 'parent'},[
    React.createElement(  'div', {id: 'child'},[
    React.createElement(  'h1', {}, 'Hello h1'),
    React.createElement(  'h2', {}, 'Hello h2'),
    ]),
    React.createElement("div", {id: 'child2'},[
    React.createElement(  'h1', {}, 'Hello h1'),
    React.createElement(  'h2', {}, 'Hello h2'),
    ]),
]);
    console.log(parent);//only object will be printed in console because react element is an object
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);    