import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform, Image} from 'react-native';
import {Icon} from 'native-base';

const CustomHeader = ({title, onBack, backgroundColor}) => {
    return (
        <View style={[style.parent, {backgroundColor: !backgroundColor ? '#036e64':backgroundColor}]}>
            {
                onBack ?
                    <View style={{width: '15%', justifyContent: 'center'}}>
                        {
                            Platform.OS === 'ios' ?
                                <TouchableOpacity onPress={onBack}>
                                    <Image 
                                        source={require('../assets/icons/back.png')}
                                        style={{width: 19, height: 19, marginRight: 10, marginLeft: 10, tintColor: 'white'}} resizeMode="contain"/>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={onBack}>
                                    <Image 
                                        source={require('../assets/icons/back.png')}
                                        style={{width: 19, height: 19, marginRight: 10, marginLeft: 10, tintColor: 'white'}} resizeMode="contain"/>
                                </TouchableOpacity>
                        }
                    </View>
                    : <View style={{justifyContent: 'center'}}/>
            }
            <View style={{marginLeft: 10, width: '80%'}}>
                <Text numberOfLines={1} style={{ color: '#fff', fontSize: 20, fontWeight: '500'}}>{title}</Text>
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
