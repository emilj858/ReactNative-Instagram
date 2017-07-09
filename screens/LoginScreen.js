import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import background from '../resources/login-background.jpg';

import { login, changeLoginField } from '../actions/authActions';

class LoginScreen extends React.Component {
    componentDidUpdate() {
        if(this.props.token) {
            this.props.navigation.navigate('Feed');
        }
    }

    render() {
        return (
            <Image
                style={[styles.background, styles.container]}
                source={background}
                resizeMode="cover">
                
                <View style={styles.container} />
                <View style={styles.wrapper}>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            value={this.props.email}
                            onBlur={(e) => this.props.changeLoginField('email', e.target.value)} />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            value={this.props.password}
                            onBlur={(e) => this.props.changeLoginField('password', e.target.value)} />
                    </View>
                    <TouchableOpacity activeOpacity={.5} onPress={() => this.props.login(this.props.email, this.props.password)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Register')}>
                        <View>
                            <Text style={styles.registerText}>Create an Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container} />
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: null,
        height: null
    },
    wrapper: {
        paddingHorizontal: 16,
    },
    inputWrap: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 40,
        backgroundColor: 'transparent'
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#d73352',
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    },
    registerText: {
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
   ...state.login 
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    changeField: (key, value) => dispatch(changeLoginField(key, value))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginScreen);