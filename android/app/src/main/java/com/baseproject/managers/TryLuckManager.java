package com.baseproject.managers;

import com.baseproject.views.TryLuckView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class TryLuckManager extends SimpleViewManager<TryLuckView> {

    private static final String REACT_CLASS = "PTTryLuckView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public TryLuckView createViewInstance(ThemedReactContext context) {
        return new TryLuckView(context);
    }
}
