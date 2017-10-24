/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react/native';

@observer
export default class Log extends Component {
  render() {
    return (
      <Text>SampleView</Text>
    );
  }
}