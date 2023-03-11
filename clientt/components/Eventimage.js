import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { HStack } from 'native-base';


const Eventimage = () => {
  const [donation, setDonation] = useState(0);
const [show,setShow]=useState(false)
  const handleDonation = (value) => {
   
   setDonation(value);
    
  };

  return (
    <View>
      <Image
        source={{ uri:'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/02/disable-button-flutter.png?w=950&ssl=1' }}
        style={{ width: '100%', height: 200 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>
        Event Title
      </Text>
      <Text style={{ fontSize: 16, padding: 16 }}>
        Event Description
      </Text>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Donation Amount
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <Text style={{ padding: 8, backgroundColor: '#eee' }}>5$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <Text style={{ padding: 8, backgroundColor: '#eee' }}>10$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <Text style={{ padding: 8, backgroundColor: '#eee' }}>20$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 8 }}
            onPress={() => setShow(!show)}
          >
            <Text style={{ padding: 8, backgroundColor: '#eee' }}>Other</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <View style={{ marginTop: 8 }}>
            <Text style={{ fontSize: 16 }}>Other Amount:</Text>
           <HStack><TextInput
  value={donation}
  onChangeText={handleDonation}
  keyboardType="numeric"
  style={{ 
    height: 40, 
    borderWidth: 1,
    borderColor: 'black',
    width: 250, 
    marginTop: 8, 
    padding: 8 
  }}
/><Text style={{ padding: 8, backgroundColor: '#eee' }}>{donation}</Text></HStack> 
          </View>
        )}
        <TouchableOpacity
          style={{ marginTop: 20, backgroundColor: 'blue', padding: 14, alignItems: 'center' }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Eventimage;
