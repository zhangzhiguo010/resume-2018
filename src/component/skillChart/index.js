import React, {Component} from 'react'
import './index.css'
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import './index.css'
import './index_print.css'

export default class SkillChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: [
                ['HTML5 & CSS3 & JavaScript', '能独立制作精美网页，掌握HTML5语义化，掌握CSS3动画、过渡效果等常用技术'],
                ['移动端页面', '掌握百分比、弹性和响应式等布局，知道他们的优劣短长，可在各种尺寸设备上正确选用'],
                ['前端框架', '知晓前端代码风格的变迁历程，了解三大框架间的不同，目前用的是React，Redux掌握到源码级别'],
                ['其他信息', '掌握jQuery、HTTP传输协议、简单的命令行、基本的webpack使用，平常使用GitHub仓库存储代码']
            ]
        }
    }
    componentDidMount(){
        HighchartsMore(Highcharts)
        Highcharts.chart('skillChart', {
            chart: {
                polar: true,
                type: 'line'
            },
            pane: {
                size: '80%'
            },
            xAxis: {
                categories: ['工程化&代码风格', 'React&Redux', 'HTTP', '算法&数据结构', 'JavaScript', 'HTML&CSS'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',

            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },
            series: [{
                name: '学习目标',
                data: [100, 100, 100, 100, 100, 100],
                pointPlacement: 'on',
                color: '#efe5ac',
    
                
            }, {
                name: '掌握情况',
                data: [110, 90, 80, 70, 120, 120],
                pointPlacement: 'on',
                color: 'red'
            }],
            credits:{
                enabled: false // 禁用版权信息
           },
        });
    }
    render(){
        return (
            <div className='skillChart_wrapper' id='skill'>
                <h2>技能补充</h2>
                <main>
                    <div className='skillDescription'>{
                        this.state.content.map((item, index)=>{
                            return <SkillChartItem key={index} title={item[0]} detail={item[1]} />
                        })
                    }</div>
                    <div id='skillChart' className='skillChart'></div>
                </main>
            </div>
        )
    }
}

class SkillChartItem extends Component{
    render(){
        let {title, detail} = this.props
        return (
            <div className='skill_row'>
                <h3>{title}</h3>
                <p>{detail}</p>
            </div>
        )
    }
}