import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from "expo-router";

const AuthButtons: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
          accessibilityLabel="Login"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}
          accessibilityLabel="Register"
          accessibilityRole="button"
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface AuthButtonsStyles {
  container: ViewStyle;
  buttons: ViewStyle;
  loginButton: ViewStyle;
  registerButton: ViewStyle;
  buttonText: TextStyle;
  registerButtonText: TextStyle;
}

const styles = StyleSheet.create<AuthButtonsStyles>({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  loginButton: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  registerButton: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  registerButtonText: {
    color: "black", // Corrected text color
    fontSize: 17,
    fontWeight: "600",
  },
});

export default AuthButtons;