import React from 'react'

class Books extends React.Component{
    render(){
        return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1235
                    </td>
                    <td>
                        The Anime
                    </td>
                </tr>
            </tbody>
        </table>
       

        )
    }
}

export default Books;