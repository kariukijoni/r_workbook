import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Messages from "./components/Messages"
import Form from "./components/Form";
import FormData from './components/FormData'
import Use_Form from './components/Use_Form'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Page/> */}
        
        {/* <Greeting name='Bob'/> */}
        
        {/* <Counter/> */}
        
        {/* <Messages/> */}
        
        {/* <Form/> */}        
        
        {/* <FormData/> */}
        
        <Use_Form/>
        
      </header>
    </div>
  );
}

export default App;
