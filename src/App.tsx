import React from 'react'
// the way to write with jsx:
const title = <h1>Hi, its me again! I'm React.js</h1>

// the next example is a concervative syntax to write the code:
// const title = React.createElement(
//     'h1',
//     null,
//     'Another way to say HI, I am React.js'
// )
const list = (
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
)

// React component. It could be function declaration or an arrow function. The components are written as the PascalCase
// When we do 'return' we can add if we need to, when we do '=>' we cannot add anithing - the function is completed.
//
// JSX expressions must have one parent element:
const Title = () => <h1>HELLO, REACT component!</h1>
const List = () => (
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
)
// we can add other elements in the function but the elements cannot be stylized:
// function App() {
//     return (
//         <div className="App">
//             <Title />
//             <List />
//             {title} {list} {399 * 46}
//             <p>
//                 Paragraph 1 Lorem ipsum dolor sit amet consectetur, adipisicing
//                 elit. Saepe voluptatibus earum repellat aliquid tenetur
//                 doloremque in architecto voluptatem, sunt deserunt accusantium
//                 quasi veniam quisquam eligendi aut, quae ipsam? Fuga, nisi!
//             </p>
//             <p>
//                 Paragraph 2 Lorem ipsum dolor, sit amet consectetur adipisicing
//                 elit. Distinctio quasi numquam, ex, quam quidem nemo ullam, a
//                 nobis nam corrupti cum officia? Necessitatibus hic excepturi
//                 amet iure quod nostrum distinctio?
//             </p>
//         </div>
//     )
// }
// to get them together we have to use React.fragment instead of div:
function App() {
    return (
        <React.Fragment>
            <Title />
            <List />
            {title} {list} {399 * 46}
            <p>
                Paragraph 1 Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Saepe voluptatibus earum repellat aliquid tenetur
                doloremque in architecto voluptatem, sunt deserunt accusantium
                quasi veniam quisquam eligendi aut, quae ipsam? Fuga, nisi!
            </p>
            <p>
                Paragraph 2 Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Distinctio quasi numquam, ex, quam quidem nemo ullam, a
                nobis nam corrupti cum officia? Necessitatibus hic excepturi
                amet iure quod nostrum distinctio?
            </p>
        </React.Fragment>
    )
}

export default App
