import logo from './logo.svg';
import './App.css';
import './header.css'
import Header from './components/Header';
// When importing arrow functions, you always need to put them in {}
import { HomeComponent } from './components/HomeComponent';
import { UserComponent } from './propsdemo/UserComponent';
import { StudentReg } from './components/StudentReg';

function App() {
    var title = "Bhavya"
    return (
    <div className="App">
      {/*<Header />*/}
    {/*<HomeComponent />*/}
      {/*In title = {title} this first title is called key
        It is not necessary to give its name as title, you can give anything like t
        and the second title is the value of the key
        Here we are basically passing values to function in UserComponent file
    */}   
      {/*<UserComponent title = {title}/>*/}
      <StudentReg />    
    </div>
  );
}

export default App;
