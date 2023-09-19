import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { avatars } from "../utils/support";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const SignUpScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);

  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: screenWidth }}
      />

      <>
        {/*List of avatar  */}
        <View
          className="absolute inset-0 z-10"
          style={{ width: screenWidth, height: screenHeight }}
        >
          <ScrollView>
            <BlurView
              className="w-full h-full py-16 flex-row flex-wrap items-center jusitfy-evenly"
              tint="light"
              intensity={100}
              style={{ width: screenWidth, height: screenHeight }}
            >
              {avatars?.map((item) => (
                <TouchableOpacity
                  key={item._id}
                  className="w-20 h-20 m-2 p-1 rounded-full border-2 border-primary relative"
                >
                  <Image
                    source={{ uri: item?.image.asset.url }}
                    className="w-full h-full"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}      
              {/* time 1:00 */}
            </BlurView>
          </ScrollView>
        </View>
      </>

      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6">
        <Image source={Logo} className="h-16 w-16" resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Register Here
        </Text>

        {/* Avatar*/}

        <View className="w-full flex items-center justify-center relative mt-2">
          <TouchableOpacity className="w-20 h-20 p-1 rounded-full border-2 border-primary relative">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full"
              resizeMode="contain"
            />
            <View className="w-6 h-6 bg-primary rounded-full absolute top-0 right-0 flex items-center justify-center">
              <MaterialIcons name="edit" size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full flex items-center justify-center">
          {/* Full Name */}

          <UserTextInput
            placeholder="Full Name"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* password */}

          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={setEmail}
          />

          {/* Login Button */}

          <TouchableOpacity className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py-2 text-white text-xl font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText ">
              {" "}
              Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
