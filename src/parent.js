import  React from 'react'
import Child  from "./child";
class ParentComponent extends  React.Component{

    constructor(){
        super();
        this.state={
            name:"The Kid",
            val:false
        };

        this.update = this.update.bind(this);
    }

    update = (data)=>{
        alert(`Hello ${this.state.name} from ${data}`)
    };

    render(){
        return (

            <div>
                {this.state.val ? (
                    <h1>Hello{this.state.name}</h1>
                ) : (<h1>
                        Aww dil da ni mada
                    </h1>
                )
                }
                <Child msg={this.update}/>
            </div>
        )
    }
}

export  default ParentComponent