import React, {Component} from 'react'
import './index.css'
import './index_print.css'

export default class WorkItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            workItem: [
                [
                    '163music', '（仿）网易云音乐', 
                    '描述：这是一个音乐播放器项目，它实现了搜索歌曲、播放歌曲、播放歌词、添加歌单等功能。   '+ 
                    '技术：使用原生JS处理DOM操作，使用MVC进行模块化，使用ES6类精简代码。   ' +
                    '亮点：手机端播放，使用@media媒体查询做到响应式布局',
                    'https://zhangzhiguo010.github.io/163-Music/src/index.html', 'https://github.com/zhangzhiguo010/163-Music'
                ],
                [
                    'canvas画板', 'canvas画板', '描述：这是一个关于canvas的简易画板。功能上实现了画画、清空画布、作品下载等功能，画笔的颜色和粗细可选。'+
                    '亮点：手机端和电脑端都可以使用', 
                    'https://zhangzhiguo010.github.io/drawingBoard-2018-11/build/index.html', 'https://github.com/zhangzhiguo010/drawingBoard-2018-11'
                ],
                [   
                    '皮卡丘', '动态生成皮卡丘', '描述：该作品可在页面上实现代码和作品的同步展示，快中慢三档速度可手动调节。', 
                    'https://zhangzhiguo010.github.io/pikachu-2018/build/index.html', 'https://github.com/zhangzhiguo010/pikachu-2018'
                ],
                [
                    'keyboard', '键盘特效', '简介：这是用原生JavaScript写的一个键盘特效，点击键盘上按键，页面会自动打开，网页上键盘对应的网址可以随意编辑', 
                    'https://zhangzhiguo010.github.io/keyboard-2018/index.html', 'https://github.com/zhangzhiguo010/keyboard-2018'
                ],
                [
                    'chat聊天', '即时聊天', '描述：这是一个及时聊天的项目，功能上实现了登录、注册、添加好友、及时聊天等。  '+
                    '技术：前端使用React框架，用到了react-redux、react-router、thunk中间件等。  '+
                    '亮点：界面样式模仿微信客户端', 
                    'https://zhangzhiguo010.github.io/WeChat-2018/build/index.html', 'https://github.com/zhangzhiguo010/WeChat-2018'
                ],
                [
                    '轮播', '无缝轮播组件', '简介：这是用原生JavaScript封装的一个无缝轮播组件，使用者只需引入文件后调用函数并传入特定控制参数即可', 
                    'https://zhangzhiguo010.github.io/scrollPicture-2018/index.html', 'https://github.com/zhangzhiguo010/scrollPicture-2018'
                ]
            ]
        }
    }

    render(){
        return (
            <div className='workItem_wrapper' id='workItem'>
                <h2>项目作品</h2>
                <ul>{
                    this.state.workItem.map((item, index)=>{
                        return <li key={index}><WorkItemList name={item[0]} title={item[1]} content={item[2]} previewLink={item[3]} codeLink={item[4]}/></li>
                    })
                }</ul>
            </div>
        )
    }
}

class WorkItemList extends Component{
    render(){
        let {name, title, content, previewLink, codeLink} = this.props
        return (
            <div className='wil_wrapper'>
                <figure className='wil_lf'>
                    <img src={require(`../../img/${name}.jpg`)} alt=""/>
                </figure>
                <div className='wil_rt'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <div className='outsideLink'>
                        <a href={previewLink} target='_blank' className='previewLink'>预览链接</a>
                        <a href={codeLink} target='_blank' className='codeLink'>代码链接</a>
                        {/* {
                            name==='163music' ? <a target='_blank' href='https://pinggu010.com/src/admin.html' className='adminPreview'>admin后台管理页预览</a> : null
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}