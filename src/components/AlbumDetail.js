import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSetion from './CardSection';

const AlbumDetail = ({ album }) => {
    const { headerContentStyle, thumbnailStyle } = styles;
    const {title, artist, thumbnail_image } = album;
    return (
        <Card>
            <CardSetion>
                <View>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image}} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSetion>
        </Card>
    );
};

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
}

export default AlbumDetail; 