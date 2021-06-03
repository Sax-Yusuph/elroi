import React from 'react'
import { PlayerProps, Player } from '@elements'

interface Props extends PlayerProps {}

const ListHeader = (props: Props) => {
	return <Player {...props} />
}

export default ListHeader
