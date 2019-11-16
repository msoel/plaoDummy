import React, { Component } from 'react';
import SingleNews from './common/singleNews';
import SectionHeader from './common/sectionHeader';

class TechNews extends Component {

    render() { 
        const { news } = this.props;
           
        if (!news) return false;
        

        const news2t3 = news.slice(0, 4);
        return ( 
            <React.Fragment>
                <SectionHeader
                headerText={news2t3[0]['sections'][0]['name']}
                headerLink={news2t3[0]['sections'][0]['section-url']} />            
            <div className="tech-widget">                
                {news2t3.map(eachnews =>
                    <div  key={eachnews.id} >
                        <SingleNews
                            content={eachnews}
                            parentClassName=""
                            excerpt="no"
                            imageWidth="290"
                            imageWidthT="800"
                            imageWidthM="450"/>    
                    </div>
                    )}
            </div>
        </React.Fragment >
         );
    }
}
 
export default TechNews;