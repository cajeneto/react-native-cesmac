import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({onLoginSuccess}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});
  const [loading, setLoading] = useState(false);

  // faz uma validação simples
  const validateEmail = (email: string) => {
    if (!email) return 'Email é obrigatório';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email inválido';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return 'Senha é obrigatória';
    if (password.length < 6) return 'Senha deve ter pelo menos 6 caracteres';
    return '';
  };


  const handleBlur = (field: 'email' | 'password') => {
    setTouched({ ...touched, [field]: true });
    
    if (field === 'email') {
      setErrors({ ...errors, email: validateEmail(email) });
    } else {
      setErrors({ ...errors, password: validatePassword(password) });
    }
  };

  const handleLogin = async () => {
    setTouched({ email: true, password: true });
    
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    setLoading(true);
    
    // Simular chamada de API
    setTimeout(() => {
      // Validação condicional simples
      if (email === 'netocajeh@gmail.com' && password === '123456') {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        onLoginSuccess();
      } else {
        Alert.alert('Erro', 'Email ou senha inválidos');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/spendWise-removebg-preview.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>SPENDWISE</Text>
          <Text style={styles.subtitle}>
            Seja bem vindo ao SpendWise{'\n'}
            Porque seu dinheiro vale mais!
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                touched.email && errors.email && styles.inputError
              ]}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (touched.email) {
                  setErrors({ ...errors, email: validateEmail(text) });
                }
              }}
              onBlur={() => handleBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!loading}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                touched.password && errors.password && styles.inputError
              ]}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (touched.password) {
                  setErrors({ ...errors, password: validatePassword(text) });
                }
              }}
              onBlur={() => handleBlur('password')}
              secureTextEntry
              editable={!loading}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#074F6E" />
            ) : (
              <Text style={styles.buttonText}>Acessar</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.forgotPassword}
          disabled={loading}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#074F6E',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: '100%',
    minHeight: 200,
    backgroundColor: '#48A7D0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#074F6E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#48A7D0',
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#074F6E',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#074F6E',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#ff4444',
    backgroundColor: '#fff5f5',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 6,
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#48A7D0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonDisabled: {
    backgroundColor: '#90CDE8',
    opacity: 0.8,
  },
  buttonText: {
    color: '#074F6E',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  forgotPassword: {
    marginTop: 20,
    padding: 10,
  },
  forgotPasswordText: {
    color: '#48A7D0',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  hint: {
    marginTop: 40,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  hintText: {
    color: '#90CDE8',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
});