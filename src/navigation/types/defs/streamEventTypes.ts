/************************ Combined Navigator Props for screens --> level 3 (Top level) nesting ****************/

/**@info here we combined the roots and primary navigator params
 * so has to get correct typings for the deeply nested screens.
 *
 * we then export these props for use in the respective screens
 *
 * --> LOGIC <--
 * CompositeNavigationProp<primary screen, secondary screen>
 */

import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamsList} from '../..';

import {StreamStackParamsList} from './types';

type StreamRoot = StackNavigationProp<RootParamsList, 'StreamEvent'>;

export interface FullScreenVideoProp {
  navigation: CompositeNavigationProp<
    StackNavigationProp<StreamStackParamsList, 'FullScreenVideoMode'>,
    StreamRoot
  >;
}

export interface StreamingScreenProp {
  navigation: CompositeNavigationProp<
    StackNavigationProp<StreamStackParamsList, 'Transcript'>,
    StreamRoot
  >;
}

export interface TranscriptScreenProp {
  navigation: CompositeNavigationProp<
    StackNavigationProp<StreamStackParamsList, 'StreamingScreen'>,
    StreamRoot
  >;
}
