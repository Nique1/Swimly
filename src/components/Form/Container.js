import react from "react";
import {Component} from 'react' 
import "./Container.css"
class Container extends Component { //komponent klasowy
    constructor(props){
        super(props);
        this.state={msg:"Register"};
        this.submitRegister=this.submitRegister.bind(this);
    }


    submitRegister(e){
        this.setState({msg:'You are in!'});
        console.log('Button on');
    }
   
    render(){
    return( 
        // obsluga formularza
        <div className="inner-container">
            <h1>{this.state.msg}</h1>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"className="register-input" placeholder="Username" 
                    onFocus={(e) => {console.log('Fokus jest na polu tekstowym');}} />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Phone</label>
                    <input type="text" name="username"className="register-input" placeholder="Phone" 
                    onBlur={(e) => {console.log('Wywołano, bo pole straciło fokus'); }} onKeyPress={(e) => {console.log('Key Press'); }} onCopy={(e) => {console.log('On Copy');}} onCut={(e) => {console.log('On Cut');}} onPaste={(e) => {console.log('On Paste');}} />
                
                </div>
                
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"className="register-input" placeholder="Password" value="Value" onKeyUp={(e) => {
                        console.log('Key Up');}} onKeyDown={(e) => {console.log('Key Down');}} />

                <button type="button" className="login-btn" onClick={this.submitRegister} onSubmit={(e) => {console.log('OnSubmit'); }} onSelect={(e) => {console.log('OnSelect'); }}>Register</button>
                </div>
            </div>
        </div>

    
    );
}
}
export default Container;