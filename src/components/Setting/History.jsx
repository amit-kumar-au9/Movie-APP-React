import React from 'react'
import MovieCard from '../Common/MovieCard'
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1'
class History extends React.Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({list: res.results}))
    }
    render(){
        return(
            <div className="card setting_common_card">
                <h2 className="card-header">History</h2>
                <div className="card-body d-flex flex-row flex-wrap justify-content-between" style={{padding: 0}}>
                    {
                        this.state.list.map(movie => {
                            return(<MovieCard key={movie.id} data={movie} show_delete={true}/>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default History