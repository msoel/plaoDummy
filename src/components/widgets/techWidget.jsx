import React, { Component } from 'react';
import SingleNews from './common/singleNews';

class TechNews extends Component {

    render() { 
        const { news } = this.props;
           
        if (!news) return false;
        

        const news2t3 = news.slice(0, 4);
        return ( 
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
         );
    }
}
 
export default TechNews;