import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Vibration,
  StyleSheet,
  Modal,
} from 'react-native';
import BarcodeScanner from 'react-native-scan-barcode';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/theme/index';

const Scan = () => {
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [scannedItems, setScannedItems] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);
  const [canScan, setCanScan] = useState(true);

  const [isManualEntry, setIsManualEntry] = useState(false);
  const [manualBarcodeType, setManualBarcodeType] = useState('');
  const [manualBarcode, setManualBarcode] = useState('');

  const toggleManualEntry = () => {
    setIsManualEntry(!isManualEntry);
    setManualBarcodeType('');
    setManualBarcode('');
  };

  const enterBarcodeManually = () => {
    if (manualBarcodeType && manualBarcode) {
      const newItem = {barcode: manualBarcode, type: manualBarcodeType};
      setScannedItems([...scannedItems, newItem]);
      setShowClearButton(true);
      setManualBarcodeType('');
      setManualBarcode('');
      Vibration.vibrate(200); // Vibrate when manually entering
    }
    setIsManualEntry(false);
  };

  useEffect(() => {
    const scanTimeout = setTimeout(() => {
      setCanScan(true);
    }, 1000); // 1-second delay
    return () => clearTimeout(scanTimeout);
  }, [scannedItems]);

  const barcodeReceived = e => {
    if (!canScan) {
      return;
    }
    Vibration.vibrate(200); // Vibrate when a barcode is scanned
    const newItem = {barcode: e.data, type: e.type};
    setScannedItems([...scannedItems, newItem]);
    setShowClearButton(true);
    setCanScan(false); // Disable scanning for 1 second
  };

  const clearItems = () => {
    setScannedItems([]);
    setShowClearButton(false);
  };

  const showItemsAlert = () => {
    const itemsText = scannedItems
      .map(item => `Type: ${item.type}, Barcode: ${item.barcode}`)
      .join('\n');
    Alert.alert('Scanned Items', itemsText, [
      {text: 'ok', onPress: clearItems},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {/* Camera view goes here */}
        <BarcodeScanner
          onBarCodeRead={barcodeReceived}
          style={styles.cameraView}
          torchMode={isFlashOn ? 'on' : 'off'}
          cameraType={isFrontCamera ? 'front' : 'back'}
        />
      </View>

      <View style={styles.topIconsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setIsFlashOn(!isFlashOn)}>
          <Ionicons
            name={isFlashOn ? 'flash' : 'flash-off'}
            size={30}
            color={isFlashOn ? 'black' : 'white'}
          />
          <Text style={styles.buttonText}>Flash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setIsFrontCamera(!isFrontCamera)}>
          <Ionicons
            name="camera-reverse"
            size={30}
            color={isFrontCamera ? 'black' : 'white'}
          />
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={toggleManualEntry}>
          <Ionicons name="create-outline" size={30} color="white" />
          <Text style={styles.buttonText}>Enter Barcode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          {showClearButton && (
            <TouchableOpacity onPress={clearItems} style={styles.button}>
              <Ionicons
                name="trash-bin"
                size={20}
                color={isFlashOn ? 'black' : 'white'}
              />
              <Text style={styles.buttonText}>Discard</Text>
            </TouchableOpacity>
          )}
        </View>
        {scannedItems.length > 0 && (
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={showItemsAlert}
              style={styles.billButton}>
              <Ionicons
                name="receipt"
                size={20}
                color={isFrontCamera ? 'black' : 'white'}
              />
              <Text style={styles.buttonText}>Bill</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {scannedItems.length > 0 && (
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{scannedItems.length}</Text>
        </View>
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={isManualEntry}
        onRequestClose={() => setIsManualEntry(false)}>
        <View style={styles.overlay}>
          <View style={styles.manualEntryContainer}>
            <TextInput
              style={styles.manualInput}
              placeholder="Barcode Type"
              placeholderTextColor="white"
              value={manualBarcodeType}
              onChangeText={text => setManualBarcodeType(text)}
            />
            <TextInput
              style={styles.manualInput}
              placeholder="Barcode"
              placeholderTextColor="white"
              value={manualBarcode}
              onChangeText={text => setManualBarcode(text)}
            />
            <TouchableOpacity
              onPress={enterBarcodeManually}
              style={styles.enterButton}>
              <Text style={styles.enterButtonText}>Enter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsManualEntry(false)}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Set the container background to transparent
  },
  cameraContainer: {
    flex: 1, // Ensure the camera view takes the entire screen
  },
  cameraView: {
    flex: 1,
  },
  billButton: {
    position: 'absolute',
    top: 100, // Adjust the bottom position as needed (same as the "Discard" button)
    right: 35, // Adjust the right position to align it properly
    padding: 10,
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 0, // Adjust the top position as needed
    right: 0, // Position on the right side
    flexDirection: 'column', // Align buttons vertically
    alignItems: 'center', // Center buttons horizontally
    marginTop: 0, // Add vertical margin between button wrappers
  },

  buttonWrapper: {
    marginBottom: 35, // Add vertical margin between button wrappers
  },
  topIconsContainer: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 100, // Adjust the bottom position as needed
    right: 20, // Adjust the right position as needed
    padding: 10,
    borderRadius: 50,
    flexDirection: 'column',

    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  countBadge: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  countText: {
    color: 'white',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  manualEntryContainer: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 20,
  },
  manualInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  enterButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  enterButtonText: {
    color: 'black',
    fontSize: 16,
  },
  cancelButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Scan;
