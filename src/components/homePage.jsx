import React, { Component } from 'react';
import Loader from './common/loading';
import Footer from './common/footer';
import http from '../services/httpService';
import { ToastContainer, toast } from 'react-toastify';
import config from '../config';
// import _ from 'lodash';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 6,
        sortColumn: { path: 'title', order: 'asc' },
        searchData: "",
        ids: '',
        loading: 0,
        loadingMessage: "Beers just serving..!"

    };

    async  componentDidMount() {

        const { data: movies } =
            await http.get( config.endPoint);
       
        console.log(movies);
        this.setState({ movies });
        this.setState({ loading: 0 });
    }
    
    async componentDidUpdate() {

        // console.log('component did update ---');
        // this.grabData(1);

    }

    render() { 
        if (this.state.loading)
            return <Loader message={this.state.loadingMessage} />;

       
        return (
            <React.Fragment>
               
                <ToastContainer /> 
                
                <div className="row  justify-content-md-center">
                test content
                </div>

            <Footer/>

            </React.Fragment>
        )
    }; 
}
 
export default Movies;