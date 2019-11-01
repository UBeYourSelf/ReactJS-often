import React from 'react'

class MyRefs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : ""
        }
        this.inputRef = React.createRef()
    }

    onSubmit = () =>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )    
    }
}

export default MyRefs