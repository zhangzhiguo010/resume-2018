import React, {Component} from 'react'
import TopNavBar from './component/topNavBar/index'
import Card from './component/card/index'
import Require from './component/require/index'
import WorkItem from './component/workItem/index'
import SkillChart from './component/skillChart/index'
import Message from './component/message/index'
import './App.css'
import './App_print.css'


export default class App extends  Component{
    render(){
        return (
            <div className='app_wrapper'>
                <TopNavBar />
                <figure className='banner'></figure>
                <div className='main'>
                    <Card />
                    <Require />
                    <SkillChart />
                    <WorkItem />
                    <Message />
                </div>
            </div>
        )
    }
}