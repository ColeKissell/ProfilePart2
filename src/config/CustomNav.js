import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import Routes from './Routes'

const drawerWidth = 120;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        marginRight: 10,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
    };

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchor } = this.state;

        const drawer = <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} anchor={anchor}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/dice">Dice Bags</Link>
                </li>
                <li>
                    <Link to="/todos">Todo List</Link>
                </li>
                <li>
                    <Link to="/TicTacToe">Tic-Tac-Toe</Link>
                </li>
                <li>
                    <Link to="/AboutPage">Personal About Page</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Me</Link>
                </li>
                <li>
                    <Link to="/ProjectsPage">Projects</Link>
                </li>

            </ul>
          </Drawer>;

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    {before}
                    <Routes/>
                    {after}
                </div>
            </div>
        );
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
