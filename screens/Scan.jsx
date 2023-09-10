// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Alert,
//   Vibration,
//   StyleSheet,
// } from 'react-native';
// import BarcodeScanner from 'react-native-scan-barcode';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import COLORS from '../assets/theme/index';

// const Scan = () => {
//   const [isFlashOn, setIsFlashOn] = useState(false);
//   const [isFrontCamera, setIsFrontCamera] = useState(false);
//   const [scannedItems, setScannedItems] = useState([]);
//   const [showClearButton, setShowClearButton] = useState(false);
//   const [canScan, setCanScan] = useState(true);

//   useEffect(() => {
//     const scanTimeout = setTimeout(() => {
//       setCanScan(true);
//     }, 1000); // 1-second delay
//     return () => clearTimeout(scanTimeout);
//   }, [scannedItems]);

//   const barcodeReceived = e => {
//     if (!canScan) {
//       return;
//     }
//     Vibration.vibrate(200); // Vibrate when a barcode is scanned
//     const newItem = {barcode: e.data, type: e.type};
//     setScannedItems([...scannedItems, newItem]);
//     setShowClearButton(true);
//     setCanScan(false); // Disable scanning for 1 second
//   };

//   const clearItems = () => {
//     setScannedItems([]);
//     setShowClearButton(false);
//   };

//   const showItemsAlert = () => {
//     const itemsText = scannedItems
//       .map(item => `Type: ${item.type}, Barcode: ${item.barcode}`)
//       .join('\n');
//     Alert.alert('Scanned Items', itemsText, [
//       {text: 'OK', onPress: clearItems},
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <BarcodeScanner
//         onBarCodeRead={barcodeReceived}
//         style={styles.cameraView}
//         torchMode={isFlashOn ? 'on' : 'off'}
//         cameraType={isFrontCamera ? 'front' : 'back'}
//       />
//       <View style={styles.topIconsContainer}>
//         <TouchableOpacity
//           style={styles.iconButton}
//           onPress={() => setIsFlashOn(!isFlashOn)}>
//           <Ionicons
//             name={isFlashOn ? 'flash' : 'flash-off'}
//             size={30}
//             color={isFlashOn ? 'black' : 'white'}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.iconButton}
//           onPress={() => setIsFrontCamera(!isFrontCamera)}>
//           <Ionicons
//             name="camera-reverse"
//             size={30}
//             color={isFrontCamera ? 'black' : 'white'}
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.buttonContainer}>
//         {showClearButton && (
//           <TouchableOpacity
//             onPress={clearItems}
//             style={[styles.button, {backgroundColor: 'white'}]}>
//             <Text style={styles.buttonText}>Clear</Text>
//           </TouchableOpacity>
//         )}
//         {scannedItems.length > 0 && (
//           <TouchableOpacity
//             onPress={showItemsAlert}
//             style={[styles.button, {backgroundColor: 'white'}]}>
//             <Text style={styles.buttonText}>OK</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       {scannedItems.length > 0 && (
//         <View style={styles.countBadge}>
//           <Text style={styles.countText}>{scannedItems.length}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   cameraView: {
//     flex: 1,
//   },
//   topIconsContainer: {
//     position: 'absolute',
//     top: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   iconButton: {
//     padding: 10,
//     borderRadius: 30,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     flexDirection: 'row',
//   },
//   button: {
//     padding: 10,
//     borderRadius: 50,
//     marginRight: 10,
//     marginBottom: 70,
//   },
//   buttonText: {
//     color: '#044244',
//   },
//   countBadge: {
//     position: 'absolute',
//     bottom: 80,
//     right: 20,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5,
//   },
//   countText: {
//     color: '#044244',
//   },
// });

// export default Scan;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scan = () => {
  return (
    <View>
      <Text>Scan</Text>
    </View>
  )
}

export default Scan

const styles = StyleSheet.create({})