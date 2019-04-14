import React, {Component} from 'react';
import {
    Platform,
    StatusBar,
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Linking
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Root} from 'native-base';
import {connect} from 'react-redux';

// import menu screens
import MainMenu from './src/screens/MainMenu/Main';
import WellcomeScreen from './src/screens/WellcomeScreen';
import Wellcome from './src/screens/WellcomeScreen';
import MainActivity from './src/screens/MainActivity';
import SwitchLogin from './src/screens/Profile/SwitchLogin';
import LoginDosen from './src/screens/Profile/LoginDosen'
import LoginMhs from './src/screens/Profile/LoginMhs'
import Register from './src/screens/Profile/Register';

class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Root>
                    <StatusBar
                        barStyle='light-content'
                        translucent={false}
                    />
                    <Router>
                        <Scene key="root">
                            <Scene key="WellcomeScreen" component={WellcomeScreen} hideNavBar/>
                            <Scene key="MainMenu" component={MainMenu} hideNavBar/>
                            <Scene key="main" component={ MainActivity } title= "Main Activity" initial={ true }/>
                            <Scene key="welcome" component={ Wellcome } title= "Welcome"/>
                            <Scene key="switchLogin" component={ SwitchLogin } title= "Login"/>
                            <Scene key="loginDosen" component={ LoginDosen } title= "Login Dosen"/>
                            <Scene key="loginMhs" component={ LoginMhs } title= "Login Mahasiswa"/>
                            <Scene key="register" component={ Register } title= "Register"/>
                        </Scene>
                    </Router>
                </Root>
            </SafeAreaView>

        );
    }
}

// export default Routing;
const mapStateToProps = (state) => ({

});

export default (Routing);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2F85',
    },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});
