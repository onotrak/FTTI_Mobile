import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
} from 'react-native'
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

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
            <Container style={styles.container}>
                {/* <Content> */}
                    <View style={styles.cardView}>
                        <View style={styles.txtView}>
                            <Text style={styles.txtTitle}>
                                LOGIN
                            </Text>
                        </View>
                        <View style={styles.btnView}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=> Actions.Login({typeUser: 'Dosen'})}
                            >
                                <Text style={styles.txtBtn}>
                                    Dosen
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={()=>Actions.Login({typeUser: 'Mahasiswa'})}
                            >
                                <Text style={styles.txtBtn}>
                                    Mahasiswa
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                {/* </Content> */}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
        // alignItems: 'center',
    },
    cardView: {
        height: 130, 
        justifyContent: 'center',
        borderRadius: 18,
        margin: 30,
        //shadow
        backgroundColor: 'white',
        elevation: 5,
        borderColor: '#BEBEBE',
        shadowColor: '#BEBEBE',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    txtView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    txtTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#036e64'
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    btn: {
        flex: 0.5,
        width: 120,
        height: 40,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: '#0ad7c4',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtn: {
        color: '#036e64'
    },
})
