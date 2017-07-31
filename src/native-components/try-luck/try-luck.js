import React from "react";
import { requireNativeComponent } from "react-native";

/**
 * Try luck view
 */
class TryLuckView extends React.Component {
    static propTypes = {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <PTTryLuckView { ...this.props  } />;
    }
}

export let PTTryLuckView = requireNativeComponent(`PTTryLuckView`, TryLuckView, {});

export { PTTryLuckView as Component };