// import React from 'react'
// +++++++++++++++++++++++++++++++++++++++++++++++
// the way to write with jsx:
// +++++++++++++++++++++++++++++++++++++++++++++++
// const title = <h1>Hi, its me again! I'm React.js</h1>
// +++++++++++++++++++++++++++++++++++++++++++++++
// the next example is a concervative syntax to write the code:
// +++++++++++++++++++++++++++++++++++++++++++++++
// const title = React.createElement(
//     'h1',
//     null,
//     'Another way to say HI, I am React.js'
// )
// const list = (
//     <ul>
//         <li>list item 1</li>
//         <li>list item 2</li>
//         <li>list item 3</li>
//     </ul>
// )
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
// type TitleProps = {
//     title: string
//     text?: string
//     nmbr: number
// }
// interface TitleProps {
//     title: string
// }
// const Title = (props: TitleProps) => {
//     console.log(props)
//     return (
//         <h1>
//             HELLO, REACT component! {props.text}
//             {props.title} {props.nmbr}
//         </h1>
//     )
// }
// const TitleApp = () => <h1>HELLO, App component!</h1>
// const List = () => (
//     <ul>
//         <li>list item 1</li>
//         <li>list item 2</li>
//         <li>list item 3</li>
//     </ul>
// )
// // +++++++++++++++++++++++++++++++++++++++++++++++
// function App() {
//     return (
//         <>
//             <Title
//                 title="For now it is some foggy"
//                 text="Repeating means learning!"
//                 nmbr={15}
//             />
//             <Title
//                 title="But we have to move on!"
//                 text="And you have to be attached to it!"
//                 nmbr={105}
//             />
//             <Title
//                 title="Do not stop, just do it!"
//                 text="And them you'll get the sweet frout of your efforts!"
//                 nmbr={1005}
//             />
//             {/* <TitleApp /> */}
//             <List />
//             {list} {399 * 46}
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
//         </>
//     )
// }
// +++++++++++++++++++++++++++++++++++++++++++++++
// git status   git add . git commit -m "" git status
// +++++++++++++++++++++++++++++++++++++++++++++++
// Typechecking With PropTypes https://reactjs.org/docs/typechecking-with-proptypes.html
// +++++++++++++++++++++++++++++++++++++++++++++++
// lesson-3
// +++++++++++++++++++++++++++++++++++++++++++++++
// How to start: 2 ways. 1- writing by hands 2 - by means of ...
// +++++++++++++++++++++++++++++++++++++++++++++++
// 1. writing by hands
// +++++++++++++++++++++++++++++++++++++++++++++++
// for React 18 is not necessary. But we don't know what version will be used in the project. The version is shown in the fine package-lock.json
// +++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react'
// const App = () => {
//     return (
//         <>
//             <h1> Hello, dear App! Or what do you want?</h1>
//         </>
//     )
// }
// +++++++++++++++++++++++++++++++++++++++++++++++
// to use App in another place we need to use export:
// +++++++++++++++++++++++++++++++++++++++++++++++
// export default App
// +++++++++++++++++++++++++++++++++++++++++++++++
// 2. writing by snippets
// ctrl+alt+r opens Search Snippet by prefix or description
// first we write: type script react arrow function component export (tsrafce):
// +++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react'

// type Props = {}

// const App = (props: Props) => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
// +++++++++++++++++++++++++++++++++++++++++++++++
// the difference of export App:
// App.tst has export, index.tsx has import
// 1) if App.tsx has export default App
// 2) if we don't use export default App we put export before type and before const in App.tsx
// then in index.tsx we have to use import {App} in "{}"
// the difference is that the export default App could be written only 1 time, but the named export could be used as many times as we need. The name could be whatever.
// named App:
// +++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react'

// type Props = {}

// export const App = (props: Props) => {
//     return <div>App</div>
// }

// // export default App

// +++++++++++++++++++++++++++++++++++++++++++++++
import React from 'react'

type Props = {}

const App = (props: Props) => {
    return <div>App</div>
}

export default App
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

// export default App
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

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++
