import React from 'react';
import { TabNavigator } from 'react-navigation';

import FeedScreen from './FeedScreen';
import CreatePostScreen from './CreatePostScreen';
import ProfileScreen from './ProfileScreen';

const Home = TabNavigator({
  Feed: { screen: FeedScreen },
  CreatePost: { screen: CreatePostScreen },
  Profile: { screen: ProfileScreen }
}, {
  tabBarOptions: { style: { marginTop: 24 } },
});

export default Home;