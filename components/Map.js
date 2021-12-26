import React, {useState, useEffect} from 'react';
import {Modal, Text, View} from 'react-native';
import {Circle, Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Models from '../models/Models';
const data = require('../data/datas.json');
const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [dates, setDate] = useState(moment().format('LL'));
  const dataPick = date => {
    switch (date) {
      case '01012022':
        return data[0].date1;
        break;
      case '02012022':
        return data[1].date2;
        break;
      case '03012022':
        return data[2].date3;
        break;
      case '04012022':
        return data[3].date4;
        break;
      case '05012022':
        return data[4].date5;
        break;
      case '06012022':
        return data[5].date6;
        break;
      case '07012022':
        return data[6].date7;
        break;
      default:
        return data[0].date1;
        break;
    }
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = dataPick(moment().format('DDMMYYYY'));
        setMarkers(data);
      } catch (e) {
        alert(e);
      }
    };
    loadData();
  }, []);
  console.log(Models('halo'));
  const colorPicker = data => {
    if (data == 'Cargo' || data == 'Cargo-Hazard A') {
      return 'blue';
    }
    if (data == 'Tanker') {
      return 'red';
    }
    if (data == 'Passenger') {
      return 'green';
    }
    if (data == 'Pleasure') {
      return 'purple';
    }
    if (data == 'Thug') {
      return 'orange';
    }
    if (data == 'Fishing') {
      return 'brown';
    }
    return 'gray';
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={{
          latitude: -7.321907778259173,
          longitude: 111.63065388553346,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        {markers.map((dats, index) => {
          const color = colorPicker(dats.Type);
          return (
            <Marker
              key={index}
              rotation={parseFloat(dats.COG)}
              tracksViewChanges={false}
              flat={true}
              coordinate={{
                latitude: dats.Lattd,
                longitude: dats.Longtd,
              }}
              // icon={require(color)}
            >
              <View>
                <Icon name="navigate" size={30} color={color} />
              </View>

              <Callout style={{width: 200}}>
                <View
                  style={{
                    padding: 5,
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>MMSI : {dats.MMSI}</Text>
                  <Text style={{fontWeight: 'bold'}}>Type : {dats.Type}</Text>
                  <Text style={{fontWeight: 'bold'}}>Time : {dats.Time}</Text>
                  <Text style={{fontWeight: 'bold'}}>COG : {dats.COG}</Text>
                  <Text style={{fontWeight: 'bold'}}>SOG : {dats.SOG}</Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Satelit : {dats.Source}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            width: 300,
            height: 50,
            backgroundColor: '#2d2a6e',
            borderRadius: 50,
            bottom: 0,
            margin: 20,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            {dates}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Map;
