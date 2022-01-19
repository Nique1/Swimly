import React, {Component} from "react";

export default class Inner extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        console.log('CInner - konstruktor');
    }

    static getDerivedStateFromProps(props, state){
        console.log("CInner - getDerivedStateFromProps()")
        return null
    }
    componentDidMount(){
        console.log("CInner - componentDidMount()")
    }
    render() {
        console.log("CInner - componentDidMount()")
        return (
            <div>
                <h3 className='bgClassInner'>Komponent wewnetrzny</h3>
                {/* <h3 className='{styl.bgClassModule}'>Komponent wewnetrzny</h3> */}
            </div>
        )
    }

    shouldComponentUpdate() {
        console.log("CInner - shouldComponentUpdate()")
        return true
    }
    getSnapshotBeforeUpdate(pprops, pstate){
        console.log("CInner - getSnapshotBeforeUpdateUpdate()")
        return null
    }
    componentDidUpdate() {
        console.log("CInner- componentDidUpdate()")
    }


}