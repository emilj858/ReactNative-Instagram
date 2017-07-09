import React from 'react';
import { Image } from 'react-native';
import { Card, Thumbnail, CardItem, Left, Button, Text, Body } from 'native-base';

const Post = ({post}) => (
    <Card>
        <CardItem>
            <Left>
                <Body>
                    <Text>{post.createdBy.firstName} {post.createdBy.lastName}</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem body>
            <Image source={{ url: post.imageUrl }} style={{ resizeMode: 'cover', height: 200, width: '100%' }} />
        </CardItem>
    </Card>
);

export default Post;