import { Text, View } from 'react-native'
import { associations } from '../../Axios'

 const AHome = ()=>{
   const [user , setuser]=useState({})
   const fetchUser = async ()=>{
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        const jsonValue = JSON.parse(value) ;
  const userdata = await axios.get(`${associations}/${jsonValue.id}`)
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
        <Text> Welcome to charity app as Association </Text>
      </View>
    )
  }
export default AHome
