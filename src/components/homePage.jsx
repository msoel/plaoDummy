import React, { Component } from 'react';
import http from '../services/httpService';
import { ToastContainer, toast } from 'react-toastify';
import config from '../config';
import 'react-toastify/dist/ReactToastify.css';
import FiftyFiftyRightList from './widgets/fiftyFiftyRightList';
import ListSingleList from './widgets/listSingleList';
import TopNewsBelowListWithoutImage from './widgets/topNewsBelowListWithoutImage';
import ThreeColumnlocalNav from './widgets/threeColumnLocalNav';
import BlackVideo from './widgets/blackVideo';
import TechNews from './widgets/techWidget';

toast.configure();

class HomePage extends Component {
    state = {
        newsFiftyFiftyRightList: [],
        newsListSingleList: [],
        threeColumLocalNavList:[]
    };

    async  componentDidMount() {

        const { data:newsFiftyFiftyRightList } =
            await http.get(config.endPoint + config.fiftyFiftyRightListLimit);
        
        const { data:newsListSingleList } =
            await http.get(config.endPoint + config.ListSingleListLimit);
        
        const { data:threeColumLocalNavList } =
            await http.get(config.endPoint + config.threeColumLocalNavListLimit);
            
       
        this.setState({ newsFiftyFiftyRightList, newsListSingleList, threeColumLocalNavList  });
    }

    render() { 
        // if (this.state.loading)
        //     return <Loader message={this.state.loadingMessage} />;

        const { newsFiftyFiftyRightList, newsListSingleList, threeColumLocalNavList } = this.state;
        return (
            <React.Fragment>
               
                <ToastContainer /> 
                <FiftyFiftyRightList news={newsFiftyFiftyRightList.stories} /> 
                <ListSingleList news={newsListSingleList.stories} />
                <TopNewsBelowListWithoutImage news={newsListSingleList.stories} />
                <ThreeColumnlocalNav news={threeColumLocalNavList.stories} />
                <BlackVideo news={threeColumLocalNavList.stories} />
                <TechNews news={threeColumLocalNavList.stories} /> 

            </React.Fragment>
        )
    }; 
}
 
export default HomePage;