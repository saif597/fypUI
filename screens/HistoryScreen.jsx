import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Image, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionic from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../assets/theme/index.js';
import { useNavigation } from '@react-navigation/native'; 

const HistoryScreen = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.headContainer}>
    <View style={styles.header}>
        <TouchableOpacity style={styles.arrowBackIcon}  onPress={()=> navigation.goBack()}>
            <Ionic size={24} color={COLORS.primary} name ='chevron-back-outline'/>
        </TouchableOpacity>
        <Text style={styles.settingsText}>Billing History</Text>
    </View>
    
    <ScrollView style={styles.scrollviewContainer}>
      <View style={styles.downloadContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download e-History</Text>
          <Ionic style={styles.dowloadIcon}  size={20} color={'rgb(73,204,148)'} name ='download-outline'/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.dateHistoryContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            21-August-2023
          </Text>
        </View>
        <View style={styles.billSection}>
          <View style={styles.billContainer}>
            <Image style={styles.logoStyles} source={require("../assets/images/logo7.png")}/>
            <View style={styles.billText}>
              <View style={styles.cashierName}>
                <Text  style={styles.cashierText}>
                  Cashier : Raja Zain
                </Text>
                <Text  style={styles.billTotal}>
                  Rs. 2230.0
                </Text>
              </View>
              <View  style={styles.billBottomText}>
                <Text  style={styles.billTime}>
                  10:06 PM
                </Text>
               <TouchableOpacity  style={styles.billViewButton}>
                  <Text  style={styles.billViewText}>
                    View
                  </Text>
               </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.billSection}>
          <View style={styles.billContainer}>
            <Image style={styles.logoStyles} source={require("../assets/images/logo7.png")}/>
            <View style={styles.billText}>
              <View style={styles.cashierName}>
                <Text  style={styles.cashierText}>
                  Cashier : Raja Zain
                </Text>
                <Text  style={styles.billTotal}>
                  Rs. 9975.2
                </Text>
              </View>
              <View  style={styles.billBottomText}>
                <Text  style={styles.billTime}>
                  07:36 PM
                </Text>
               <TouchableOpacity  style={styles.billViewButton}>
                  <Text  style={styles.billViewText}>
                    View
                  </Text>
               </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            19-August-2023
          </Text>
        </View>
        <View style={styles.billSection}>
          <View style={styles.billContainer}>
            <Image style={styles.logoStyles} source={require("../assets/images/logo7.png")}/>
            <View style={styles.billText}>
              <View style={styles.cashierName}>
                <Text  style={styles.cashierText}>
                  Cashier : Raja Zain
                </Text>
                <Text  style={styles.billTotal}>
                  Rs. 1330.0
                </Text>
              </View>
              <View  style={styles.billBottomText}>
                <Text  style={styles.billTime}>
                  10:06 PM
                </Text>
               <TouchableOpacity  style={styles.billViewButton}>
                  <Text  style={styles.billViewText}>
                    View
                  </Text>
               </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.billSection}>
          <View style={styles.billContainer}>
            <Image style={styles.logoStyles} source={require("../assets/images/logo7.png")}/>
            <View style={styles.billText}>
              <View style={styles.cashierName}>
                <Text  style={styles.cashierText}>
                  Cashier : Raja Zain
                </Text>
                <Text  style={styles.billTotal}>
                  Rs. 7730.0
                </Text>
              </View>
              <View  style={styles.billBottomText}>
                <Text  style={styles.billTime}>
                  10:06 PM
                </Text>
               <TouchableOpacity  style={styles.billViewButton}>
                  <Text  style={styles.billViewText}>
                    View
                  </Text>
               </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </View>
        <View style={styles.billSection}>
          <View style={styles.billContainer}>
            <Image style={styles.logoStyles} source={require("../assets/images/logo7.png")}/>
            <View style={styles.billText}>
              <View style={styles.cashierName}>
                <Text  style={styles.cashierText}>
                  Cashier : Raja Zain
                </Text>
                <Text  style={styles.billTotal}>
                  Rs. 9975.2
                </Text>
              </View>
              <View  style={styles.billBottomText}>
                <Text  style={styles.billTime}>
                  07:36 PM
                </Text>
               <TouchableOpacity  style={styles.billViewButton}>
                  <Text  style={styles.billViewText}>
                    View
                  </Text>
               </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
    headContainer:{ 
        flex:1,
        backgroundColor:'white',
    },
    header:{
       marginTop:25,
       marginBottom:20,
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    settingsText:{
        fontSize:24,
        color:COLORS.primary,
        // fontWeight:'800',
        top:2,
        fontFamily:'Poppins-Regular'
    },
    arrowBackIcon:{
        position:'absolute',
        left:8
    },
    accountText:{
        fontSize:20,
        fontWeight:'900',
        color:COLORS.primary,
    },
    scrollviewContainer:{
      paddingHorizontal:12,
      marginVertical:20,
      backgroundColor:'rgba(180, 180, 180,0.25)',
    },
    downloadContainer:{
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:14,
        backgroundColor:'white',
        marginVertical:15,
    },
    downloadButton:{
      flex:0,
      flexDirection:'row'
    },
    downloadText:{
      color:'rgb(73,204,148)',
      // fontWeight:'600',
      fontSize:14,
      marginRight:5,
      fontFamily:'Poppins-Medium',
    },
    dateHistoryContainer:{
    },
    dateContainer:{
      marginVertical:20,
      left:2,
    },
    dateText:{
      // fontWeight:'700',
      fontSize:13,
      color:COLORS.primary,
      fontFamily:'Poppins-SemiBold',
    },
    billSection:{
        paddingHorizontal:11,
        paddingVertical:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'lightgray'
    },
    billContainer:{
      flex:0,
      flexDirection:'row'
    },
    billText:{
      marginHorizontal:12,
      flex:1,
      
    },
    cashierName:{
      flex:0,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    cashierText:{
      fontWeight:'500',
      color:'black',
      fontSize:15,
      fontFamily:'Roboto-Regular',
    },
    billTotal:{
      color:'hsl(0, 100%, 46%)',
      fontWeight:'700',
      fontSize:14.5,
      
    },
    billBottomText:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:25,
    },
    billTime:{
      color:'gray',
      fontWeight:'500',
      fontFamily:'Poppins-Regular',
    },
    billViewButton:{
      backgroundColor:'rgba(180, 180, 180,0.5)',
      paddingHorizontal:18,
      paddingVertical:5,
      borderRadius:15,
    },
    billViewText:{
      fontWeight:'600',
      color:'black',
      fontSize:15,
    },
    logoStyles:{
      height:35,
      width:35,
    },
    optionContainer:{
        paddingHorizontal:12,
        flex:0,
        flexDirection:'row',
        paddingVertical:8,
        backgroundColor:'rgba(180, 180, 180,0.124)',
    },
    optionText:{
        fontSize:19,
        fontWeight:'500',
        color:COLORS.primary,
        marginLeft:50
    },
   
 

  
})
