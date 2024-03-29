import 'react-native-gesture-handler'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_Regular: require('@fonts/Urbanist-Regular.ttf'),
    Urbanist_Medium: require('@fonts/Urbanist-Medium.ttf'),
    Urbanist_SemiBold: require('@fonts/Urbanist-SemiBold.ttf'),
    Urbanist_Bold: require('@fonts/Urbanist-Bold.ttf'),
  })

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }

    loadFonts()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <StatusBar translucent />
}
