import { Image, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import {NativeWindStyleSheet} from "nativewind";

const staticImage = require("./assets/images/image-qr-code.png")
const customFonts = {
  'Outfit Thin': require("./assets/fonts/Outfit-VariableFont_wght.ttf")
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
    const [loaded] = useFonts(customFonts);
    if (!loaded) {
        return null;
    }
    return (
        <View className="container flex-1  items-center justify-center min-h-screen bg-black">
            <View className="w-[322px] bg-white flex items-center rounded-2xl">
                <Image source={staticImage} className="object-fill w-[287px] h-[287px] m-4 rounded-xl"></Image>
                <Text className="text-xl leading-[26px] text-center px-5 font-Outfit Thin font-extrabold tracking-wide text-dark-blue">Improve your front-end skills by building projects</Text>
                <Text className="pt-4 pb-12 text-[15px] px-6 leading-5 text-center font-Outfit Thin text-grayish-blue">Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the next level</Text>
            </View>
        </View>
    );
}
