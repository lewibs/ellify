/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.androidx.core.view.accessibility;

public class AccessibilityManagerCompat_TouchExplorationStateChangeListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        androidx.core.view.accessibility.AccessibilityManagerCompat
            .TouchExplorationStateChangeListener {
  public AccessibilityManagerCompat_TouchExplorationStateChangeListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onTouchExplorationStateChanged(boolean param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onTouchExplorationStateChanged", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
