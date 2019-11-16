import React, { Component } from 'react';
import SingleNews from './common/singleNews';
import SectionHeader from './common/sectionHeader';
import ListNewsWithoutImage from './common/listNewWithoutList';
import config from "../../config";

class TopNewsBelowListWithoutImage extends Component {
    
    render() { 
        const { news } = this.props;
       
        if (!news) return false;
        
        const firstnews = news[0];
        const otherNews = news.slice(1);

        return ( 
            <React.Fragment>
                <div className="topNewslwn-container">
                    <div className="tnblwi-row-one" >
                        <SectionHeader
                            headerText={firstnews['sections'][0]['name']}
                            headerLink={firstnews['sections'][0]['section-url']} />
                        <SingleNews key={firstnews.id}
                            content={firstnews}
                            parentClassName="topNewsBelowListWithoutImage"
                            imageWidth="290"
                            imageWidthT="800"
                            imageWidthM="450"
                        />
                        <ListNewsWithoutImage content={otherNews}
                            excerpt="yes"
                            parentClassName="FiftyFiftyRightListParentClass" />                    
                        <input type="button" value={config.moreBn} className="more-news"/>
                    </div>
                    <div className="tnblwi-row-two" >
                        <SectionHeader
                            headerText={firstnews['sections'][0]['name']}
                            headerLink={firstnews['sections'][0]['section-url']} />
                        <SingleNews key={firstnews.id}
                            content={firstnews}
                            parentClassName="topNewsBelowListWithoutImage"
                            imageWidth="290"
                            imageWidthT="800"
                            imageWidthM="450"/>
                        <ListNewsWithoutImage content={otherNews}
                            excerpt="yes"
                            parentClassName="FiftyFiftyRightListParentClass" />                    
                        <input type="button" value={config.moreBn} className="more-news"/>
                    </div>
                    <div className="tnblwi-row-three" >
                        
                        <SectionHeader
                            headerText={firstnews['sections'][0]['name']}
                            headerLink={firstnews['sections'][0]['section-url']} />
                        <SingleNews key={firstnews.id}
                            content={firstnews}
                            parentClassName="topNewsBelowListWithoutImage"
                            imageWidth="290"
                            imageWidthT="800"
                            imageWidthM="450"/>
                        <ListNewsWithoutImage content={otherNews}
                            excerpt="yes"
                            parentClassName="FiftyFiftyRightListParentClass" /> 
                        <input type="button" value={config.moreBn} className="more-news"/>
                    </div>
                    <div className="tnblwi-row-four" >
                        
                        <SectionHeader
                            headerText={firstnews['sections'][0]['name']}
                            headerLink={firstnews['sections'][0]['section-url']} />
                        <SingleNews key={firstnews.id}
                            content={firstnews}
                            parentClassName="topNewsBelowListWithoutImage"
                            imageWidth="290"
                            imageWidthT="800"
                            imageWidthM="450"/>
                        <ListNewsWithoutImage content={otherNews}
                            excerpt="yes"
                            parentClassName="FiftyFiftyRightListParentClass" /> 
                        <input type="button" value={config.moreEn} className="more-news"/>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TopNewsBelowListWithoutImage;