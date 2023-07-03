import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login.js";
import Album from "./pages/album.js";
import Favorites from "./pages/favorites.js";
import NotFound from "./pages/notFound.js";
import Profile from "./pages/profile.js";
import ProfileEdit from "./pages/profileEdit.js";
import Search from "./pages/search.js";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/search' component={Search} />
          <Route
            path='/album/:id'
            render={(propsRouter) => <Album {...propsRouter} />}
          />
          <Route path='/favorites' component={Favorites} />
          <Route exact path='/profile' component={Profile} />
          <Route path='/profile/edit' component={ProfileEdit} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
