# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.






## How to do the splash screen
1. import usetstate and useEfeect and also ActivityIndicator

(The ActivityIndicator is a built-in React Native component that shows a loading spinner (a circular progress animation). It's commonly used to let users know that something is loading — like:

a splash screen delay,)

2. create a useState for the loading state so the splash screen shows 

const [isLoading, setIsLoading] = useState(true);

3. now the use effect function (

    
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show splash screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);
)

4. set the if statmennt 

 if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-green-600">
        <Image
          source={require('../assets/images/mart.png')}
          className="w-32 h-32 rounded-full"
        />
        <!-- optional to add the name  -->
        <Text className="text-white text-xl font-bold mt-4">Shopping Mall</Text> 
        <ActivityIndicator size="large" color="#ffffff" className="mt-6" />
      </View>
    );
  }

