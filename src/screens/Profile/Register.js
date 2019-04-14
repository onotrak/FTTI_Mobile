import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Register extends Component {

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
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})