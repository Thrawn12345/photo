import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert(t('error'), t('fillAllFields'));
      return;
    }
    Alert.alert(t('success'), t('messageSent'));
    setName('');
    setEmail('');
    setMessage('');
  };

  const openEmail = () => {
    Linking.openURL('mailto:photographer@example.com');
  };

  const openPhone = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('getInTouchTitle')}</Text>
        <Text style={styles.subtitle}>
          {t('discussNeeds')}
        </Text>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.sectionTitle}>{t('contactInfo')}</Text>
        
        <TouchableOpacity style={styles.infoItem} onPress={openEmail}>
          <Text style={styles.infoLabel}>{t('email')}:</Text>
          <Text style={styles.infoValue}>photographer@example.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem} onPress={openPhone}>
          <Text style={styles.infoLabel}>{t('phone')}</Text>
          <Text style={styles.infoValue}>+1 (234) 567-890</Text>
        </TouchableOpacity>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>{t('location')}</Text>
          <Text style={styles.infoValue}>New York, NY</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>{t('availability')}</Text>
          <Text style={styles.infoValue}>Mon - Sat, 9AM - 6PM</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>{t('sendMessage')}</Text>

        <Text style={styles.label}>{t('name')}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={t('yourName')}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>{t('email')}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={t('yourEmail')}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>{t('message')}</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          placeholder={t('tellMeAbout')}
          placeholderTextColor="#999"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>{t('send')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.social}>
        <Text style={styles.sectionTitle}>{t('followMe')}</Text>
        <View style={styles.socialLinks}>
          <Text style={styles.socialLink}>Instagram</Text>
          <Text style={styles.socialLink}>Facebook</Text>
          <Text style={styles.socialLink}>Twitter</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a1a1a',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    fontStyle: 'italic',
  },
  contactInfo: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    width: 120,
  },
  infoValue: {
    fontSize: 16,
    color: '#1a1a1a',
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    color: '#333',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  social: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 0,
    marginBottom: 40,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialLink: {
    fontSize: 16,
    color: '#0066cc',
    fontWeight: '600',
  },
});
