import React from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';

import Post from '../components/Post';

import { getAllPosts } from '../actions/postActions';

class FeedScreen extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.props.posts.map((p, i) => <Post key={i} post={p}></Post>)}
                </Content>
            </Container>
        )
    }
}

FeedScreen.navigationOptions = {
    tabBarLabel: 'Feed',
    tabBarIcon: () => {
        return null;
    }
};

const mapStateToProps = state => ({
    ...state.feed
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(getAllPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedScreen);