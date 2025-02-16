import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";

export default function Login() {

  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("user:", user)
    router.push('/(tabs)');
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Login</Text>

      <TextInput placeholder="Email" onChangeText={e => setEmail(e)} />

      <TextInput placeholder="Password" onChangeText={e => setPassword(e)}/>

      <Button
        title="Login"
        onPress={() => {
          handleLogin(email, password);
        }}
      />
    </View>
  )
}