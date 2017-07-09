import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends React.Component {
    componentWillMount () {
        setTimeout(this.props.openApp, 500);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>         
        )
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    openApp: () => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);