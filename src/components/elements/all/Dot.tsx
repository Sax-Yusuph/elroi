import React from 'react'
import { Div } from 'react-native-magnus'

type Props = {
	selected: boolean
}

const Dot: React.FC<Props> = ({ selected }) => {
	return <Div mx={'sm'} w={8} h={8} rounded='xl' bg={selected ? 'blue500' : 'gray200'} />
}

export default Dot
