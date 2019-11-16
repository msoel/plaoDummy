import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class SectionHeader extends Component {

    render() { 
        const { headerText, headerLink } = this.props;

        return (
            <div className="section-header">
                <NavLink to={"/"+headerLink} >{headerText}</NavLink>
                <i className="arrow right_arrow"></i>
            </div>
          );
    }
}
 
export default SectionHeader;
