import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
const ProductsScreen = ({route}) => {
  const navigation = useNavigation();
  const products = route.params.productsObj;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setFilteredProducts(products);
    const allCategories = Array.from(
      new Set(products.map(product => product.category)),
    );
    setFilteredCategories(allCategories);
  }, [products]);

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = products.filter(
      product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);

    // Filter categories that have matching products
    const matchingCategories = Array.from(
      new Set(filtered.map(product => product.category)),
    );
    setFilteredCategories(matchingCategories);

    setIsSearchActive(query !== '');
  };

  const handleCancel = () => {
    setSearchQuery('');
    Keyboard.dismiss();
    setFilteredProducts(products);
    setFilteredCategories(
      Array.from(new Set(products.map(product => product.category))),
    );
    setSelectedCategory('All'); // Reset selected category
    setIsSearchActive(false);
  };

  const renderProductCard = ({item}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate('Product', {
          item: item,
        })
      }>
      <View style={styles.productImageContainer}>
        {/* Image */}
        <Image
          source={item.imgSrc} // Replace with actual image source
          style={styles.productImage}
        />
      </View>
      <View style={styles.productDetails}>
        {/* Product Name */}
        <Text style={styles.productName}>{item.name}</Text>
        {/* Product Price */}
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={24}
          color={COLORS.primary}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor={COLORS.primary}
          value={isSearchActive ? searchQuery : ''}
          onChangeText={query => {
            handleSearch(query);
            setIsSearchActive(query !== '');
          }}
        />
        {isSearchActive && (
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView>
        {filteredCategories.map(category => (
          <View key={category}>
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>{category}</Text>
              {filteredProducts.filter(product => product.category === category)
                .length > 2 && (
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={COLORS.primary}
                />
              )}
            </View>
            <View style={styles.categoryRow}>
              <FlatList
                data={filteredProducts.filter(
                  product => product.category === category,
                )}
                renderItem={renderProductCard}
                keyExtractor={item => item.id}
                horizontal
                contentContainerStyle={styles.categoryCardList}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryRow: {
    backgroundColor: '#F6F6F6', // Background color for the entire row
    paddingVertical: 15, // Vertical padding for the row
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Vertical margin for the row
    marginHorizontal: 13,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  // categoryRow: {

  // },
  categoryCardList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: COLORS.primary,
  },
  cancelButton: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  productCard: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 0,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  swipeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productImageContainer: {
    width: '100%',
    height: '65%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productDetails: {
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default ProductsScreen;
