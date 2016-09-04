package com.awesomeproject;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Arrays;
import java.util.List;

public class UiHandlerModule extends ReactContextBaseJavaModule {

public UiHandlerModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

 @Override
  public String getName() {
    return "UiHandler";
  }

  	@ReactMethod
        public void hello(){
Log.d("anurag","hey!! this is function");
    final Activity activity = getCurrentActivity();
Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.jabong.com"));
activity.startActivity(browserIntent);

}
}
