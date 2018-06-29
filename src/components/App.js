import React, { Component } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header
                    loading={this.props.loading}/>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}
App.proptypes = {
    children: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);