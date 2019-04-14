import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';

const CustomAlert = ({onCancel, onConfirm, show, onOpened, title, text}) => {
    return (
        <Modal
            /*
            isOpen={ show }
            onOpened={onOpened}
            onClosed={onCancel}
            style={{ padding: 15, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
            */
            animationType="slide"
            visible={show}
            onRequestClose={onCancel}
            transparent={true}
            supportedOrientations={['portrait', 'landscape']}
            style={{flex: 1, alignSelf: 'center'}}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    {/* <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{ title ? title:'Alert' }</Text> */}
                    <Text
                        style={{
                            alignSelf: 'center',
                            marginBottom: 10,
                            fontWeight: 'bold'
                        }}>{text ? text : 'Do you want to change tomorrow ?'}</Text>
                    <View style={{
                        width: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <TouchableOpacity
                            style={{
                                padding: 10,
                                borderRadius: 3,
                                backgroundColor: '#f4f4f4',
                                marginRight: 5,
                                width: '40%'
                            }}
                            onPress={onCancel}
                        >
                            <Text style={{alignSelf: 'center', color: '#2B2F85', fontWeight: 'bold'}}>NOPE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{padding: 10, borderRadius: 3, backgroundColor: '#2B2F85', width: '40%'}}
                            onPress={onConfirm}
                        >
                            <Text style={{alignSelf: 'center', color: '#fff', fontWeight: 'bold'}}>YES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default CustomAlert;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 10
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 15,
    }
});
