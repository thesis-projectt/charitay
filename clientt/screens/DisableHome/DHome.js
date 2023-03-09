import { Text, View } from 'react-native'
import { disable } from '../../Axios'

 const DHome = ()=>{
  
  
   const [user , setuser]=useState({})
   const fetchUser = async ()=>{
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        const jsonValue = JSON.parse(value) ;
    console.log("=============>",jsonValue.id);
  const userdata = await axios.get(`${disable}/${jsonValue.id}`)
  console.log("userdata",userdata.data);
  setuser(userdata.data)
    }
    
    }catch(err){
      console.log(err);
    } 
  }
   useEffect(()=>{
 fetchUser()
   },[])

    return (
   
      <View> 
        <Text> Welcome to charity app as Disable </Text>
      </View>
    )
  }
export default DHome
