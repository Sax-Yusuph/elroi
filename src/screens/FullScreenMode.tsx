import React, { memo } from 'react'

import { FullScreenVideoMode as ContentView } from '@layouts'

import { FullScreenVideoProps } from 'navigation/types'

const FullScreenVideoMode: React.FC<FullScreenVideoProps> = memo(({ navigation, route }) => {
	return <ContentView {...{ route, navigation }} />
})

export default FullScreenVideoMode
