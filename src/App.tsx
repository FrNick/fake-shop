import React from 'react'
// +++++++++++++++++++++++++++++++++++++++++++++++
// the way to write with jsx:
// +++++++++++++++++++++++++++++++++++++++++++++++
const title = <h1>Hi, its me again! I'm React.js</h1>
// +++++++++++++++++++++++++++++++++++++++++++++++
// the next example is a concervative syntax to write the code:
// +++++++++++++++++++++++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++++++++++++++
// React component. It could be function declaration or an arrow function. The components are written as the PascalCase
// When we do 'return' we can add if we need to, when we do '=>' we cannot add anithing - the function is completed.
// JSX expressions must have one parent element:
// +++++++++++++++++++++++++++++++++++++++++++++++

// const Title = () => <h1>HELLO, REACT component!</h1>
// const List = () => (
//     <ul>
//         <li>list item 1</li>
//         <li>list item 2</li>
//         <li>list item 3</li>
//     </ul>
// )
// +++++++++++++++++++++++++++++++++++++++++++++++
// we can add other elements in the function but the elements cannot be stylized at least there is no container for flexbox:
// +++++++++++++++++++++++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++++++++++++
// to get them together we have to use React.fragment instead of div, however it is old conservative way:
// +++++++++++++++++++++++++++++++++++++++++++++++
// function App() {
//     return (
//         <React.Fragment>
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
//         </React.Fragment>
//     )
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// instead of <React.Fragment></React.Fragment> we can use <></>:
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// but how to add a text or a components to the components we have?
// we can make anothe component - something like const TitleApp = blablabla, but that is just the repetition of the action. How not to repeat that? We add (props) and {props.title} that would wokr withous the typescript, but in the typescript we have to follow some rulles: type or interface and its values: if the parameter is not necessary we add "?"
// +++++++++++++++++++++++++++++++++++++++++++++++
type TitleProps = {
    title: string
    text?: string
}
// interface TitleProps {
//     title: string
// }
const Title = (props: TitleProps) => {
    console.log(props)
    return (
        <h1>
            HELLO, REACT component! {props.text}
            {props.title}
        </h1>
    )
}
// const TitleApp = () => <h1>HELLO, App component!</h1>
const List = () => (
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
)
// +++++++++++++++++++++++++++++++++++++++++++++++
function App() {
    return (
        <>
            <Title
                title="For now it is some foggy"
                text="Repeating means learning!"
            />
            <Title
                title="But we have to move on!"
                text="And you have to be attached to it!"
            />
            <Title
                title="Do not stop, just do it!"
                text="And them you'll get the sweet frout of your efforts!"
            />
            {/* <TitleApp /> */}
            <List />
            {list} {399 * 46}
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
        </>
    )
}
// +++++++++++++++++++++++++++++++++++++++++++++++
// git status   git add . git commit -m "" git status
// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

export default App
