import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Copyright (c) 2018-present, zhouwenqi, Inc.
 * All rights reserved.
 * 
 * WqToolbar
 *
 * @author zhouwenqi
 * @version 1.0.1
 */

const wqToolsBarSvgIcos = [];

export default class WqToolbar extends React.Component {
    constructor(props) {
        super(props);        
        this.initTools();
        this.state = {
            svgs:wqToolsBarSvgIcos
        }
    }
    initTools(){
        wqToolsBarSvgIcos.push({
            title:"fontFamily",
            id:"#wqToolsIcoFontFamily"
        });  
        wqToolsBarSvgIcos.push({
            title:"fontSize",
            id:"#wqToolsIcoFontSize"
        });
        wqToolsBarSvgIcos.push({
            title:"fontColor",
            id:"#wqToolsIcoFontColor"
        });
        wqToolsBarSvgIcos.push({
            title:"Bold",
            id:"#wqToolsIcoBold"
        });
        wqToolsBarSvgIcos.push({
            title:"Italic",
            id:"#wqToolsIcoItalic"
        });      
        wqToolsBarSvgIcos.push({
            title:"Underline",
            id:"#wqToolsIcoUnderline"
        });
        wqToolsBarSvgIcos.push({
            title:"Strikeline",
            id:"#wqToolsIcoStrikeline"
        });        
        wqToolsBarSvgIcos.push({
            title:"List-Ol",
            id:"#wqToolsIcoListOl"
        });
        wqToolsBarSvgIcos.push({
            title:"List-Ul",
            id:"#wqToolsIcoListUl"
        });
    }
    render() {
        var topToolsBar = [];
        this.state.svgs.map((item,index) => {
            topToolsBar.push(<div key={index}><svg
            viewBox="0 0 1024 1024"><use xlinkHref={item.id} /></svg></div>);
        });

        return <div className="wq-toolbar">                    
            {topToolsBar}
            </div>
    }
}