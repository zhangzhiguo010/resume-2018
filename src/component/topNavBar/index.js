import React, {Component} from 'react'
import TWEEN from '@tweenjs/tween.js'
import classnames from 'classnames'
import './index.css'
import './index_print.css'

export default class TopNavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            topNavBar_active: false,
            navList: [
                ['card', '个人简介'],
                ['require', '对标公司'],
                ['skill', '技能补充'],
                ['work', '项目作品'],
                ['message', '留言板']
            ]
        }
    }
    componentWillMount(){
        window.onscroll = (ev)=>{   // 滚动条滚动时触发（区别于滚轮的滚动）
            window.scrollY > 0 ? this.setState({topNavBar_active: true}) : this.setState({topNavBar_active: false})
        }   

        function animate(time) {
            requestAnimationFrame(animate)
            TWEEN.update(time)
        }
        requestAnimationFrame(animate)

        this.handleClick = (ev)=>{
            ev.preventDefault()

            // 移动距离：targetTop - currentTop
            let currentTop = window.scrollY
            let targetTop = document.getElementById(ev.currentTarget.getAttribute('data-name')).offsetTop - 80
            // 配合Tween库做缓动动画
            let time = Math.abs((targetTop-currentTop)/100)*500 > 800 && 500
            let coords = { y: currentTop }
            new TWEEN.Tween(coords) 
                .to({ y: targetTop }, time) 
                .easing(TWEEN.Easing.Quartic.Out) 
                .onUpdate(()=>{window.scrollTo(0, coords.y)})
                .start(); 
        }     
    }
    render(){
        let topNavBarClass = classnames({
            'topNavBar_wrapper': true,
            'topNavBar_active': this.state.topNavBar_active

        })
        return (
            <div className={topNavBarClass}>
                <div className="logo">
                    <span className='resumeHint'>RS</span>
                    <span className='nameHint'>zzg</span>
                </div>
                <ul className="nav" ref={(content)=>{return this.navRef=content}}>{
                    this.state.navList.map((item, index)=>{
                        return (
                            <li key={index} data-name={item[0]} onClick={this.handleClick}>
                                <NavList content={item[1]} />
                            </li>
                        )
                    })
                }</ul>
            </div>
        )
    }
}

class NavList extends Component{
    render(){
        let {content} = this.props
        return <a href="#">{content}</a>
    }
}