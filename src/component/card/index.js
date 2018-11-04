import React, {Component} from 'react'
import './index.css'
import './index_print.css'

export default class Card extends Component{
    render(){
        return (
            <div className='card_wrapper' id='card'>
                <main>
                    <figure className='main_lf'>
                        <img src={require('../../img/photo.jpg')} alt="展示头像" />
                    </figure>
                    <div className='main_rt'>
                        <a href={require('../../img/张治国 求职前端开发工程师.pdf')} download className='download_resume'>下载简历</a>
                        <span className="welcome">
                            Hello <span className="triangle"></span>
                        </span>
                        <h1 className='myName'>张治国</h1>
                        <p className='myIntroduce'>前端开发工程师</p>
                        <hr/>
                        <dl>
                            <dt>年龄</dt>
                                <dd>26</dd>
                            <dt>籍贯/求职地</dt>
                                <dd>北京</dd>
                            <dt>邮箱</dt>
                                <dd>360737368@qq.com</dd>
                            <dt>手机/微信号</dt>
                                <dd>15611563050</dd>
                            <dt>期望薪资</dt>
                                <dd>7k ~ 9k</dd>
                        </dl>
                    </div>
                </main>

                <footer className="media">
                    <a href="#">
                        <i className="iconfont icon-github"></i>
                    </a>
                    <a href="#">
                        <i className="iconfont icon-weibo"></i>
                    </a>
                    <a href="#">
                        <i className="iconfont icon-qq"></i>
                    </a>
                </footer>
            </div>
        )
    }
}