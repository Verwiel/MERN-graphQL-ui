import { Switch, Route } from 'react-router-dom'
import React from 'react';
import '../../App.css';
import Header from '../Nav/Header'
import PostList from '../Blog/PostList'
import CreatePost from '../Blog/CreateDraft'
import Login from '../Blog/Login'
import DraftList from '../Blog/DraftList'
import DetailDraft from '../Blog/Details'


export default () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/drafts" component={DraftList} />
          <Route exact path="/drafts/:id" component={DetailDraft} />
        </Switch>
      </div>
    </div>
  )
}
