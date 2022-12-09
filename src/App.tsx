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
const Title = () => <h1>HELLO, REACT component!</h1>
const List = () => (
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
)

function App() {
    return (
        <div className="App">
            <Title />
            <List />
            {title} {list} {399 * 46}
        </div>
    )
}

export default App
