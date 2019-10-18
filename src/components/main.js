import React from 'react'
import Books from './booklist'

class MainComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div >
                    <Books/>
                </div>
               
            </React.Fragment>
        )
    }
}

export default MainComponent;