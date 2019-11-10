import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ListNewsWithoutImage extends Component {

    render() { 
        // excerpt
        const { content,  parentClassName } = this.props;

        return ( 
            
            <div className={ parentClassName } >
                {content.map(eachnews =>
                    <NavLink to={eachnews['slug']} key={eachnews.id+'link'} >
                        <div className="flex-list"  key={eachnews.id} >
                            <div className="div-title" key={eachnews.id+'rightdiv'}>
                                <p key={eachnews.id + 'pk'} className="title">{eachnews['headline']}</p>
                            </div>
                        </div>
                    </NavLink>
                  )}
                
            </div>
         );
    }
}
 
export default ListNewsWithoutImage;