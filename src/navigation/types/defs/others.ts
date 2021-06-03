/**@info here we combined the roots and primary navigator params
 * so has to get correct typings for the deeply nested screens.
 *
 * we then export these props for use in the respective screens
 *
 * --> LOGIC <--
 * CompositeNavigationProp<primary screen, secondary screen>
 */

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamsList } from '../..'

import { AuthStackParamsList, OnBoardingParamsList, PreferenceStackParamsList } from './types'

export interface AuthScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<AuthStackParamsList, 'SignUp'>,
		StackNavigationProp<RootParamsList, 'Auth'>
	>
}

export interface PreferenceScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<PreferenceStackParamsList, 'Preferences'>,
		StackNavigationProp<RootParamsList, 'PreferenceMode'>
	>
}

export interface OnboardingScreenProps {
	navigation: CompositeNavigationProp<
		StackNavigationProp<OnBoardingParamsList, 'Onboarding'>,
		StackNavigationProp<RootParamsList, 'OnBoardingMode'>
	>
}
