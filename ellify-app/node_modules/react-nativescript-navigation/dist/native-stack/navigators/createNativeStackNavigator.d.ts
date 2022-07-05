/// <reference types="react" />
import { StackNavigationState } from '@react-navigation/core';
import { FrameNavigatorProps, FrameNavigationOptions, FrameNavigationEventMap } from '../types';
declare function NativeStackNavigator(props: FrameNavigatorProps): JSX.Element;
declare const _default: <ParamList extends Record<string, object>>() => import("@react-navigation/core").TypedNavigator<ParamList, StackNavigationState<Record<string, object>>, FrameNavigationOptions, FrameNavigationEventMap, typeof NativeStackNavigator>;
export default _default;
