import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { ImagePicker } from 'expo';
import { NavigationActions } from 'react-navigation';
import { RNS3 } from 'react-native-aws3';
import uuid from 'uuid/v1';
// import secrets from '../secrets';
import { addPost } from '../actions/postActions';

class CreatePostScreen extends React.Component {   

    openCamera = () => {
        ImagePicker
            .launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            })
            .then(result => {
                console.log('Picture taken');

                const file = {
                    uri: result.uri,
                    name: `${uuid()}.jpg`,
                    type: "image/jpeg"
                };

                console.log('File: ', file);

                const options = {
                    keyPrefix: "uploads/",
                    // bucket: secrets.awsBucketName,
                    region: "us-west-1",
                    // accessKey: secrets.awsAccessKey,
                    // secretKey: secrets.awsSecretKey,
                    successActionStatus: 201
                };

                console.log('Options: ', options);

                RNS3
                    .put(file, options)
                    .then(response => {
                        if (response.status !== 201) {
                            console.log(response);
                        }

                        const newPost = {
                            title: 'Example post',
                            imageUrl: `https://d1qlaz9cjtvywd.cloudfront.net/${response.key}`
                        };

                        this.props.addPost(newPost);
                        this.props.navigation.navigate('Album', { url: result.url })
                    });
            });
    }

    render() {
        return (
            <View>
                <Button onPress={this.openCamera}><Text>Take Picture</Text></Button>
            </View>
        )
    }
}

CreatePostScreen.navigationOptions = {
    tabBarLabel: 'Post',
    tabBarIcon: () => {
        return null;
    }
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(addPost(post))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CreatePostScreen);