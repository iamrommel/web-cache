import React, { useState, useEffect } from 'react'
import {Button} from 'react-native-elements'
export const BackButton = ({webView}) => {
    return (
        <Button
            icon={{
                name: "keyboard-arrow-left",
                size: 15,
                color: "white"
            }}
            onPress={() => {
                webView && webView.goBack()
            }}
        />
    )
}

