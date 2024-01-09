import { useState } from "react"
import { auth, signInWithEmailAndPassword } from "../services/firebaseConfig";
import { Button, TextInput, View } from "react-native";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate("HomeScreen")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

export default LoginScreen