/**@info here we combined the roots and primary navigator params
 * so has to get correct typings for the deeply nested screens.
 *
 * we then export these props for use in the respective screens
 *
 * --> LOGIC <--
 * CompositeNavigationProp<primary screen, secondary screen>
 */

import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamsList } from '../..'

import { AuthStackParamsList, PreferenceStackParamsList } from './types'

type AuthRoot = StackNavigationProp<RootParamsList, 'Auth'>

export interface AuthScreenProps {
	navigation: CompositeNavigationProp<StackNavigationProp<AuthStackParamsList, 'SignUp'>, AuthRoot>
}

export interface PreferenceScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<PreferenceStackParamsList, 'Preferences'>,
		StackNavigationProp<RootParamsList, 'Preferences'>
	>
}
