import { Switch, Route } from 'react-router-dom'
import React from 'react';
import '../../App.css';
import Header from '../Nav/Header'
import Login from '../Forms/Login'
import DraftList from '../Forum/DraftList'
import DetailDraft from '../Forum/Details'
import BlogHome from './BlogHome'
import DefaultHome from './DefaultHome'
import PhotoHome from './PhotoHome'
import AddBlog from '../Forms/AddPost';
import AddPhoto from '../Forms/AddPhoto';

export default () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={DefaultHome} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/forum" component={BlogHome} />
          <Route exact path="/forum/createpost" component={AddBlog} />
          <Route exact path="/forum/drafts" component={DraftList} />
          <Route exact path="/forum/:id" component={DetailDraft} />

          <Route exact path="/photo" component={PhotoHome} />
          {/* <Route exact path="/photo/list" component={PhotoHome} /> */}
          <Route exact path="/photo/addphoto" component={AddPhoto} />
          {/* <Route exact path="/photo/drafts" component={PhotoHome} />
          <Route exact path="/photo/:id" component={PhotoHome} /> */}
        </Switch>
      </div>
    </div>
  )
}
