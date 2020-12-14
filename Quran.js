import PAGES from './Pages';
import React, { useState, useRef } from 'react';
import { StyleSheet, Image, SafeAreaView, Text, FlatList, View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Slider from '@react-native-community/slider';



const Quran = (props) => {
    const [page, setPage] = useState(1);
    const width = useWindowDimensions().width;

    const Item = ({ source, id }) => (
        <View style={{ flex: 1 }}>
            <Image
                source={source}
                style={{ flex: 1, width: width, height: undefined }}
                resizeMode={'contain'}
            />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} source={item.source} />
    );

    const flatListRef = React.useRef()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={PAGES}
                renderItem={renderItem}
                keyExtractor={item => (item.id).toString()}
                ref={flatListRef}
                horizontal={true}
                snapToAlignment={'top'}
                pagingEnabled={true}
                getItemLayout={(data, index) => ({
                    index,
                    length: width,
                    offset: width * index
                })}
            />
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={604}
                value={604}
                // minimumTrackTintColor="#FFFFFF"
                // maximumTrackTintColor="#000000"
                onSlidingComplete={(value) => { flatListRef.current.scrollToIndex({ animated: true, index: value }); setPage(value); }}
                step={1}
            />
            <Text style={styles.paragraph}>{604 - page}</Text>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        // // aspectRatio: 0.685,
        backgroundColor: 'red'
    },

    container: {
        // flex: 1,
        flexDirection: 'row-reverse',
        // justifyContent: 'flex-end',
        backgroundColor: 'rgb(255, 254, 219)',
    },

    paragraph: {
        fontSize: 16,
        textAlign: 'center',
    }
});

export default Quran;