import React from 'react'

class Form extends React.Component{

    constructor(){
        super();
        this.state={
            val:'',
            spl:''
        };

        this.changeHandler = this.changeHandler.bind(this)

    }

    changeHandler(e){
        this.setState({
            val:e.target.value
        })
    }

    submitHandl(e){
        alert(`${this.state.val}`);
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandl.bind(this)}>
                    <input onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">
                        Submit
                    </button>
                    <h1>
                        {this.state.val}
                    </h1>
                </form>
            </div>


        )
    }
}

export default  Form;