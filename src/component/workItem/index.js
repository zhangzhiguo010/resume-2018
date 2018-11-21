import React, {Component} from 'react'
import './index.css'
import './index_print.css'

export default class WorkItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='worksList' id='work'>
                <h2>项目作品</h2>
                <ul>
                    <li>
                        <figure>
                            <div className="img work1"></div>
                            <figcaption>
                                <h3>网易云音乐(手机端)</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">这是一个音乐播放器项目</p>
                                    <p className="descript-content">它实现了搜索歌曲、播放歌曲、播放歌词、添加歌单等功能</p>
                                    <p>技术：</p>
                                    <p className="descript-content">前端：使用原生JavaScript来处理DOM操作，使用MVC框架进行模块化</p>
                                    <p className="descript-content">后台：在七牛云存储歌曲和图片,leancloud存储歌单和歌曲名</p>
                                    <p>亮点：</p>
                                    <p className="descript-content">手机端播放，使用了@media媒体查询做到响应式布局</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://pinggu010.com/src/index.html" target="_blank">
                                        <span className="button">手机端页面</span>
                                    </a>
                                    {/* <a href="" target="_blank">
                                        <span className="button">管理员页面</span>
                                    </a> */}
                                    <a href="https://github.com/zhangzhiguo010/163-Music" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <div className="img work2"></div>
                            <figcaption>
                                <h3>即时通讯(React框架)</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">这是一个即时聊天项目</p>
                                    <p className="descript-content">它实现了登录、注册、添加好友、即时聊天等功能</p>
                                    <p>技术：</p>
                                    <p className="descript-content">前端：使用react框架用到React、React-redux、React-router等技术</p>
                                    <p className="descript-content">后台：调用环信SDK提供的API来进行登录注册，添加好友，消息收发</p>
                                    <p>亮点：</p>
                                    <p className="descript-content">界面样式模仿微信客户端。</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://zhangzhiguo010.github.io/WeChat-2018/build/index.html#/login"
                                        target="_blank">
                                        <div className="button">预览链接</div>
                                    </a>
                                    <a href="https://github.com/zhangzhiguo010/WeChat-2018" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <div className="img work3"></div>  
                            <figcaption>
                                <h3>小小画板</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">这是一个小小画板</p>
                                    <p className="descript-content">它实现了在线画画，选择画笔颜色，粗细以及保存图画到本地等功能</p>
                                    <p> 技术：</p>
                                    <p className="descript-content">使用原生的Canvas标签</p>
                                    <p> 亮点：</p>
                                    <p className="descript-content">手机端、电脑端都可以使用哦！</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://zhangzhiguo010.github.io/drawingBoard-2018-11/build/index.html" target="_blank">
                                        <div className="button">预览链接</div>
                                    </a>
                                    <a href="https://github.com/zhangzhiguo010/drawingBoard-2018-11" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <div className="img work4"></div>
                            <figcaption>
                                <h3>动态生成皮卡丘</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">这是一只用css画的皮卡丘.</p>
                                    <p className="descript-content">你可以看到皮卡丘的生成过程.</p>
                                    <p> 技术：</p>
                                    <p className="descript-content">使用CSS3动画。</p>
                                    <p> 亮点：</p>
                                    <p className="descript-content">这是一只萌萌的皮卡丘！</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://zhangzhiguo010.github.io/pikachu-2018/build/index.html" target="_blank">
                                        <div className="button">预览链接</div>
                                    </a>
                                    <a href="https://github.com/zhangzhiguo010/pikachu-2018" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <div className="img work5"></div>
                            <figcaption>
                                <h3>轮播图（自己封装的组件）</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">模仿爱奇艺的轮播图</p>
                                    <p className="descript-content">它实现了自动轮播、鼠标移入悬停，移出继续自动播放等功能</p>
                                    <p> 亮点：</p>
                                    <p className="descript-content">我封装成了组件，调用函数传入控制参数即可使用</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://zhangzhiguo010.github.io/scrollPicture-2018/index.html" target="_blank">
                                        <div className="button">预览链接</div>
                                    </a>
                                    <a href="https://github.com/zhangzhiguo010/scrollPicture-2018" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <div className="img work6"></div>
                            <figcaption>
                                <h3>小小导航</h3>
                                <hr />
                                <div className="descript">
                                    <p>描述：</p>
                                    <p className="descript-content">这是一个很简洁的导航页面</p>
                                    <p> 亮点：</p>
                                    <p className="descript-content">你可以根据自己喜好编辑各个按键访问的网站</p>                               
                                </div>
                                <hr />
                                <div className="works-footer">
                                    <a href="https://zhangzhiguo010.github.io/keyboard-2018/index.html" target="_blank">
                                        <div className="button">预览链接</div>
                                    </a>
                                    <a href="https://github.com/zhangzhiguo010/keyboard-2018" target="_blank">
                                        <div className="button">源码链接</div>
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        )
    }
}