import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { MasonryImage } from '../components/MasonryImage';
import { getEvents } from '../utils/photoLoader';
import { useLanguage } from '../context/LanguageContext';
import '../styles/webStyles';

const { width } = Dimensions.get('window');

// Events are now loaded dynamically from the utility
const events = getEvents();

export default function EventsScreen({ navigation }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const { t } = useLanguage();

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const openGallery = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeGallery = () => {
    setModalVisible(false);
    setSelectedEvent(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('photographedEvents')}</Text>
        <Text style={styles.subtitle}>
          {t('memorableMoments')}
        </Text>
      </View>

      <View style={styles.eventsContainer}>
        {events.map((event) => (
          <TouchableOpacity 
            key={event.id} 
            style={styles.eventCard}
            dataSet={{ eventCard: true }}
            onPress={() => openGallery(event)}
          >
            <Image
              source={event.image}
              style={styles.eventImage}
              resizeMode="cover"
            />
            <View style={styles.eventContent}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{event.type}</Text>
                </View>
              </View>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventLocation}>📍 {event.location}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
              <Text style={styles.photoCount}>📷 {event.photos.length} {t('photos')} - {t('tapToView')}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeGallery}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {selectedEvent?.title}
            </Text>
            <TouchableOpacity onPress={closeGallery} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕ {t('close')}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalGallery}>
            {(() => {
              if (!selectedEvent) return null;

              return (
                <View style={styles.galleryGrid} dataSet={{ masonryGrid: true }}>
                  {selectedEvent.photos.map((photo, index) => (
                    <View 
                      key={index} 
                      style={styles.galleryPhotoContainer} 
                      dataSet={{ masonryItem: true, galleryPhoto: true }}
                    >
                      <MasonryImage
                        source={photo}
                        style={styles.galleryPhoto}
                        dataSet={{ masonryImage: true }}
                      />
                    </View>
                  ))}
                </View>
              );
            })()}
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>{t('haveUpcomingEvent')}</Text>
        <Text style={styles.ctaText}>
          {t('letMeCapture')}
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.ctaButtonText}>{t('bookNow')}</Text>
        </TouchableOpacity>
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
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  eventsContainer: {
    padding: 15,
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
  eventImage: {
    width: '100%',
    height: 400,
    backgroundColor: '#f0f0f0',
  },
  eventContent: {
    padding: 15,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 10,
  },
  badge: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  photoCount: {
    fontSize: 14,
    color: '#0066cc',
    marginTop: 10,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  closeButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalGallery: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  galleryGrid: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  galleryPhotoContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    elevation: 2,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
  galleryPhoto: {
    width: '100%',
    // Height is handled by the img tag
  },
  ctaSection: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 5,
    marginBottom: 40,
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  ctaText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
