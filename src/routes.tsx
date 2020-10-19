import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen }=createStackNavigator()
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';
import Header from './components/Header'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown:false,
        cardStyle:{ backgroundColor:'#f2f3f5'}
        }}>
        <Screen name='Orphanages Map' component={OrphanagesMap}/>
        <Screen
          name='Orphanages Details'
          component={OrphanageDetails}
          options={{
            headerShown:true,
            header:()=><Header showCancel={false} title=" Detalhes do Orfanato"/>
          }}
          />
        <Screen
          name='Select Map Position'
          component={SelectMapPosition}
            options={{
              headerShown:true,
              header:()=><Header title="Selecionar Posição no Mapa"/>
            }}
          />
        <Screen
          name='Orphanage Data'
          component={OrphanageData}
          options={{
            headerShown:true,
            header:()=><Header title=" Dados do Orfanato"/>
          }}
        />
      </Navigator>
    </NavigationContainer>

  )
}
