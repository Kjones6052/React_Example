// JSX mixes use of HTML and JS
import Greeting from "./greeting";
import ClassGreeting from "./ClassGreeting";

function App() {
  // creating an element and adding a JS variable
  // const name = "John"
  // const greeting = <p>Hello, {name}</p>

  // example of self closing img tag
  // const image = <img src="image path" alt="image" />

  // example of constructing an element in html
  // const element = <h1>Hello, JSX!</h1>

  const customMessage = "Welcome to my React app!" 
  const customUserMessage = "Here are our users:";

  // example of return value in html
  return (
    <div>
    <h1>Hello World!</h1>
    <ClassGreeting customMessage={customMessage} customUserMessage={customUserMessage}/>
    <Greeting customMessage={customMessage} customUserMessage={customUserMessage}/> 
    </div>
  );
}

export default App


// Everything below is commented out from previous examples

{/* <Greeting initialName="John Doe" />
<ClassGreeting initialName="John Doe" /> */}
