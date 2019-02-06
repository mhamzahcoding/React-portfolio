import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Aboutme from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/about" component={Aboutme}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/project" component={Projects}></Route>
    </Switch>
);

export default Main;