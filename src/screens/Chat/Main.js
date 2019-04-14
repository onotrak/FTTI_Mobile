import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Alert,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { Header, Left, Body, Right, Container, Content, Icon } from 'native-base';

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            loadingState: false,
        }
    }

    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillReceiveProps(props) {
        if (props.dataLogin.hasLoggedIn) {
            this.setState({
                loadingState: false
            });
            Actions.Home()
        }
    }

    componentWillUnmount() {  
      	BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
		Actions.Home()
		return true;
	}

    render() {
        return (
            <Container style={{backgroundColor: '#E5E5E5'}}>
                <Header style={{backgroundColor: 'white'}}>
                    <Left style={{flex: 0.8, flexDirection: 'row'}}>
                        <TouchableOpacity transparent
                            style={{ marginLeft: 10, marginRight: 15}}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-round-back' style={{color:"#D14165", fontSize: 40}} />
                        </TouchableOpacity>
                        <Text style={{color: '#D14165', alignSelf: 'center', fontSize: 18, fontWeight: 'bold'}}>onotrak</Text>
                    </Left>
                    <Body style={{flex: 0.1}}></Body>
                    <Right style={{flex: 0.1}}></Right>
                </Header>
                <Content style={{backgroundColor: '#E5E5E5'}}>
                    
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: { 
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderRadius: 4,

        //shadow
        // elevation: 3,
        // borderColor: 'darkgrey',
        // shadowColor: 'darkgrey',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 4,
    },
});
