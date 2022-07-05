import * as React from "react";
import { View, KeyedTemplate, ItemsSource, ItemEventData, ListView as NativeScriptListView } from "@nativescript/core";
import { NSVElement } from "../nativescript-vue-next/runtime/nodes";
import { ListViewAttributes } from "../lib/react-nativescript-jsx";
export declare type CellViewContainer = View;
declare type CellFactory = (item: any) => React.ReactElement;
declare type OwnProps = {
    items: ItemsSource | any[];
    /** User may specify cellFactory for single-template or cellFactories for multi-template. */
    cellFactory?: CellFactory;
    cellFactories?: Map<string, {
        placeholderItem: any;
        cellFactory: CellFactory;
    }>;
    /** For now, we don't support custom onItemLoading event handlers. */
    onItemTap?: (args: ItemEventData) => void;
    /**
     * The event will be raised when the ListView is scrolled so that the last item is visible.
     * This event is intended to be used to add additional data in the ListView.
     */
    onLoadMoreItems?: (args: ItemEventData) => void;
    _debug?: {
        logLevel: "debug" | "info";
        onCellFirstLoad?: (container: CellViewContainer) => void;
        onCellRecycle?: (container: CellViewContainer) => void;
    };
} & Omit<ListViewAttributes, "onItemLoading">;
declare type Props = OwnProps & {
    forwardedRef?: React.RefObject<NSVElement<NativeScriptListView>>;
};
declare type NumberKey = number | string;
interface State {
    nativeCells: Record<NumberKey, CellViewContainer>;
    nativeCellToItemIndex: Map<CellViewContainer, NumberKey>;
    itemIndexToNativeCell?: Map<NumberKey, CellViewContainer>;
}
/**
 * A React wrapper around the NativeScript ListView component.
 * @see https://docs.nativescript.org/ui/ns-ui-widgets/list-view
 * @module ui/list-view/list-view
 */
export declare class _ListView extends React.Component<Props, State> {
    static readonly defaultProps: {
        _debug: {
            logLevel: "info";
            onCellFirstLoad: any;
            onCellRecycle: any;
        };
    };
    constructor(props: Props);
    private readonly myRef;
    private readonly argsViewToRootKeyAndRef;
    private roots;
    /**
     * ListView code-behind:
     * @see https://github.com/NativeScript/nativescript-sdk-examples-js/blob/master/app/ns-ui-widgets-category/list-view/code-behind/code-behind-ts-page.ts
     * ListView item templates:
     * @see https://medium.com/@alexander.vakrilov/faster-nativescript-listview-with-multiple-item-templates-8f903a32e48f
     * Cell state in ListView:
     * @see https://medium.com/@alexander.vakrilov/managing-component-state-in-nativescript-listview-b139e45d899b
     * @see https://github.com/NativeScript/nativescript-angular/issues/1245#issuecomment-393465035
     * loadMoreItems:
     * @see https://github.com/NativeScript/nativescript-sdk-examples-js/blob/master/app/ns-ui-widgets-category/list-view/events/events-ts-page.ts
     */
    private readonly defaultOnItemLoading;
    protected getNativeView(): NativeScriptListView | null;
    private readonly renderNewRoot;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static isItemsSource(arr: any[] | ItemsSource): arr is ItemsSource;
    render(): JSX.Element;
}
export declare const ListView: React.ForwardRefExoticComponent<{
    items: ItemsSource | any[];
    /** User may specify cellFactory for single-template or cellFactories for multi-template. */
    cellFactory?: CellFactory;
    cellFactories?: Map<string, {
        placeholderItem: any;
        cellFactory: CellFactory;
    }>;
    /** For now, we don't support custom onItemLoading event handlers. */
    onItemTap?: (args: ItemEventData) => void;
    /**
     * The event will be raised when the ListView is scrolled so that the last item is visible.
     * This event is intended to be used to add additional data in the ListView.
     */
    onLoadMoreItems?: (args: ItemEventData) => void;
    _debug?: {
        logLevel: "debug" | "info";
        onCellFirstLoad?: (container: CellViewContainer) => void;
        onCellRecycle?: (container: CellViewContainer) => void;
    };
} & Pick<Pick<Pick<Pick<import("../lib/react-nativescript-jsx").ObservableAttributes, never> & {
    alignSelf?: "auto" | "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    android?: any;
    bindingContext?: any;
    class?: string;
    className?: string;
    col?: number;
    colSpan?: number;
    column?: number;
    columnSpan?: number;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    dock?: "left" | "top" | "bottom" | "right";
    domNode?: import("@nativescript/core/debugger/dom-node").DOMNode;
    effectiveBorderBottomWidth?: number;
    effectiveBorderLeftWidth?: number;
    effectiveBorderRightWidth?: number;
    effectiveBorderTopWidth?: number;
    effectiveHeight?: number;
    effectiveLeft?: number;
    effectiveMarginBottom?: number;
    effectiveMarginLeft?: number;
    effectiveMarginRight?: number;
    effectiveMarginTop?: number;
    effectiveMinHeight?: number;
    effectiveMinWidth?: number;
    effectivePaddingBottom?: number;
    effectivePaddingLeft?: number;
    effectivePaddingRight?: number;
    effectivePaddingTop?: number;
    effectiveTop?: number;
    effectiveWidth?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexWrapBefore?: boolean;
    hidden?: string | boolean;
    id?: string;
    ios?: any;
    isCollapsed?: any;
    isLoaded?: boolean;
    left?: number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | "auto";
    nativeView?: any;
    onBindingContextChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onClassNameChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onHiddenChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onIdChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    order?: number;
    page?: import("@nativescript/core").Page;
    parent?: import("@nativescript/core").ViewBase;
    parentNode?: import("@nativescript/core").ViewBase;
    recycleNativeView?: "auto" | "always" | "never";
    reusable?: boolean;
    row?: number;
    rowSpan?: number;
    top?: number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | "auto";
    typeName?: string;
    viewController?: any;
}, "alignSelf" | "class" | "className" | "col" | "colSpan" | "domNode" | "effectiveBorderBottomWidth" | "effectiveBorderLeftWidth" | "effectiveBorderRightWidth" | "effectiveBorderTopWidth" | "effectiveHeight" | "effectiveLeft" | "effectiveMarginBottom" | "effectiveMarginLeft" | "effectiveMarginRight" | "effectiveMarginTop" | "effectiveMinHeight" | "effectiveMinWidth" | "effectivePaddingBottom" | "effectivePaddingLeft" | "effectivePaddingRight" | "effectivePaddingTop" | "effectiveTop" | "effectiveWidth" | "flexGrow" | "flexShrink" | "flexWrapBefore" | "hidden" | "id" | "isCollapsed" | "isLoaded" | "nativeView" | "onBindingContextChange" | "onClassNameChange" | "onHiddenChange" | "onIdChange" | "order" | "page" | "parent" | "parentNode" | "recycleNativeView" | "reusable" | "typeName" | "viewController"> & {
    accessibilityHidden?: string | boolean;
    accessibilityHint?: string;
    accessibilityIdentifier?: string;
    accessibilityIgnoresInvertColors?: string | boolean;
    accessibilityLabel?: string;
    accessibilityLanguage?: string;
    accessibilityLiveRegion?: import("@nativescript/core").AccessibilityLiveRegion;
    accessibilityMediaSession?: string | boolean;
    accessibilityRole?: import("@nativescript/core").AccessibilityRole;
    accessibilityState?: import("@nativescript/core").AccessibilityState;
    accessibilityValue?: string;
    accessible?: string | boolean;
    android?: any;
    androidDynamicElevationOffset?: string | number;
    androidElevation?: string | number;
    automationText?: string;
    background?: string;
    backgroundColor?: string | import("@nativescript/core").Color;
    backgroundImage?: string | import("@nativescript/core/ui/styling/gradient").LinearGradient;
    backgroundPosition?: string;
    backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
    backgroundSize?: string;
    bindingContext?: any;
    borderBottomColor?: string | import("@nativescript/core").Color;
    borderBottomLeftRadius?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderBottomRightRadius?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderBottomWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderColor?: string | import("@nativescript/core").Color;
    borderLeftColor?: string | import("@nativescript/core").Color;
    borderLeftWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderRadius?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderRightColor?: string | import("@nativescript/core").Color;
    borderRightWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderTopColor?: string | import("@nativescript/core").Color;
    borderTopLeftRadius?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderTopRightRadius?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderTopWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    borderWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    boxShadow?: string | import("@nativescript/core/ui/styling/css-shadow").CSSShadow;
    color?: string | import("@nativescript/core").Color;
    column?: string | number;
    columnSpan?: string | number;
    css?: string;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    cssType?: string;
    dock?: "left" | "top" | "bottom" | "right";
    height?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    horizontalAlignment?: "left" | "stretch" | "center" | "right";
    ios?: any;
    iosIgnoreSafeArea?: string | boolean;
    iosOverflowSafeArea?: string | boolean;
    iosOverflowSafeAreaEnabled?: string | boolean;
    isEnabled?: string | boolean;
    isLayoutRequired?: boolean;
    isLayoutValid?: boolean;
    isUserInteractionEnabled?: string | boolean;
    left?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    margin?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    marginBottom?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    marginLeft?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    marginRight?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    marginTop?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
    minHeight?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    minWidth?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    modal?: View;
    onAccessibilityHintChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onAccessibilityIdentifierChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onAccessibilityIgnoresInvertColorsChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onAccessibilityLabelChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onAccessibilityValueChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onAndroidBackPressed?: (args: import("@nativescript/core").EventData) => void;
    onColumnChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onColumnSpanChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onDockChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onDoubleTap?: (arg: import("@nativescript/core").TapGestureEventData) => any;
    onIosIgnoreSafeAreaChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onIosOverflowSafeAreaChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onIosOverflowSafeAreaEnabledChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onIsEnabledChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onIsUserInteractionEnabledChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onLeftChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onLoaded?: (args: import("@nativescript/core").EventData) => void;
    onLongPress?: (arg: import("@nativescript/core").GestureEventData) => any;
    onOriginXChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onOriginYChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onPan?: (arg: import("@nativescript/core").PanGestureEventData) => any;
    onPinch?: (arg: import("@nativescript/core").PinchGestureEventData) => any;
    onRotation?: (arg: import("@nativescript/core").RotationGestureEventData) => any;
    onRowChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onRowSpanChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onShowingModally?: (args: import("@nativescript/core").ShownModallyData) => void;
    onShownModally?: (args: import("@nativescript/core").ShownModallyData) => void;
    onLayoutChanged?: (args: import("@nativescript/core").EventData) => void;
    onSwipe?: (arg: import("@nativescript/core").SwipeGestureEventData) => any;
    onTap?: (arg: import("@nativescript/core").TapGestureEventData) => any;
    onTopChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onTouch?: (arg: import("@nativescript/core").TouchGestureEventData) => any;
    onUnloaded?: (args: import("@nativescript/core").EventData) => void;
    opacity?: string | number;
    originX?: string | number;
    originY?: string | number;
    perspective?: string | number;
    rotate?: string | number;
    rotateX?: string | number;
    rotateY?: string | number;
    row?: string | number;
    rowSpan?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    top?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    translateX?: string | number;
    translateY?: string | number;
    verticalAlignment?: "top" | "stretch" | "bottom" | "middle";
    visibility?: "hidden" | "visible" | "collapse" | "collapsed";
    width?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit | import("@nativescript/core").CoreTypes.LengthPercentUnit;
}, "alignSelf" | "bindingContext" | "class" | "className" | "col" | "colSpan" | "column" | "columnSpan" | "cssClasses" | "cssPseudoClasses" | "dock" | "domNode" | "effectiveBorderBottomWidth" | "effectiveBorderLeftWidth" | "effectiveBorderRightWidth" | "effectiveBorderTopWidth" | "effectiveHeight" | "effectiveLeft" | "effectiveMarginBottom" | "effectiveMarginLeft" | "effectiveMarginRight" | "effectiveMarginTop" | "effectiveMinHeight" | "effectiveMinWidth" | "effectivePaddingBottom" | "effectivePaddingLeft" | "effectivePaddingRight" | "effectivePaddingTop" | "effectiveTop" | "effectiveWidth" | "flexGrow" | "flexShrink" | "flexWrapBefore" | "hidden" | "id" | "isCollapsed" | "isLoaded" | "left" | "nativeView" | "onBindingContextChange" | "onClassNameChange" | "onHiddenChange" | "onIdChange" | "order" | "page" | "parent" | "parentNode" | "recycleNativeView" | "reusable" | "row" | "rowSpan" | "top" | "typeName" | "viewController" | "accessibilityHidden" | "accessibilityHint" | "accessibilityIdentifier" | "accessibilityIgnoresInvertColors" | "accessibilityLabel" | "accessibilityLanguage" | "accessibilityLiveRegion" | "accessibilityMediaSession" | "accessibilityRole" | "accessibilityState" | "accessibilityValue" | "accessible" | "androidDynamicElevationOffset" | "androidElevation" | "automationText" | "background" | "backgroundColor" | "backgroundImage" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "boxShadow" | "color" | "css" | "cssType" | "height" | "horizontalAlignment" | "iosIgnoreSafeArea" | "iosOverflowSafeArea" | "iosOverflowSafeAreaEnabled" | "isEnabled" | "isLayoutRequired" | "isLayoutValid" | "isUserInteractionEnabled" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "minHeight" | "minWidth" | "modal" | "onAccessibilityHintChange" | "onAccessibilityIdentifierChange" | "onAccessibilityIgnoresInvertColorsChange" | "onAccessibilityLabelChange" | "onAccessibilityValueChange" | "onAndroidBackPressed" | "onColumnChange" | "onColumnSpanChange" | "onDockChange" | "onDoubleTap" | "onIosIgnoreSafeAreaChange" | "onIosOverflowSafeAreaChange" | "onIosOverflowSafeAreaEnabledChange" | "onIsEnabledChange" | "onIsUserInteractionEnabledChange" | "onLeftChange" | "onLoaded" | "onLongPress" | "onOriginXChange" | "onOriginYChange" | "onPan" | "onPinch" | "onRotation" | "onRowChange" | "onRowSpanChange" | "onShowingModally" | "onShownModally" | "onLayoutChanged" | "onSwipe" | "onTap" | "onTopChange" | "onTouch" | "onUnloaded" | "opacity" | "originX" | "originY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "scaleX" | "scaleY" | "textTransform" | "translateX" | "translateY" | "verticalAlignment" | "visibility" | "width"> & {
    android?: any;
    ios?: any;
    iosEstimatedRowHeight?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    itemIdGenerator?: (item: any, index: number, items: any) => number;
    itemTemplate?: string | import("@nativescript/core").Template;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    items?: string | any[] | ItemsSource;
    onIosEstimatedRowHeightChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onItemLoading?: (args: ItemEventData) => void;
    onItemTap?: (args: ItemEventData) => void;
    onItemTemplateChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onItemTemplatesChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onItemsChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    onLoadMoreItems?: (args: import("@nativescript/core").EventData) => void;
    onRowHeightChange?: (args: import("@nativescript/core").PropertyChangeData) => void;
    rowHeight?: string | number | import("@nativescript/core").CoreTypes.LengthDipUnit | import("@nativescript/core").CoreTypes.LengthPxUnit;
    separatorColor?: string | import("@nativescript/core").Color;
}, "alignSelf" | "android" | "bindingContext" | "class" | "className" | "col" | "colSpan" | "column" | "columnSpan" | "cssClasses" | "cssPseudoClasses" | "dock" | "domNode" | "effectiveBorderBottomWidth" | "effectiveBorderLeftWidth" | "effectiveBorderRightWidth" | "effectiveBorderTopWidth" | "effectiveHeight" | "effectiveLeft" | "effectiveMarginBottom" | "effectiveMarginLeft" | "effectiveMarginRight" | "effectiveMarginTop" | "effectiveMinHeight" | "effectiveMinWidth" | "effectivePaddingBottom" | "effectivePaddingLeft" | "effectivePaddingRight" | "effectivePaddingTop" | "effectiveTop" | "effectiveWidth" | "flexGrow" | "flexShrink" | "flexWrapBefore" | "hidden" | "id" | "ios" | "isCollapsed" | "isLoaded" | "left" | "nativeView" | "onBindingContextChange" | "onClassNameChange" | "onHiddenChange" | "onIdChange" | "order" | "page" | "parent" | "parentNode" | "recycleNativeView" | "reusable" | "row" | "rowSpan" | "top" | "typeName" | "viewController" | "accessibilityHidden" | "accessibilityHint" | "accessibilityIdentifier" | "accessibilityIgnoresInvertColors" | "accessibilityLabel" | "accessibilityLanguage" | "accessibilityLiveRegion" | "accessibilityMediaSession" | "accessibilityRole" | "accessibilityState" | "accessibilityValue" | "accessible" | "androidDynamicElevationOffset" | "androidElevation" | "automationText" | "background" | "backgroundColor" | "backgroundImage" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "boxShadow" | "color" | "css" | "cssType" | "height" | "horizontalAlignment" | "iosIgnoreSafeArea" | "iosOverflowSafeArea" | "iosOverflowSafeAreaEnabled" | "isEnabled" | "isLayoutRequired" | "isLayoutValid" | "isUserInteractionEnabled" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "minHeight" | "minWidth" | "modal" | "onAccessibilityHintChange" | "onAccessibilityIdentifierChange" | "onAccessibilityIgnoresInvertColorsChange" | "onAccessibilityLabelChange" | "onAccessibilityValueChange" | "onAndroidBackPressed" | "onColumnChange" | "onColumnSpanChange" | "onDockChange" | "onDoubleTap" | "onIosIgnoreSafeAreaChange" | "onIosOverflowSafeAreaChange" | "onIosOverflowSafeAreaEnabledChange" | "onIsEnabledChange" | "onIsUserInteractionEnabledChange" | "onLeftChange" | "onLoaded" | "onLongPress" | "onOriginXChange" | "onOriginYChange" | "onPan" | "onPinch" | "onRotation" | "onRowChange" | "onRowSpanChange" | "onShowingModally" | "onShownModally" | "onLayoutChanged" | "onSwipe" | "onTap" | "onTopChange" | "onTouch" | "onUnloaded" | "opacity" | "originX" | "originY" | "perspective" | "rotate" | "rotateX" | "rotateY" | "scaleX" | "scaleY" | "textTransform" | "translateX" | "translateY" | "verticalAlignment" | "visibility" | "width" | "items" | "onItemsChange" | "iosEstimatedRowHeight" | "itemIdGenerator" | "itemTemplate" | "itemTemplateSelector" | "itemTemplates" | "onIosEstimatedRowHeightChange" | "onItemTap" | "onItemTemplateChange" | "onItemTemplatesChange" | "onLoadMoreItems" | "onRowHeightChange" | "rowHeight" | "separatorColor"> & React.RefAttributes<NSVElement<NativeScriptListView>>>;
export {};
