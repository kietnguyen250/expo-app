const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME;
const VERSION_CODE_ANDROID = process.env.EXPO_PUBLIC_VERSION_CODE_ANDROID;
const BUILD_NUMBER_IOS = process.env.EXPO_PUBLIC_BUILD_NUMBER_IOS;
const VERSON_NAME = process.env.EXPO_PUBLIC_VERSON_NAME;
const APP_SLUG = process.env.EXPO_PUBLIC_APP_SLUG;

export default {
  expo: {
    name: APP_NAME,
    slug: APP_SLUG,
    version: VERSON_NAME,
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.snack.snackpet",
      buildNumber: BUILD_NUMBER_IOS,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.snack.snackpet",
      versionCode: VERSION_CODE_ANDROID,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "46a9ae8f-a571-4122-94ce-9404d009ff30",
      },
    },
    owner: "snack5438",
  },
};
