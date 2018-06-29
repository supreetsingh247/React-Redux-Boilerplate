import React from 'react';
import {Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';

const Header = ({loading}) => {
return (
    <nav>
        <IndexLink to="/" activeClassName="active">Sample Home</IndexLink>
    </nav>
);
};

Header.proptypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;