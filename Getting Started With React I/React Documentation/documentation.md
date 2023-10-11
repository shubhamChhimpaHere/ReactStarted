1. what is react ? 
- React is an open-source JavaScript library for building user interfaces. It is often used to creat single-page applications and is known for its efficiency and flexibility. React allows developers to build reusable UI componexts and manage the state of the application efficiently, making it a popular choice for building interactive web applications.

2. who made React? 
- React was developed by Facebook. It was initially created by Jordan Walke, a software engineer at Facebook. React is now maintained by Facebook and a commounity of individual developers and complaines. 


3. what is Babel?
- Babel is a JavaScript complier that allows developers to write code using the lastes ECMAScript features and then convert it into older versions of JavaScript that are complatiable with most browsers. This is particularly useful for working with modern JavaScript features and ensuring cross-brower compatibility.


4. How does Babel convert html code in React into valid code? 
- Babel primarily transpiles JavaScript code. It doesn't directly convert HTML into React components. In React, you write HTML-like code using JSX(JavaScript XML), which is then transpiled by Bable into JavaScript code. JSX allows you to write HTML-like syntax within your JavaScript files, making it easier to define and render React components. 

5. What is ReactDOM used for? write an example?
- ReactDOM is a specific package in the React ecosystem that provides methods for interacting with the DOM(Document Object Model). It is used to render React components into the actual HTML DOM. Here's and example of using ReactDOM to render a simple React component. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, React</h1>;

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(element);
```

6. What are the packages that you need to import for react to work with? 
- To work with React, typically need to import two main packages: `react` and `react-dom`. 

```javascript
import React from 'react'; // for creating React components
import ReactDOM from 'react-dom'; // for rendering react components in the DOM 

```

7. How do you add react to a web application?
- To add React to a web application , these are the steps 
a. Include React and ReactDOM in project by using npm or yarn to install the packages. 
b. Create React components using JSX syntax. 
c. Use ReactDOM to render components into the HTML DOM.
d. Configure a build system(like Babel) to transpile code if using JSX. 
e. Include the transpiled JavaScript in HTML file .


8. What is React.createElement?
- `React.createElement` is a core function in React used to create React elements or virtual DOM nodes. It's often used behind the scenes when write JSX.

9. What are the three properties that creatElement accept?
- a. Type(String or React Component): This specifies the type of the element to be created, which can be a string representing an HTML tag(e.g. 'div') or a reference to a custom React component. 

b. Props( Object ): An optional object that specifies the properties or attributes for the element. These can include things like className, id, onClick, etc.  

c. Children ( Elements ): Any additional elements that should be nested within the created element. 

10. What is the meaning of render and root?
- In the context of React, "render" refers to the process of taking a React component and displaying it on a web page. The "root" typically refers to the HTML element in the DOM where React application will be mounted. The  `ReactDOM.render` function is used to render a React component into this root element. 

```javascript
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(element);
```