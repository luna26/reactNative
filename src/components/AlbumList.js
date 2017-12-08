// Import a library to help a create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// Create a component
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

// Render is to the device
export default AlbumList;