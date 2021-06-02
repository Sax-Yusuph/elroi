import { GeneralStyles } from '@globalStyles'
import React from 'react'
import { ScrollView } from 'react-native'

const Container: React.FC = ({ children }) => {
	return <ScrollView style={GeneralStyles.container}>{children}</ScrollView>
}

export default Container
