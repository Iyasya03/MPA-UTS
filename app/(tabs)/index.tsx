import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <View style={{ backgroundColor: '#ee5253', width: 100, height: 100 }} />
          <View style={{ backgroundColor: '#feca57', width: 100, height: 100 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 100, height: 100 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 100, height: 100 }} />
        </View>
 
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
          <Text style={{ marginRight: 10 }}>Beranda</Text>
          <Text style={{ marginRight: 10 }}>Vidio</Text>
          <Text style={{ marginRight: 10 }}>Playlist</Text>
          <Text style={{ marginRight: 10 }}>Komunitas</Text>
          <Text style={{ marginRight: 10 }}>Chanel</Text>
          <Text style={{ marginRight: 10 }}>Tentang</Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop: 20 }}>
          <Image
            source={{
              uri: 'https://c4.wallpaperflare.com/wallpaper/214/333/302/bring-me-the-horizon-that-s-the-spirit-logo-wallpaper-preview.jpg',
            }}
            style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'blue' }}>Ahmad iyasya</Text>
            <Text>1 JT subscribe</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
