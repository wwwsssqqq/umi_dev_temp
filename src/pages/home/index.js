/**
 * title: 首页
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import {Link} from "umi"
import styles from './index.less'


@connect(() => ({}))


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  render() {
    
    return (
     <div>
       <Link to={"/test"}>首页</Link>
     </div>
    );
  }
}

Home.propTypes = {

}

Home.defaultProps = {

}


export default Home

