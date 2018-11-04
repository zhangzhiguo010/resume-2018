import React, {Component} from 'react'
import './index.css'
import './index_print.css'

export default class WorkItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            workItem: [
                ['1层', '手机端网易云音乐', '简介：这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述'],
                ['2层', '手机端即时聊天', '简介：这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述'],
                ['3层', 'xxx', '简介：这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述'],
                ['4层', 'xxx', '简介：这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述，这里是一段描述'],
            ]
        }
    }
    render(){
        return (
            <div className='workItem_wrapper' id='workItem'>
                <h2>项目展示</h2>
                <ul>{
                    this.state.workItem.map((item, index)=>{
                        return <li key={index}><WorkItemList name={item[0]} title={item[1]} content={item[2]} /></li>
                    })
                }</ul>
            </div>
        )
    }
}

class WorkItemList extends Component{
    render(){
        let {name, title, content} = this.props
        return (
            <div className='wil_wrapper'>
                <figure className='wil_lf'>
                    <img src={require(`../../img/${name}.jpg`)} alt=""/>
                </figure>
                <div className='wil_rt'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}