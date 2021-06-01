import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Initial from './Pages/Initial'
import Profile from './Pages/Profile'
import ModifyGroup from './Pages/ModifyGroup'
import User from './Pages/User'
import Attendance from './Pages/Attendance'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Initial} />
        <Route path='/perfiles' component={Profile} />
        <Route path='/modificar-grupos' component={ModifyGroup} />
        <Route path='/usuarios' component={User} />
        <Route path='/asistencia' component={Attendance} />
      </Switch>
    </div>
  );
}

export default App;
