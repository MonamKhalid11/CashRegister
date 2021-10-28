import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = (props) => {
    console.log("props in picker", props)
    return (
        <DateTimePicker
            testID="dateTimePicker"
            value={props.value}
            mode={props.mode}
            display={props.display}
            onChange={props.onChange}
        />
    );
};

export default DatePicker
