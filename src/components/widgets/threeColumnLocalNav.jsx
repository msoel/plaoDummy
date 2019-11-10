import React, { Component } from 'react';
import SectionHeader from './common/sectionHeader';
import SingleNews from './common/singleNews';
import { NavLink } from 'react-router-dom';
import LocalNav from './common/localNav';


class ThreeColumnlocalNav extends Component {

    render() {
            const { news } = this.props;
           
            if (!news) return false;
            
            const firstnews = news[0]; 
            const news2t3 = news.slice(1,3);
            const news4t5 = news.slice(3, 6);
            
            return (
                <React.Fragment>
                    <SectionHeader
                            headerText={firstnews['sections'][0]['name']}
                            headerLink={firstnews['sections'][0]['section-url']} />
                    <div className="threeColumnlocalNav-container">                         
                        <div className="thColNav-row-one" >
                            <div className="thcolnav-row-col-1">
                                <div className="thColNav-row-one-one">
                                    <SingleNews key={firstnews.id}
                                        content={firstnews}
                                        parentClassName=""
                                        imageWidth="580"
                                        imageWidthT="800"
                                        imageWidthM="450"/>
                                </div> 
                                <div className="thColNav-row-one-two">
                                    {news2t3.map(eachnews =>
                                        <SingleNews key={eachnews.id}
                                            content={eachnews}
                                            parentClassName=""
                                            excerpt="no"
                                            imageWidth="290"
                                            imageWidthT="800"
                                            imageWidthM="450"/>
                                    )}
                                </div> 
                            </div>
                            <div className="thcolnav-row-col-2">
                                {news4t5.map(eachnews =>
                                        <SingleNews key={eachnews.id}
                                            content={eachnews}
                                            parentClassName=""
                                            excerpt="no"
                                            imageWidth="290"
                                            imageWidthT="800"
                                            imageWidthM="450"/>
                                    )}
                            </div>
                        </div>
                        <div className="thColNav-row-two" >
                            <NavLink to="/ads">
                                <img src="https://paloimages.prothom-alo.com/contents/cache/images/300x250x1/uploads/media/2019/11/09/f6268dce4f77cb220097d1dd878ffa67-5dc62578c1ce4.jpg"
                                alt="ads" />
                            </NavLink>
                            <LocalNav />
                        </div>
                    </div>
                </React.Fragment>
            );
        
        
    }
}
 
export default ThreeColumnlocalNav;