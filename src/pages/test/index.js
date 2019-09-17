/**
 * title: 测试页
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import {Link} from "umi"
import styles from './index.less'


@connect(() => ({}))
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
    return (
     <div>
        <Link to={"/home"} >
         测试页
        </Link>  
     </div>
    );
  }
}

Test.propTypes = {

}

Test.defaultProps = {

}


export default Test

