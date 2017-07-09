import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import background from '../resources/login-background.jpg';

import { register } from '../actions/authActions';

class RegisterScreen extends React.Component {
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
                            underlineColorAndroid="transparent" />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            underlineColorAndroid="transparent" />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="First Name"
                            style={styles.input}
                            underlineColorAndroid="transparent" />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="Last Name"
                            style={styles.input}
                            underlineColorAndroid="transparent" />
                    </View>
                    <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Feed')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
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
    
});

const mapDispatchToProps = dispatch => ({
    login: (registrationData) => dispatch(register(registrationData))
})

export default connect(mapStateToProps, )(RegisterScreen);