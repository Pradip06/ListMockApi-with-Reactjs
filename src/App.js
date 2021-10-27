// import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faPlus, faSearch, faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import HomeList from './Component/Home'
// import ListGetUsingFunction from './component/get data json different component/ListGetUsingFunction'
// import RestaurantDetail from './component/RestaurantDetail'
import Search from './Component/Search'
// import RestaurantCreate from './component/Post data different component/ListPostUsingFunction'
import ListUpdate from './Component/ListUpdate'
// import ListGetUsingClas from './component/get data json different component/ListGetUsingClas'
// import ListGetUsingAxios from './component/get data json different component/ListGetUsingAxios'
import AddNewList from './Component/AddNewList'
// import ListPostUsingClas from './component/Post data different component/ListPostUsingClas'
// import SearchClas from './component/Search/SearchClas'
import Login from './Component/Log In & Out/Login'
import Logout from './Component/Log In & Out/Logout'
import Protected from './Component/Protected'
import Register from './Component/Log In & Out/Register'


function App() {
  return (
    <div className="App">
      <Router>

        {/* <Route exact path="/"> */}
        {/* <Home /> */}
        {/* </Route> */}
        <Protected exact path="/" component={HomeList} />


        {/* <Route path="/list_function"> */}
        {/* <ListGetUsingFunction /> */}
        {/* </Route> */}
        {/* <Protected path="/list_function" component={ListGetUsingClas} /> */}

        {/* <Route path="/list_clas"> */}
        {/* <ListGetUsingClas /> */}
        {/* </Route> */}
        {/* <Protected path="/list_clas" component={ListGetUsingClas} /> */}

        {/* <Route path="/list_axios"> */}
        {/* <ListGetUsingAxios /> */}
        {/* </Route> */}
        {/* <Protected path="/list_axios" component={ListGetUsingAxios} /> */}

        {/* <Route path="/create_function"> */}
        {/* <RestaurantCreate /> */}
        {/* </Route> */}
        {/* <Protected path="/create_function" component={RestaurantCreate} /> */}

        {/* <Route path="/create_clas"> */}
        {/* <ListPostUsingClas /> */}
        {/* </Route> */}
        {/* <Protected path="/create_clas" component={ListPostUsingClas} /> */}

        {/* <Route path="/create_axios"> */}
        {/* <ListPostUsingAxios /> */}
        {/* </Route> */}
        <Protected path="/add_list" component={AddNewList} />

        {/* <Route path="/detail"> */}
        {/* <RestaurantDetail /> */}
        {/* </Route> */}
        {/* <Protected path="/detail" component={RestaurantDetail} /> */}

        {/* <Route path="/search_function"> */}
        {/* <RestaurantSearch /> */}
        {/* </Route> */}
        {/* <Protected path="/search_function" component={RestaurantSearch} /> */}

        {/* <Route path="/search_clas"> */}
        {/* <SearchClas /> */}
        {/* </Route> */}
        <Protected path="/search_list" component={Search} />

        {/* <Route path="/update/:id" */}
        {/* // render={props => ( */}
        {/* // <RestaurantUpdate {...props} /> */}
        {/* // )}> */}
        {/* </Route> */}
        <Protected path="/update/:id" component={ListUpdate} />

        <Route path="/login_list"
          render={props => (
            <Login {...props} />
          )}></Route>


        <Route path="/register"
        render={props => (
        <Register {...props} />
        )}></Route>


        
        <Route path="/logout_list">
        <Logout />
        </Route>


      </Router>
    </div>
  );
}

export default App;