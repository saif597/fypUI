// import React, { useState } from 'react';
// import {
//   View,
//   ScrollView,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { COLORS } from '../assets/theme';

// const Product = () => {
//   const [descriptionOpen, setDescriptionOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const toggleDescription = () => {
//     setDescriptionOpen(!descriptionOpen);
//   };

//   const getImageSource = imageName => {
//     switch (imageName) {
//       case '1':
//         return require('../assets/images/ketchup.jpg');
//       case '2':
//         return require('../assets/images/1.png');
//       case '3':
//         return require('../assets/images/1.png');
//       case '4':
//         return require('../assets/images/1.png');
//       default:
//         return null;
//     }
//   };

//   const miniImageNames = ['1', '2', '3', '4'];

//   const handleMiniImagePress = index => {
//     setSelectedImageIndex(index);
//   };

//   // Define a sample product (you can replace this with your actual data)
//   const product = {
//     name: 'Sample Product',
//     price: '$99.99',
//     description: 'This is a sample product description.',
//     brand: 'Sample Brand',
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.carouselContainer}>
//         <Image
//           source={getImageSource(miniImageNames[selectedImageIndex])}
//           style={styles.productImage}
//           resizeMode="cover"
//         />
//         <View style={styles.carouselButtons}>
//           <TouchableOpacity
//             onPress={() =>
//               setSelectedImageIndex(
//                 (selectedImageIndex - 1 + miniImageNames.length) %
//                   miniImageNames.length
//               )
//             }>
//             <Ionicons name="chevron-back" size={30} color={COLORS.primary} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() =>
//               setSelectedImageIndex(
//                 (selectedImageIndex + 1) % miniImageNames.length
//               )
//             }>
//             <Ionicons
//               name="chevron-forward"
//               size={30}
//               color={COLORS.primary}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.productCard}>
//         <Text style={styles.productName}>{product.name}</Text>
//         <Text style={styles.productPrice}>{product.price}</Text>
//         <Text style={styles.productDescription}>{product.description}</Text>
//         <View style={styles.miniImageRow}>
//           {miniImageNames.map((imageName, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => handleMiniImagePress(index)}>
//               <Image
//                 source={getImageSource(imageName)}
//                 style={styles.miniImage}
//                 resizeMode="cover"
//               />
//             </TouchableOpacity>
//           ))}
//         </View>

//         <Text style={styles.productBrand}>{product.brand + '...'}</Text>
//         <View style={styles.editButtonContainer}>
//           <TouchableOpacity style={styles.editButton}>
//             <Text style={styles.editButtonText}>Edit Product</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black', // Change background color as desired
//   },
//   carouselContainer: {
//     height: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   productImage: {
//     width: '100%',
//     height: '100%',
//   },
//   carouselButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     paddingHorizontal: 20,
//     position: 'absolute',
//     top: '40%',
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     marginTop: -30,
//     marginBottom: 20,
//     flex: 1, // Extend card to the bottom of the screen
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.primary,
//     marginBottom: 5,
//   },
//   productBrand: {
//     fontSize: 16,
//     color: COLORS.primary,
//     marginBottom: 10,
//   },
//   productPrice: {
//     fontSize: 20,
//     color: COLORS.primary,
//     marginBottom: 10,
//   },
//   productDescription: {
//     fontSize: 13.6,
//     color: COLORS.primary,
//     marginVertical: 30,
//   },
//   miniImageRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   miniImage: {
//     width: 50,
//     height: 50,
//     marginHorizontal: 5,
//   },
//   editButtonContainer: {
//     position: 'absolute',
//     bottom: 20, // Margin from the bottom
//     left: 20, // Margin from the left
//     right: 20, // Margin from the right
//   },
//   editButton: {
//     backgroundColor: COLORS.secondary,
//     borderRadius: 30,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   editButtonText: {
//     color: COLORS.primary,
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });


// export default Product;


import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity , Image} from 'react-native'
import React,{ useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../assets/theme/index.js';
import { useNavigation } from '@react-navigation/native'; 
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Product = () => {
  const navigation=useNavigation();
  return (
   <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.arrowBack}  onPress={()=> navigation.goBack()}>
        <Ionic size={28} color={'white'} name ='chevron-back-outline'/>
      </TouchableOpacity>
    </View>
    <View style={styles.pageContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyles} resizeMode="contain" source={require("../assets/images/ketchup.jpg")}/>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>National Tomato Ketchup 400 g</Text>
        </View>
        <View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>PKR 193.00</Text>
          </View>
          <View style={styles.barcodeContainer}>
            <Text style={styles.productCodeLabel}>BarCode : </Text>   
            <Text style={styles.productCodeValue}> 80912348129304 </Text>     
          </View>
        </View>
      </View>
      <View style={styles.footerWrapper}>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Edit Product</Text>
                </TouchableOpacity>
            </View>
    </View>
   </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  arrowBack:{
    paddingHorizontal:2,
  },
  header:{
    backgroundColor:COLORS.primary,
    height:80,
    flex:0,
    marginBottom:14,
    justifyContent:'center',
  },
  pageContainer:{
    flex:1,
    paddingHorizontal:20,
  },
  imageContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
        elevation: 5, 
        shadowColor: 'black', 
        shadowOffset: {
            width: 0,
            height: 2, 
        },
    shadowOpacity: 1, 
    shadowRadius: 15, 
    borderRadius: 15,
  },
  imageStyles:{
    borderRadius:15,
    height:350,
    width:350,
  },
  contentContainer:{
    paddingHorizontal:10,
    marginTop:12,
    flex:1,
    
  },
  productNameContainer:{
    marginBottom:5,
    flex:0,
  },
  productName:{
    fontFamily:'Poppins-Regular',
    color:'black',
    fontSize:25,
  },
  productPriceContainer:{
    flex:0,
    marginTop:2,
    marginBottom:3,
  },
  productPrice:{
    fontFamily:'Poppins-SemiBold',
    color:COLORS.primary,
    fontSize:22,
    top:1,
  },
  productCodeLabel:{
    fontFamily:'Poppins-Regular',
    color:'black',
    fontSize:18,
    top:2,
  },
  productCodeValue:{
    fontFamily:'Poppins-Regular',
    color:'black',
    fontSize:18,
    top:2,
  },
  barcodeContainer:{
    flexDirection:'row',
  },
  footerWrapper:{
    flex:0,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:13,
},
confirmButton:{
    backgroundColor:COLORS.primary,
    flex:0,
    justifyContent:'center',
    alignItems:'center',
    width:300,
    paddingVertical:8,
    borderRadius:25,
    marginBottom:10,
},
confirmText:{
    fontSize:18,
    color:'white',
    fontFamily:'Poppins-Regular',
    top:2,
},
})