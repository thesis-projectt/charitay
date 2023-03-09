import React ,{useRef, useState}from 'react';
import {View, Button, Text,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import * as Animatable from 'react-native-animatable'
import Card from './Cart';

const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#add7f6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: '#d90429',
    position: 'relative'
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#E7DFDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#00a8e8',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 10,
    zIndex: 7
  },
  animButton:{
    marginLeft:15,
    top:20,
    backgroundColor:'#e63946',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:0,
    elevation:10,
    shadowColor:'#000',
    shadowOffset:{
        width:10,
        height:10
    },
    shadowOppacity:0.25,
    shadowRadius:10,
  },
  animButtonText:{
    color:'#f1faee',
    fontWeight:50,
    fontSize:18
  }
}
const MyComponent = () => {
    const swingAnimRef = useRef();
        const flashAnimRef = useRef();
const[show,setShow]=useState(false)
 
    
    return (
      <View style={styles.container}>
        {/* <Text>Hello world</Text> */}
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.75, bottom: 120}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              {/* <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text> */}
              <View style={{ flex: 2,flexDirection: "row" ,marginLeft:20,justifyContent:"space-evenly"}}>
             <Animatable.View ref={swingAnimRef}>
              <TouchableOpacity
              style={[styles.animButton,{backgroundColor:'#81b29a'}]}
              onPress={()=>{
                if (true){
                    swingAnimRef.current.swing(2000);
                }
              }}
              >
                <Text style={styles.animButtonText}> volunteer</Text>

              </TouchableOpacity>

             </Animatable.View>

              <Animatable.View ref={flashAnimRef}>
              <TouchableOpacity
              style={[styles.animButton,{backgroundColor:'#d90429'}]}
              onPress={()=>{
                if (true){
                    flashAnimRef.current.flash(2000);
                }
              }}
              >
                <Text style={styles.animButtonText}>volunteer</Text>

              </TouchableOpacity>

             </Animatable.View>
             </View>
            </View>
            <View style={styles.container}>
                <Card/>
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
            </View>
          </View>
           
        </SlidingUpPanel>
      </View>
    )
  }

export default MyComponent