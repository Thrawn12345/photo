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
    └── screens/
        ├── HomeScreen.js       # Photo gallery page
        ├── ContactScreen.js    # Contact form and info
        └── EventsScreen.js     # Events showcase
```

## Customization

### Adding Your Own Photos

Edit the `photos` array in `src/screens/HomeScreen.js`:
```javascript
const photos = [
  {
    id: 1,
    url: 'YOUR_IMAGE_URL',
    title: 'Your Photo Title',
  },
  // Add more photos...
];
```

### Adding Your Events

Edit the `events` array in `src/screens/EventsScreen.js`:
```javascript
const events = [
  {
    id: 1,
    title: 'Event Name',
    date: 'Date',
    location: 'Location',
    type: 'Event Type',
    image: 'IMAGE_URL',
    description: 'Description...',
  },
  // Add more events...
];
```

### Updating Contact Information

Edit the contact details in `src/screens/ContactScreen.js` to add your own email, phone, and location.

## Technologies Used

- React Native
- React Native Web
- Expo
- React Navigation
- Unsplash (for demo images)

## License

MIT
