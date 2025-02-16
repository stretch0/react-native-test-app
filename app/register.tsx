import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";

export default function Login() {

  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("user:", user)
    router.push('/(tabs)');
  };

  const handleSignUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    router.push('/(tabs)')
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Sign up</Text>

      <TextInput placeholder="Email" onChangeText={e => setEmail(e)} />

      <TextInput placeholder="Password" onChangeText={e => setPassword(e)}/>

      <Button
        title="Sign up"
        onPress={() => {
          handleSignUp(email, password);
        }}
      />
    </View>
  )
}