import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewScore from './components/NewScore';
import FriendList from './components/FriendList';
import GameAnalysis from './components/GameAnalysis';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/new-score">New Score</Button>
          <Button color="inherit" component={Link} to="/friends">Friends</Button>
          <Button color="inherit" component={Link} to="/analysis">Analysis</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/new-score" component={NewScore} />
          <Route path="/friends" component={FriendList} />
          <Route path="/analysis" component={GameAnalysis} />
          <Route path="/">
            <h1>Welcome to GolfBuddy</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
