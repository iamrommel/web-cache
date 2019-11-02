import React, { useRef, useState } from 'react'
import app from '../app.json'
import { Alert, Dimensions, WebView } from 'react-native'
import { Nav } from './Nav'


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const onRefresh = (webViewRef) => () => {
    webViewRef && webViewRef.current.reload()
}


const onError = () => () => {
    Alert.alert('There is an error')
}

export const HtmlViewer = () => {
    const uri = "https://chat.thecollectiveOS.com/"
    const webViewRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <React.Fragment>
            <Nav webView={webViewRef.current}/>
            <WebView
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                onError={() => onError()}
                ref={webViewRef}
                source={{ uri }}
                style={{
                    height: deviceHeight,
                    width: deviceWidth
                }}
            />
        </React.Fragment>
    )
}

