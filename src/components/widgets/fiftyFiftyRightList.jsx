import React, { Component } from 'react';
import SingleNews from './common/singleNews';
import ListNews from './common/listNewsWithImage';
import SectionHeader from './common/sectionHeader';


class FiftyFiftyRightList extends Component {
    render() { 
        const { news } = this.props;
       
        if (!news) return false;
        
        const firstnews = news[0];
        const otherNews = news.slice(1);

        return ( 
            <React.Fragment>
                <SectionHeader
                    headerText={firstnews['sections'][0]['name']}
                    headerLink={firstnews['sections'][0]['section-url']} />
                <div className="widget-f-flist" >
                    <SingleNews key={firstnews.id}
                        content={firstnews}
                        parentClassName="fiftyFiftyRightlistparentClass"
                        imageWidth="595"
                        imageWidthT="800"
                        imageWidthM="450"
                    />
                    <ListNews content={otherNews}
                        excerpt="yes"
                        parentClassName="FiftyFiftyRightListParentClass" />
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default FiftyFiftyRightList;