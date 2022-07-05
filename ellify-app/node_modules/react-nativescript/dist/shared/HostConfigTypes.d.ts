/// <reference types="react" />
import { NSVText, NSVRoot, INSVElement } from "../nativescript-vue-next/runtime/nodes";
export declare type Type = string | React.JSXElementConstructor<any>;
export declare type Props = any;
export declare type Container = NSVRoot | INSVElement;
export declare type Instance = INSVElement;
export declare type TextInstance = NSVText;
export declare type HydratableInstance = any;
export declare type PublicInstance = any;
export declare type HostContext = {
    isInAParentText: boolean;
    isInAParentSpan: boolean;
    isInAParentFormattedString: boolean;
    isInADockLayout: boolean;
    isInAGridLayout: boolean;
    isInAnAbsoluteLayout: boolean;
    isInAFlexboxLayout: boolean;
};
export declare type InstanceCreator<T extends Instance = Instance> = (props: Props, rootContainerInstance: Container, hostContext: HostContext) => T;
