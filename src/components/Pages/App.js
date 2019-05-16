import { Switch, Route } from 'react-router-dom'
import React from 'react'
import '../../App.css'
import Header from '../Nav/Header'
import Login from '../Forms/Login'
import DefaultHome from './DefaultHome'

import BlogHome from './BlogHome'
import AddBlog from '../Forms/AddPost'
import DraftList from '../Forum/DraftList'
import Details from '../Forum/Details'

import PhotoHome from './PhotoHome'
import AddPhoto from '../Forms/AddPhoto'
import PhotoDrafts from '../Photo/PhotoDrafts'
import PhotoList from '../Photo/PhotoList'
import PhotoDetails from '../Photo/PhotoDetails'

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
          <Route exact path="/forum/:id" component={Details} />

          <Route exact path="/photo" component={PhotoHome} />
          <Route exact path="/photo/list" component={PhotoList} />
          <Route exact path="/photo/addphoto" component={AddPhoto} />
          <Route exact path="/photo/drafts" component={PhotoDrafts} />
          <Route exact path="/photo/:id" component={PhotoDetails} />
        </Switch>
      </div>
    </div>
  )
}
