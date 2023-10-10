

const rootElement = document.getElementById('root');


// creating element without JSX 

// const element = React.createElement('div', {
//     className: "container",
//     children: "Carpe Diem"
// })


// creating element with JSX

const element = <>
<div className="container">Carpe Diem I</div>
<div>Carpe Diem II</div>
</>

// reactDOM and ReactDOM.render
const reactRoot = ReactDOM.createRoot(rootElement);
 reactRoot.render(element);

// console.log(element)