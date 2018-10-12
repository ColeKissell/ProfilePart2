import React, {Component, Fragment} from 'react'
import { Route } from "react-router-dom";
import About from "../pages/About";
import DiceBags from "../pages/DiceBags";
import Topics from "../pages/Topics";
import Todos from "../todos";
import TickTacToe from "../pages/TicTacToe"
import AboutPage from "../ProfilePages/AboutPage"
import Contact from "../ProfilePages/ContactPage"
import ProjectsPage from "../ProfilePages/ProjectsPage"


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/dice" component={DiceBags} />
                <Route path="/todos" component={Todos} />
                <Route path="/TicTacToe" component={TickTacToe}/>
                <Route path="/AboutPage" component={AboutPage}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/ProjectsPage" component={ProjectsPage}/>

            </Fragment>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);