import React, { Component } from 'react';
import SingleNews from './common/singleNews';
import ListNews from './common/listNewsWithImage';
import SectionHeader from './common/sectionHeader';
import styles from '../../style/listSingleList.module.css';


class ListSingleList extends Component {
    state = {  }
    render() { 
        const { news } = this.props;
       
        if (!news) return false;
        
        const firstnews = news[0];
        const otherNews = news.slice(1,4);

        return ( 
            <React.Fragment>
                <SectionHeader
                    headerText={firstnews['sections'][0]['name']}
                    headerLink={firstnews['sections'][0]['section-url']} />
                <div className="widget-f-flist listsingleListwidget" >
                    <ListNews content={otherNews}
                        excerpt="no"
                        parentClassName="ListSingleListParentClass rowFirst"/>
                    <SingleNews
                        content={firstnews}
                        parentClassName="rowSecond"
                        imageWidth="363"
                        imageWidthT="800"
                        imageWidthM="450"/>
                    <ListNews
                        content={otherNews}
                        excerpt="no"
                        parentClassName="ListSingleListParentClass rowThird" />
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default ListSingleList;