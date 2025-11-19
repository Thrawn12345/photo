import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
} from 'react-native';
import { MasonryImage } from '../components/MasonryImage';
import { getRandomBestPhotos } from '../utils/photoLoader';
import { useLanguage } from '../context/LanguageContext';
import '../styles/webStyles';

export default function HomeScreen({ navigation }) {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [photos, setPhotos] = useState([]);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    setPhotos(getRandomBestPhotos(24));
  }, []);

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>PHOTOGRAPHY</Text>
        </View>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navLink}>{t('home')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Text style={styles.navLink}>{t('portfolio')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navLink}>{t('contact')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleLanguage} style={styles.langButton}>
            <Text style={styles.langText}>{language === 'en' ? 'HU' : 'EN'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero/Intro (Optional, keeping it minimal as per request) */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>{t('heroTitle')}</Text>
      </View>

      {/* Gallery */}
      <View style={styles.gallery} dataSet={{ masonryGrid: true }}>
        {photos.map((photo) => (
          <View 
            key={photo.id} 
            style={styles.photoContainer} 
            dataSet={{ masonryItem: true, photoContainer: true }}
          >
            <MasonryImage
              source={photo.url}
              style={styles.photo}
              dataSet={{ masonryImage: true }}
            />
          </View>
        ))}
      </View>

      {/* Footer / Contact Section */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.portraitContainer}>
             {/* Placeholder portrait - using one of the best photos */}
            <Image 
              source={require('../../photos/best/_MG_9955.jpg')} 
              style={styles.portrait} 
              resizeMode="cover"
            />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.footerTitle}>{t('getInTouch')}</Text>
            <Text style={styles.footerText}>
              {t('footerText')}
            </Text>
            
            <View style={styles.socialLinks}>
              <TouchableOpacity onPress={() => openLink('https://instagram.com')} style={styles.socialButton}>
                <Text style={styles.socialButtonText}>{t('instagram')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('mailto:contact@example.com')} style={styles.socialButton}>
                <Text style={styles.socialButtonText}>{t('email')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('https://linkedin.com')} style={styles.socialButton}>
                <Text style={styles.socialButtonText}>{t('linkedin')}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.bookNowButton}
              onPress={() => navigation.navigate('Contact')}
            >
              <Text style={styles.bookNowText}>{t('bookNow')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.copyright}>{t('copyright')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Changed to white for a cleaner look
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 20,
  },
  navLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 1,
    marginLeft: 20,
  },
  langButton: {
    marginLeft: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
  },
  langText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  hero: {
    padding: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 18,
    letterSpacing: 4,
    color: '#666',
  },
  gallery: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  photoContainer: {
    backgroundColor: '#fff',
    borderRadius: 0, // Sharper edges for a more modern look
    overflow: 'hidden',
    marginBottom: 15,
  },
  photo: {
    width: '100%',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    padding: 50,
    marginTop: 50,
  },
  footerContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    marginBottom: 30,
  },
  portraitContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#333',
  },
  portrait: {
    width: '100%',
    height: '100%',
  },
  contactInfo: {
    maxWidth: 500,
    alignItems: 'flex-start',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    letterSpacing: 1,
  },
  footerText: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#555',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 12,
    letterSpacing: 1,
  },
  bookNowButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  bookNowText: {
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  copyright: {
    color: '#555',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 20,
  },
});
