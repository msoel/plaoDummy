import React, { Component } from 'react';
import Config from '../../../config';

class LocalNav extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className="localNav">
                    <h3> { Config.localNavHeadTextBn } </h3>
                    <select name="localnav" id="localNav">
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                    </select>
                    <select name="localnav" id="localNav">
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                    </select>
                    <select name="localnav" id="localNav">
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                        <option value="test1">test 1</option>
                    </select>
                    <input type="button" value={Config.searchBn}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LocalNav;
