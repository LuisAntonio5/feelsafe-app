import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from 'react-redux';
import colors from '../helpers/Colors';

const Category = (props) => {
    console.log(props.state)
    const [toggle, setToggle] = useState(false);
    const { openNow, updateFilters, state } = props;

    const onPressOn = () => {
        let openNow = state.filters.openNow;
        setToggle(true);
        openNow = true;
        updateFilters({ ...state.filters, openNow })
    }

    const onPressOff = () => {
        let openNow = state.filters.openNow;
        setToggle(false);
        openNow = false;
        updateFilters({ ...state.filters, openNow })
    }

    return (
        <TouchableOpacity onPress={toggle ? onPressOff : onPressOn}>
            <IconFA style={styles.iconFlexEnd} name={toggle ? "toggle-off" : 'toggle-on'} size={RFValue(40, 898)} color={colors.lightGreen} />
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    iconFlexEnd: {
        marginLeft: RFValue(20, 898),
    },
});

function mapStateToProps(state) {
    return {
        state: {
            filters: state.filters,
        }

    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateFilters: (data) => dispatch({ type: 'UPDATE_OPENNOW', payload: data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);