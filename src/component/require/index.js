import React, {Component} from 'react'
import './index.css'
import './index_print.css'

export default class Require extends Component{
    constructor(props){
        super(props)
        this.state = {
            textContent: [
                ['#f6ab84', '学历/专业：', '本科、计算机/通信', '中北大学（全日制 一本）', '光信息科学与技术专业'],
                ['#db8471', '技术：', 'HTML、CSS、JS', '掌握良好', '曾深入研究《CSS权威指南》、《JS权威指南》、《JS高程》等大部头书籍，并认真整理'],
                ['#af5b6a', '框架：', 'React、Vue、Angular', '掌握良好', '主要用React（手动实现过Redux、connect函数和thunk中间件源码）、Vue和Angular浅显了解（辅助React的学习）'],
                ['#6c3755', '工程化：', 'webpack', '基本掌握', '我通常用create-react-app命令自动创建项目，按需安装其他插件，如果是原生JS项目，我才手动配置整套webpack'],
                ['#452243', '工作经验：', '1~3年', '一年经验', '自学编程，上半年开始了解行业知识，下半年辞职自学5个月，期间一直看书看视频，模仿一些成熟的项目']
            ]
        }
    }
    render(){
        return (
            <div className='require_wrapper' id='require'>
                <h2>对标公司</h2>
                <ul className='header'>
                    <li className='headLi' key='0'>
                        <div className='headli_lf'>公司要求（关键字）</div>
                        <div className='headli_rt'>我的个人情况</div>
                    </li>
                    {this.state.textContent.map((item, index)=>{
                        return (
                            <li key={index+1} >
                                <RequireItem index={index+1} color={item[0]} 
                                    keyWord={item[1]} companyRequire={item[2]} 
                                    mySituationTop={item[3]} mySituationBottom={item[4]} 
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class RequireItem extends Component{
    render(){
        let {index, color, keyWord, companyRequire, mySituationTop, mySituationBottom} = this.props
        return (
            <div className='requireItem'>
                <div className='keyWord' style={{'backgroundColor': color}} >
                    <p className='index'>{index}、</p>
                    <p className='content'>{keyWord}</p>
                </div>
                <div className='companyRequire'>{companyRequire}</div>
                <div className='mySituation'>
                    <p>{mySituationTop}</p>
                    <p>{mySituationBottom}</p>
                </div>
            </div>
        )
    }
}