import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from 'react-redux';
import colors from '../helpers/Colors';

const Category = (props) => {
    console.log(props.state)
    const [checked, setChecked] = useState(false);
    const { name, updateFilters, state } = props;
    const onPressAdd = () => {
        const categories = state.filters.categories;
        categories.push(name)
        updateFilters({ ...state.filters, categories })
        setChecked(true);
    }

    const onPressRemove = () => {
        let categories = state.filters.categories;
        categories = categories.filter(e => e !== name);
        updateFilters({ ...state.filters, categories })
        setChecked(false);
    }
    return (
        <TouchableOpacity onPress={checked ? onPressRemove : onPressAdd}>
            <Text> {props.counter} </Text>
            <View style={styles.namePlusIcon}>
                <Icon style={styles.icon} name={checked ? "checkcircle" : "checkcircleo"} size={RFValue(29, 898)} color={checked ? colors.lightGreen : colors.grey} />
                <Text style={{
                    fontWeight: '600',
                    fontSize: 20,
                    lineHeight: 23,
                    color: checked ? colors.lightGreen : colors.grey,
                    fontFamily: 'Raleway_400Regular',
                    fontStyle: 'normal',
                    alignItems: 'center',
                }}>
                    {props.name}</Text>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    namePlusIcon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: RFValue(15, 898),
    },
    icon: {
        marginRight: RFValue(15, 898),
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
        updateFilters: (data) => dispatch({ type: 'UPDATE_CATEGORY', payload: data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);