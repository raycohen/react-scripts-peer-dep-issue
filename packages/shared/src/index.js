import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    const time = moment.tz("2018-10-01 3:00", "America/New_York");

    return (
      <div className={styles.test}>
        Example Component: {text}
        <br/>
        {time.toString()}
      </div>
    )
  }
}
