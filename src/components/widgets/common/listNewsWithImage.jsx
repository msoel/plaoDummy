import React, { Component } from 'react';
import config from '../../../config'
import { NavLink } from 'react-router-dom';

class ListNews extends Component {

    render() { 
        const { content, excerpt, parentClassName } = this.props;

        return ( 
            
            <div className={ parentClassName } >
                {content.map(eachnews =>
                    <NavLink to={eachnews['slug']} key={eachnews.id+'link'} >
                        <div className="flex-list"  key={eachnews.id} >
                            <div className="div-imgs" key={eachnews.id+'div'} >
                                <img key={eachnews.id+'img'} className="imageDisplay"
                                    src={config.imageHost + eachnews['hero-image-s3-key']}
                                    alt={eachnews['headline']}
                                />
                            </div>
                            <div className="div-title" key={eachnews.id+'rightdiv'}>
                                <p key={eachnews.id + 'pk'} className="title">{eachnews['headline']}</p>
                                {(excerpt === "yes") ? <p key={eachnews.id + 'pkp'}>
                                    {eachnews['headline'] + ' ' + eachnews['headline']}</p>:""
                }
                            </div>
                        </div>
                    </NavLink>
                  )}
                
            </div>
         );
    }
}
 
export default ListNews;