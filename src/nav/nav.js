import React, { Component } from "react";
import "../App.css";
import { FiChevronRight } from "react-icons/fi";
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { flexbox } from '@material-ui/system';

export default class Nav extends Component {
    render() {
      return (
        <Router>
        <div className="nav">
         <div className="navcomponents">
             {/* <a>Blog</a>
             <a href="https://twitter.com/stripe">Stripe on twiter</a><FiChevronRight/> */}
             <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={10}>
        <a>Blog</a>
        </Box>
        <Box p={2} >
        <a href="https://twitter.com/stripe">Stripe on twiter</a><FiChevronRight/>
        </Box>
      </Box>
         </div>
          </div>
          </Router>
      );
    }
  }
    