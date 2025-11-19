# Photographer Portfolio - React Native Web App

A professional photography portfolio web application built with React Native for Web, featuring a photo gallery, events showcase, and contact page.

## Features

- **Photo Gallery**: Showcase your best photography work with a responsive grid layout
- **Events Page**: Display photographed events including weddings, corporate events, birthdays, and more
- **Contact Page**: Contact form and information for potential clients to reach you
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Cross-Platform**: Built with React Native, can be deployed as web, iOS, or Android app

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the App

### Web (Recommended)
```bash
npm run web
```

The app will open in your browser at `http://localhost:19006`

### Mobile Development
```bash
npm start
```

Then scan the QR code with Expo Go app on your phone.

## Project Structure

```
photo_weblap/
├── App.js                      # Main app with navigation setup
├── index.js                    # Entry point
├── package.json                # Dependencies
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
└── src/
    ├── components/
    │   └── MasonryImage.js     # Smart image component for masonry layout
    ├── context/
    │   └── LanguageContext.js  # Language state management (EN/HU)
    ├── screens/
    │   ├── HomeScreen.js       # Photo gallery page
    │   ├── ContactScreen.js    # Contact form and info
    │   └── EventsScreen.js     # Events showcase
    └── utils/
        ├── photoLoader.js      # Central place to manage photos and events
        └── translations.js     # Dictionary for English and Hungarian text
```

## Customization

### Adding Your Own Photos

1. Add your image files to the `photos/best/` folder.
2. Open `src/utils/photoLoader.js`.
3. Add a new line to the `getBestPhotos` function:
```javascript
{ id: 23, url: require('../../photos/best/YOUR_NEW_PHOTO.jpg'), title: 'New Photo' },
```

### Adding Your Events

1. Add your event folder and images to `photos/`.
2. Open `src/utils/photoLoader.js`.
3. Add a new object to the `getEvents` function:
```javascript
{
  id: 4,
  title: 'New Event Name',
  date: 'Date',
  location: 'Location',
  type: 'Event Type',
  description: 'Description...',
  photos: [
    require('../../photos/new_event/photo1.jpg'),
    require('../../photos/new_event/photo2.jpg'),
  ],
  image: require('../../photos/new_event/cover.jpg'),
},
```

### Updating Contact Information

Edit the contact details in `src/screens/ContactScreen.js`.
To change the text labels (like "Phone", "Email"), edit `src/utils/translations.js`.

## Technologies Used

- React Native
- React Native Web
- Expo
- React Navigation
- Masonry Layout (CSS Grid)
- Context API (for Localization)

## License

MIT
