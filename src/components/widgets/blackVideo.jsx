import React, { Component } from 'react';
import SingleNews from './common/singleNews';
import config from "../../config";
import SectionHeader from './common/sectionHeader';


class BlackVideo extends Component {

    render() { 
        const { news } = this.props;
           
        if (!news) return false;
        
        const firstnews = news[0]; 
        const news2t3 = news.slice(1, 5);
       
        
        return ( 
            <React.Fragment>
                <SectionHeader
                    headerText={firstnews['sections'][0]['name']}
                    headerLink={firstnews['sections'][0]['section-url']} />
            
            <div className="black-videp-widget-whole">
                <div className="black-videp-widget">
                    <div className="itemText">
                        {firstnews['headline']}
                    </div>
                    <div className="itemImage">
                            <div className="playBtn">
                                <button className="button play" />
                            </div>
                        <img width="100%"
                            src={config.imageHost + firstnews['hero-image-s3-key']}
                            alt={firstnews['headline']}/>  
                    </div>
                </div>
                <div className="blackList">
                    {news2t3.map(eachnews =>
                        <div  key={"nnw__"+eachnews.id}>
                            <div  key={"ply_"+eachnews.id} className="playBtn">
                                <button key={"ptn_"+eachnews.id} className="button play" />
                            </div>

                            <SingleNews
                            content={eachnews}
                            parentClassName=""
                            excerpt="no"
                            imageWidth="290"
                            imageWidthT="800"
                                imageWidthM="450" />
                        </div>
                    )}
                </div>
                
                </div>
                </React.Fragment>
         );
    }
}
 
export default BlackVideo;