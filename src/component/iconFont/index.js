import React, { Component } from 'react'
import classnames from 'classnames'

class Icon extends Component{
    render(){
        let {type} = this.props
        let classNames = classnames({
            'iconfont': true,
            ['icon-' + type]: true
        })
        
        return <span className={classNames}></span>
    }
}

export default Icon