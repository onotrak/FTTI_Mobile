import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {Icon} from 'native-base';

const CustomHeader = ({title, onBack, backgroundColor}) => {
    return (
        <View style={[style.parent, {backgroundColor: !backgroundColor ? '#2B2F85':backgroundColor}]}>
            {
                onBack ?
                    <View style={{width: '10%', justifyContent: 'center'}}>
                        {
                            Platform.OS === 'ios' ?
                                <TouchableOpacity onPress={onBack}>
                                    <Icon name="ios-arrow-back" type="Ionicons"
                                          style={{paddingLeft: 5, color: '#fff'}}/>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={onBack}>
                                    <Icon name="arrow-back" style={{color: '#fff'}}/>
                                </TouchableOpacity>
                        }
                    </View>
                    : <View style={{width: '10%', justifyContent: 'center'}}/>
            }
            <View style={{marginLeft: 5, justifyContent: 'center', width: '80%'}}>
                <Text numberOfLines={1} style={{alignSelf: 'center', color: '#fff'}}>{title}</Text>
            </View>
        </View>
    )
};

export default CustomHeader;

const style = StyleSheet.create({
    parent: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,        
        flexDirection: 'row',
        alignItems: 'center'
    }
});
