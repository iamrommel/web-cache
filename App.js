import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HtmlViewer } from './components/HtmlViewer'
import { ThemeProvider } from 'react-native-elements'

export default function App() {
    return (
        <ThemeProvider>
            <View style={styles.container}>
                <HtmlViewer/>
            </View>
        </ThemeProvider>
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
