import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions,Text } from 'react-native';
import  MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import mapMarker from "../images/map_marker.png";
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap () {

  const navigation = useNavigation()

  function handdleNavigationToScreen(name:string){
    navigation.navigate(name)
  }



  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      provider={ PROVIDER_GOOGLE }
      initialRegion={{
        latitude:16.8879404,
        longitude:-24.9847277,
        latitudeDelta:0.008,
        longitudeDelta:0.008
       }}>
          <Marker
          icon={mapMarker}
          calloutAnchor={{
            x:2.3,
            y:0.8,
           }}
          coordinate={{
            latitude:16.8879404,
            longitude:-24.9847277,
           }}
          >
            <Callout
            tooltip
            onPress={()=>handdleNavigationToScreen('Orphanages Details')}>
              <View style={styles.calloutContainer}>
               <Text style={styles.calloutText}> Lar das meninas </Text>
              </View>
            </Callout>

          </Marker>
       </MapView>
       <View style={styles.footer}>
         <Text style={styles.footerText}> 2 orfanatos encontrados</Text>
         <RectButton
         style={styles.createOrphanageButton}
         onPress={()=>handdleNavigationToScreen('Select Map Position')}
         >
           <Feather name='plus' size={20} color='#fff'/>

         </RectButton>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  calloutContainer:{
    width:160,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:'center',
  },
  calloutText:{
      color:'#0089a5',
      fontSize:14,
      fontFamily:'Nunito_700Bold'
  },

  footer:{
    position:'absolute',
    left:24,
    right:24,
    bottom:32,
    backgroundColor:'#fff',
    borderRadius:20,
    paddingLeft:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:3


  },
  footerText:{
    color:'#8fa7b3',
    fontFamily:'Nunito_700Bold'
  },
  createOrphanageButton:{
    width:56,
    height:56,
    backgroundColor:'#15c3d6',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  }

})