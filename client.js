/** @jsx React.DOM */
"use strict";
var React = require("react/addons");
var Route = require("react-router").Route;
var Routes = require("react-router").Routes;

var Play = require("./components/Play");
var Editor = require("./components/Editor");
var KeyWrapper = require("./components/KeyWrapper");

var appContainer = document.getElementById("app");

/**
 * Main
 *
 * @namespace components
 * @class Main
 * @constructor
 * @param {Object} props
 */
var Main = React.createClass({
    render: function() {
        return (
            <div className="Main container">
                <KeyWrapper target={this.props.activeRouteHandler} />
            </div>
        );
    }
});

React.renderComponent(
    <Routes>
        <Route handler={Main}>
            <Route name="editor" path="/" handler={Editor} />
            <Route name="play" path="/play" handler={Play} />
        </Route>
    </Routes>, appContainer);
