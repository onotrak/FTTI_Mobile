import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
} from 'react-native'
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { registerMahasiswa } from '../../services/api';
import CustomHeader from '../../components/CustomHeader';
import AppVersion from '../../../app.json';
// import { showToast } from '../../helpers/Main'

export default class Register extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            nim: '',
            nama: '',
            nohp: '',
            password: '',
        }
    }
    
    componentDidMount = () => {
      
    }

    componentWillReceiveProps = (nextProps) => {
      
    }
    
    render() {
        return (
            <Container>
                <CustomHeader
                    title='FTTI Mobile'
                    onBack={()=> Actions.pop()}
                />
                <Content style={styles.content}>
                    <View>
                        <Text style={styles.txtTitle}>
                            Register Mahasiswa
                        </Text>
                        <TextInput
                            style={styles.txtInput}
                            placeholder= 'Masukan Nama Lengkap Mahasiswa'
                            autoCapitalize= 'words'
                            onChangeText= {(text)=> this.setState({nama: text})}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder= 'Masukan Nomor Hp'
                            keyboardType= 'phone-pad'
                            autoCapitalize= 'none'
                            onChangeText= {(text)=> this.setState({nohp: text})}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder= 'Masukan NIM (ex: 110123)'
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
                            onPress={ () => this._onRegisterPress()}
                        >
                            <Text style={styles.txtLogin}>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=> Actions.Login()}
                        >
                            <Text style={styles.txtView}>
                                Klik disini untuk Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
                    <View style={{marginBottom: 5}}>
                        <Text style={styles.txtVersion}>
                            Version {AppVersion.version}
                        </Text>
                        <Text style={styles.txtVersion}>
                            React Native
                        </Text>
                    </View>
            </Container>
        )
    }

    _onRegisterPress = () => {
        const { nim, nama, nohp, password } = this.state

        if(nim === '' || nama === '' || nohp === ''){
            return ToastAndroid.show('Data Register Belum Lengkap !', ToastAndroid.SHORT);
            // return showToast('Data Register Belum Lengkap !', 'warning')
        }
        if(password.length < 4){
            return ToastAndroid.show('Password Minimal 4 Karakter !', ToastAndroid.SHORT);
            // return showToast('Password Minimal 4 Karakter !', 'warning')
        }

        const body = {
            nim,
            nama,
            nohp,
            password: password,
        }
        registerMahasiswa(body);
        Actions.Login({typeUser: 'mahasiswa'})
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
        marginBottom: 10,
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
