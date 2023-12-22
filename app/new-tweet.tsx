import { Link } from 'expo-router';
import { useState } from 'react';
import {View, StyleSheet, Text, Image, TextInput, Pressable, SafeAreaView} from 'react-native'

const user = {
      id: 'u1',
      username: 'CodeWithMomo',
      name: 'Momo',
      image:
        'https://res.cloudinary.com/drf6yjgkn/image/upload/v1691595224/ftqi8kdogt9pvfweq59f.png',
};

export default function NewTweet(){
    const [text, setText] = useState('');
    const onTweetPress =() => {
        console.warn('Posting the tweet: ',text);
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href="../" style={{fontSize: 18 }}>Cancel</Link>
                <Pressable onPress={onTweetPress} style={styles.button}><Text style={styles.buttonText}>Tweet</Text></Pressable>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputContainer} />
                <Image src={user.image} style={styles.image}/>
                <TextInput 
                    value={text}
                    onChangeText={setText}
                    placeholder="What's happening"
                    multiline
                    numberOfLines={5}
                    style={{flex:1}}
                />
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        flex:1,
    },
    buttonContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button:{
        backgroundColor:'#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText:{
        color: 'white',
        fontWeight:'600',
        fontSize:16,
    },
    inputContainer: {
        flexDirection:'row',
    },
    image: {
        width: 50,
        aspectRatio:1,
        borderRadius: 50,
        marginRight:10
    },
    
})