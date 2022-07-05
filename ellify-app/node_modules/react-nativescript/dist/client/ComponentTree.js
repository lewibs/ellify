const randomKey = Math.random()
    .toString(36)
    .slice(2);
const internalInstanceKey = "__reactInternalInstance$" + randomKey;
const internalEventHandlersKey = "__reactEventHandlers$" + randomKey;
export function precacheFiberNode(hostInst, node) {
    node.setAttribute(internalInstanceKey, hostInst);
}
/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
export function getClosestInstanceFromNode(node) {
    if (node.getAttribute(internalInstanceKey)) {
        return node.getAttribute(internalInstanceKey);
    }
    while (!node.getAttribute(internalInstanceKey)) {
        if (node.parentNode) {
            // if(!node.parent){
            //   console.warn(`node.parent was null; meanwhile, node.parentNode was:`, node.parentNode);
            // }
            node = node.parentNode;
        }
        else {
            // Top of the tree. This node must not be part of a React tree (or is
            // unmounted, potentially).
            return null;
        }
    }
    const inst = node.getAttribute(internalInstanceKey);
    // if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber, this will always be the deepest root.
    return inst;
    // }
    // return null;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
export function getInstanceFromNode(node) {
    const inst = node.getAttribute(internalInstanceKey);
    if (inst) {
        return inst;
        // if (inst.tag === HostComponent || inst.tag === HostText) {
        //   return inst;
        // } else {
        //   return null;
        // }
    }
    return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
export function getNodeFromInstance(inst) {
    // if (inst.tag === HostComponent || inst.tag === HostText) {
    //   // In Fiber this, is just the state node right now. We assume it will be
    //   // a host component or host text.
    //   return inst.stateNode;
    // }
    return inst.stateNode;
    // Without this first invariant, passing a non-DOM-component triggers the next
    // invariant for a missing parent, which is super confusing.
    // invariant(false, 'getNodeFromInstance: Invalid argument.');
    // throw new Error('getNodeFromInstance: Invalid argument.');
}
export function getFiberCurrentPropsFromNode(node) {
    return node.getAttribute(internalEventHandlersKey) || null;
}
export function updateFiberProps(node, props) {
    node.setAttribute(internalEventHandlersKey, props);
}
//# sourceMappingURL=ComponentTree.js.map