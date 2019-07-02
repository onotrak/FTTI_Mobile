import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import * as firebase from 'firebase';

export default class LoginMhs extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nim: '',
            password: ''
        }
    }

    componentDidMount = () => {
      
    }
    
    componentWillReceiveProps = (nextProps) => {
      
    }
    
    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    { 
                        this.props.typeUser === 'Mahasiswa' ? 
                        <View>
                            <Text style={styles.txtTitle}>
                                Login Mahasiswa
                            </Text>
                            <TextInput
                                style={styles.txtInput}
                                placeholder= 'Masukan NIM'
                                keyboardType= 'phone-pad'
                                autoCapitalize= 'none'
                                onChangeText= {(text)=> this.setState({nim: text})}
                            />
                            <TextInput
                                style={styles.txtInput}
                                placeholder= 'Masukan password'
                                keyboardType= 'phone-pad'
                                autoCapitalize= 'none'
                                onChangeText= {(text)=> this.setState({password: text})}
                            />
                            <TouchableOpacity 
                                style={styles.btn}
                                onPress={ () => this._onLoginPress()}
                            >
                                <Text style={styles.txtLogin}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={Actions.register}
                            >
                                <Text style={styles.txtView}>
                                    Klik disini untuk Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <Text style={styles.txtTitle}>
                                Login Dosen
                            </Text>
                            <TextInput
                                style={styles.txtInput}
                                placeholder= 'Masukan username'
                                plac
                                autoCapitalize= 'none'
                            />
                            <TextInput
                                style={styles.txtInput}
                                placeholder= 'Masukan password'
                                autoCapitalize= 'none'
                            />
                            <TouchableOpacity 
                                style={styles.btn}
                                // onPress={Actions}
                            >
                                <Text style={styles.txtLogin}>LOGIN</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtView}>
                                Belum Mendaftar?
                            </Text>
                            <Text style={styles.txtView}>
                                Hubungi Admin Untuk Register
                            </Text>
                        </View>
                    }
                </Content>
                <View style={{marginBottom: 5}}>
                    <Text style={styles.txtVersion}>
                        Version 1.1.1
                    </Text>
                    <Text style={styles.txtVersion}>
                        React Native
                    </Text>
                </View>
            </Container>
        )
    }

    _onLoginPress = () => {

    } 
}

const styles = StyleSheet.create({
    content: {
        margin: 16,
        // backgroundColor: '#036e64',
        // borderRadius: 5,
        // alignContent: 'center'
    },
    txtTitle: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        color: '#036e64'
    },
    txtInput: {
        width: window.width, 
        // height: 20, 
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    btn: {
        width: window.width, 
        height: undefined, 
        marginRight: 20,
        marginLeft: 20,
        padding: 13,
        marginBottom: 20,
        backgroundColor: '#036e64',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtLogin: {
        color: 'white'
    },
    txtView: {
        textAlign: 'center',
        fontSize: 15,
        color: '#036e64'
    },
    txtVersion: {
        textAlign: 'center',
        fontSize: 10,
        color: 'grey',
    },
})
