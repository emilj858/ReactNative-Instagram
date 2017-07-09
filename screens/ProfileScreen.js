import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}

ProfileScreen.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: () => {
        return null;
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ProfileScreen);