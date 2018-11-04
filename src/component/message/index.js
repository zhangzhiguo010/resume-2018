import React, {Component} from 'react'
import {save, fetchAll} from '../init/initLeanCloud'
import './index.css'
import './index_print.css'

export default class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            visitorInput: '',
            visitorMessage: []
        }
    }
    componentWillMount(){
        fetchAll('MyResume').then((response)=>{
            this.setState({
                visitorMessage: response
            })
        })
        this.handleInput = (event)=>{
            this.setState({
                visitorInput: event.target.value
            })
        }
        this.handleSubmit = (ev)=>{
            let {visitorInput} = this.state
            ev.preventDefault()
            this.state.visitorInput.trim() && save('MyResume', {message: visitorInput}).then((response)=>{
                this.setState({
                    visitorInput: ''
                })
                // this.setState({
                //     visitorMessage: this.state.visitorMessage.push(response)
                // })
            })
        }

    }
    render(){
        let {visitorInput, visitorMessage} = this.state   
        return (
            <div className='message_wrapper' id='message'>
                <h2>留言板</h2>
                <div className='visitorInput'>
                    <textarea required value={visitorInput} onChange={this.handleInput}></textarea>
                    <input type="submit" value='发表评论' onClick={this.handleSubmit}/>
                </div>
                <ul>{
                    visitorMessage.slice(-5).reverse().map((item)=>{
                        let id = item.id
                        let {message} = item.attributes
                        return <li key={id}><MessageItem message={message} /></li>
                    })
                }</ul>  
            </div>
        )
    }
}

class MessageItem extends Component{
    render(){
        let {message} = this.props
        return (
            <div className='messageItem'>
                <div className='photo'>
                    <i className="iconfont icon-visitor"></i>
                </div>
                <div className='visitor'>
                    <p className='visitor_name'>匿名评论</p>
                    <p className='visitor_message'>{message}</p>
                </div>
            </div>
        )
    }
}