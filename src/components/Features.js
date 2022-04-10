import React from 'react';
import {Component} from 'react';
import './Features.css';
import jsonData2 from '../res/text2.json'
class Features extends Component { //komponent klasowy
  constructor() { //mapowanie 1
    super()
    this.state = {msg:'Most popular swimming techniques'}
    this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
    const imgContext = require.context ('../res/', false, /\.jpg$/);
    let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) => {
            const cname = imgContext(file);
            const label = file.slice(2,-4);
            img[label]= cname;
            return img;
        }, {});
        
  }
    render() {
      const tabData = this.txtData2().data;
    const items = tabData.map( (item)=> (
        <div id={`"div${item.id}"`} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="img" 
                onLoad={(e) => {console.log('Img Loaded'); }} 
                onError={(e) => {console.log('Img Failed'); }} 
                onDoubleClick={(e) => {console.log('Double Click'); }} 
                onDrag={(e) => {console.log('On Drag'); }} 
                onDrop={(e) => {console.log('On Drop'); }} 
                onDragEnd={(e) => {console.log('On DragEnd'); }}
                onDragStart={(e) => {console.log('On DragStart'); }}
                onDragEnter={(e) => {console.log('On DragEnter'); }}
               
                />
                <p className="contentsFlexTxt_1">{item.text1}</p>
                <p className="contentsFlexTxt">{item.text}</p>
                
         </div>
    ));
    return (
      <div className='contentsDivClass'>  
        <h1 className="title">{this.state.msg}</h1>
         {items}
      </div>
    )
    }
};
export default Features;