import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from 'react-redux';
import colors from '../helpers/Colors';

const Rating = (props) => {
    console.log(props.state.filters.rating);
    const [checked, setChecked] = useState(false);
    const [ratingState, setRatingState] = useState(0);
    const { updateFilters, state } = props;


    let rating = state.filters.rating;

    const onPress = (id) => {
        if (id == 1 && ratingState == 1) {
            rating = 0;
        }
        else {
            rating = id;
        }
        updateFilters({ ...state.filters, rating })
        setRatingState(rating);
    }

    let stars = ['staro', 'staro', 'staro', 'staro', 'staro'];

    if (ratingState == 0) {
        stars = ['staro', 'staro', 'staro', 'staro', 'staro'];
    }
    else if (ratingState == 1) {
        stars = ['star', 'staro', 'staro', 'staro', 'staro']
    }
    else if (ratingState == 2) {
        stars = ['star', 'star', 'staro', 'staro', 'staro']
    }
    else if (ratingState == 3) {
        stars = ['star', 'star', 'star', 'staro', 'staro']
    }
    else if (ratingState == 4) {
        stars = ['star', 'star', 'star', 'star', 'staro']
    }
    else {
        stars = ['star', 'star', 'star', 'star', 'star']
    }

    return (
        <View style={styles.rating}>
            <TouchableOpacity onPress={() => onPress(1)}>
                <Icon style={styles.icon} name={stars[0]} size={RFValue(29, 898)} color='#46EBD0' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(2)}>
                <Icon style={styles.icon} name={stars[1]} size={RFValue(29, 898)} color='#46EBD0' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(3)}>
                <Icon style={styles.icon} name={stars[2]} size={RFValue(29, 898)} color='#46EBD0' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(4)}>
                <Icon style={styles.icon} name={stars[3]} size={RFValue(29, 898)} color='#46EBD0' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(5)}>
                <Icon style={styles.icon} name={stars[4]} size={RFValue(29, 898)} color='#46EBD0' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: RFValue(10, 898),
    },
    rating: {
        flexDirection: 'row',
        marginTop: RFValue(20, 898),
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
        updateFilters: (data) => dispatch({ type: 'UPDATE_RATING', payload: data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);