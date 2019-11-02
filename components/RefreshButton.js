import React from 'react'
import { Button } from 'react-native-elements'

export const RefreshButton = ({ webView }) => {
    return (
        <Button
            icon={{
                name: 'refresh',
                size: 15,
                color: 'white'
            }}
            onPress={() => {
                webView && webView.reload()
            }}
        />
    )
}

