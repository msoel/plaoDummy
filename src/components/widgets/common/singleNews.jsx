import React, { Component } from 'react';
import config from '../../../config'
import { NavLink } from 'react-router-dom';

class SingleNews extends Component {

    render() { 
        // , imageWidth, imageWidthT, imageWidthM 
        const { content, parentClassName} = this.props;
        const divClassName = parentClassName + ' left-fifp';  
        let excerpt = "";
        excerpt = this.props.excerpt;

        const excerptContent = (excerpt !== "no") ? content['headline'] : "";

        return ( 

            <div className={ divClassName }>
                <NavLink to={content['slug']} >
                    <div className="pic-div item1">
                    {/* <picture> */}
                        {/* <source media="(max-width: 1024px)" srcset={config.imageHost + content['hero-image-s3-key']  + "?rect=0%2C554%2C2695%2C1516&w="+ imageWidthT +"&auto=format%2Ccompress" } /> */}
                        {/* <source media="(max-width: 500px)" srcset={config.imageHost + content['hero-image-s3-key']  + "?rect=0%2C554%2C2695%2C1516&w="+ imageWidthM +"&auto=format%2Ccompress" } /> */}
                        {/* <img src={config.imageHost + content['hero-image-s3-key'] + "?rect=0%2C554%2C2695%2C1516&w="+ imageWidth +"&auto=format%2Ccompress"} alt={content['headline']}  /> */}
                            {/* <img src={config.imageHost + content['hero-image-s3-key']} alt={content['headline']} /> */}
                        {/* </picture> */}
                        
                        <img width="100%"
                            src={config.imageHost + content['hero-image-s3-key']}
                            alt={content['headline']}/>
                        </div>
                
                    <div className="item2">
                        <p className="title">{content['headline']}</p> 
                        <p>{excerptContent
                        + ' ' + excerptContent
                        + ' ' + excerptContent
                        + ' ' + excerptContent}
                        </p>
                    </div>
                                  
                </NavLink>
            </div>

         );
    }
}
 
export default SingleNews;