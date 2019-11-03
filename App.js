import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { HtmlViewer } from './components/HtmlViewer'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <HtmlViewer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
