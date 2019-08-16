import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Landing from './landing';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import AboutMe from './aboutMe';




const main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/aboutMe" component={AboutMe} />
    </Switch>
)

export default main;