import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Image,
    TouchableOpacity,
    BackHandler,
} from 'react-native'
import { Container, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class WellcomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            loadingState: false,
        }
    }

    async componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(props) {

    }

    componentWillUnmount() {  
      	// BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    // handleBackPress = () => {
	// 	Actions.MainActivity()
	// 	return true;
	// }

    render() {
        return (
            <Container>
                <View style={styles.txtView}>
                        <Text style={styles.txtStyle}> Selamat Datang Di </Text>
                        <Text style={styles.txtStyle}> FTTI Mobile </Text>
                        <Text style={styles.txtStyle}> Application </Text>
                    </View>
                    <View style={styles.imgView}>
                        <Image 
                            style={styles.imgLogo}
                            source={require('./../assets/images/images/unjani_logo.png')}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={Actions.switchLogin()}
                        >
                            <Text style={styles.txtBtn}> Lanjutkan </Text>
                        </TouchableOpacity>
                    </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default (WellcomeScreen);

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
    content: {
        flex: 5,
        margin: 16,
        backgroundColor: '#036e64',
        borderRadius: 5,
        alignContent: 'center'
    },
    txtView: {
        flex: 1.2,
        alignContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    txtStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF'
    },
    imgView: {
        flex: 3,
        margin: 10,
    },
    imgLogo: {
        width:window.width, 
        height:undefined, 
        aspectRatio:900/650, 
        resizeMode:'stretch',
    },
    btnView: {
        flex: 0.7,
        marginTop: 30,
        marginRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    btn: {
        width: 120,
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: '#0ad7c4',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtn: {
        fontWeight: 'bold',
        color: '#036e64'
    },
});
