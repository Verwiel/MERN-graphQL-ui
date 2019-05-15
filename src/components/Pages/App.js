import { Switch, Route } from 'react-router-dom'
import React from 'react';
import '../../App.css';
import Header from '../Nav/Header'
import CreatePost from '../Blog/CreateDraft'
import Login from '../Blog/Login'
import DraftList from '../Blog/DraftList'
import DetailDraft from '../Blog/Details'
import BlogHome from './BlogHome'
import DefaultHome from './DefaultHome'
import PhotoHome from './PhotoHome'

export default () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={DefaultHome} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/forum" component={BlogHome} />
          <Route exact path="/forum/createpost" component={CreatePost} />    
          <Route exact path="/forum/drafts" component={DraftList} />
          <Route exact path="/forum/drafts/:id" component={DetailDraft} />

          <Route exact path="/photo" component={PhotoHome} />
        </Switch>
      </div>
    </div>
  )
}
