import React, {Component} from "react";
import './CContents.css';
// import zaba from "../res/img1.png";
// import jez from "../res/img2.png";
// import biedronka from "../res/img3.png";
// import wazka from "../res/img4.png";
// import mrowka from "../res/img5.png";
// import motyl from "../res/img6.png";

import jsonData from "../res/text.json";
import jsonData2 from '../res/text2.json';
class CContents extends Component {
   

    constructor(){
        super()
        this.state = {msg: 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () =>JSON.parse(JSON.stringify(jsonData2));
        const imgContext = require.context ('../res/', false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) => {
            const cname = imgContext(file).default;
            const label = file.slice(2,-4);
            img[label]= cname;
            return img;
        }, {});
        // this.changeMsg =this.changeMsg.bind(this); //optymalna mozliwosc obslugi zdazen
    }
   
    changeMsg = () => {
         this.setState({msg:'Właśnie jesteś uczestnikiem kursu React, gratulacje ! '});
        console.log('Przycisk został naciśnięty!');
    }

    render(){
        // const items = [];
        // for(let i=0; i<this.txtData().count; i++){
        //     let value = this.txtData().text[i];
        //     items.push(
        //         <div className="contentsFlex">
        //             <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt="img"/>
        //             <p className="contentsFlexTxt">{value}</p>
        //         </div>
        //     );
        // }

    const tabData = this.txtData2().data;
    const items = tabData.map( (item)=> (
        <div id={`"div${item.id}"`} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="img"/>
                <p className="contentsFlexTxt">{item.text}</p>
         </div>

    ));
        return (
            <div className='contentsDivClass'>
                
                {items}
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }

}

    
export default CContents