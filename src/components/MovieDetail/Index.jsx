import React from 'react'
import MainPage from './MainPage'

const Index = (props) => {
    return(
        <React.Fragment key={props.match.params.id}>
            <MainPage/>
        </React.Fragment>
    )
}

export default Index