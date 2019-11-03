import React, { useRef, useState } from 'react'
import { Alert, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const onRefresh = (webViewRef) => () => {
    webViewRef && webViewRef.current.reload()
}


const onError = () => () => {
    Alert.alert('There is an error loading the site')
}

export const HtmlViewer = () => {
    const uri = 'https://chat.thecollectiveOS.com/'
    const webViewRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <React.Fragment>
            <WebView
                cacheMode={"LOAD_CACHE_ELSE_NETWORK"}
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

