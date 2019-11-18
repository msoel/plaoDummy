import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../style/header.module.css';

class SectionHeader extends Component {

    render() { 
        const { headerText, headerLink } = this.props;

        return (
            <div className={styles.section_header}>
                <NavLink to={"/"+headerLink} >{headerText}</NavLink>
                <i className={styles.arrow + ' ' + styles.right_arrow}></i>
            </div>
          );
    }
}
 
export default SectionHeader;
