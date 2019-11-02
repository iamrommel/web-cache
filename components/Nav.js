import React from 'react'
import { Header } from 'react-native-elements'
import { RefreshButton } from './RefreshButton'
import { BackButton } from './BackButton'

export const Nav = ({webView}) => {
    return (
        <Header barStyle="light-content"
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around'
                }}
        >
            <BackButton webView={webView}/>
            <RefreshButton webView={webView}/>
        </Header>
    )
}
