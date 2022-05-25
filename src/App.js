import logo from './logo.svg';
import './App.css';
import {ShowUsers} from "../src/comp/showUsers"
import {useStore} from "./store"
import { Provider } from 'react-redux';
import {Posts } from "./comp/posts"
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
  
      <Provider store={useStore}>
          <BrowserRouter>
          <ShowUsers></ShowUsers>
          {/* <Posts id={1}></Posts> */}
          <Switch>
          <Route path="/To see your posts/:id" component={Posts} exact></Route>
          </Switch>             
          </BrowserRouter>
          
      </Provider>
  
  );
}

export default App;
