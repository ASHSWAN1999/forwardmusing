import React, {} from 'react';
import './scss/custom.scss';


import { Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import { MainContent } from './Components/MainContent';
import { Footer } from './Components/Footer';
import { Post } from './Components/Post'


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);


const App  = () => {

  return (
    <React.Fragment action="/" method="post">

        <NavigationBar />
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/home' component={MainContent} />
            <Route exact path='/post' component={Post} />
          </Switch>
        <Footer />

    </React.Fragment>
  );
}


export default App;
