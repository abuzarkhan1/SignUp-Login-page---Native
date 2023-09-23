import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";
import { firebaseAuth } from "../config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setgetEmailValidationStatus] =
    useState(false);

  const navigation = useNavigation();
  const handleLogin = async () => {
    if (getEmailValidationStatus && email !== "") {
      await signInWithEmailAndPassword(firebaseAuth, email, password).then(
        (userCred) => {
          if(userCred){
            console.log("User Id" , userCred?.user.uid);
            getDoc(doc(firebaseDB, "user" ,  userCred?.user.uid)).then(docSnap => {
              if(docSnap.exists()){
                console.log("User Data : " , docSnap.data());
              }
            })
          }
        }
      );
    }
  };
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-96"
        style={{ width: screenWidth }}
      />
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6">
        <Image source={Logo} className="h-16 w-16" resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Login Here
        </Text>
        <View className="w-full flex items-center justify-center">
          {/* alert */}

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
            setgetEmailValidationStatus={setgetEmailValidationStatus}
          />

          {/* password */}

          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={setPassword}
          />

          {/* Login Button */}

          <TouchableOpacity
            onPress={handleLogin}
            className="w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center"
          >
            <Text className="py-2 text-white text-xl font-semibold">
              Login In
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText ">
              Don't Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Create Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
