import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
} from 'react-native'
import { Container, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class MainActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
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
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={Actions.welcome}
                        >
                            <Text style={styles.txtView}>
                                Welcome Menu
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={Actions.switchLogin}
                        >
                            <Text style={styles.txtView}>
                                Login Switch
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=> Actions.Login({typeUser: 'dosen'})}
                        >
                            <Text style={styles.txtView}>
                                Login Dosen
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=>Actions.Login({typeUser: 'mahasiswa'})}
                        >
                            <Text style={styles.txtView}>
                                Login Mahasiswa
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={Actions.register}
                        >
                            <Text style={styles.txtView}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        margin: 16,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#0ad7c4',
        borderWidth: 2,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    btnView: {
        margin: 10,
        // alignItems: 'center',
    },
    btn: {
        width:window.width, 
        height:undefined, 
        padding: 10,
        backgroundColor: '#036e64',
        borderRadius: 30,
        borderColor: '#0ad7c4',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtView: {
        fontWeight: 'bold',
        color: '#ffffff'
    }

})
