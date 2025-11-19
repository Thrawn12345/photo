# HOW TO ADD NEW PHOTOS TO YOUR PORTFOLIO

## 📸 Adding Photos to Existing Events

### To add photos to the main gallery (Best Photos):
1. Copy your photos to: `photos/best/`
2. Open: `src/utils/photoLoader.js`
3. In the `getBestPhotos` function (around line 2), add a new line:
   ```javascript
   export const getBestPhotos = () => {
     return [
       { id: 1, url: require('../../photos/best/IMG_4415.jpg'), title: 'IMG 4415' },
       { id: 2, url: require('../../photos/best/IMG_5918.jpg'), title: 'IMG 5918' },
       // ADD YOUR NEW PHOTO HERE:
       { id: 23, url: require('../../photos/best/YOUR_PHOTO.jpg'), title: 'Your Title' },
       // ... rest of files
     ];
   };
   ```
4. Save and refresh your browser - the new photo will appear!

### To add photos to an existing event:
1. Copy your photos to the event folder (e.g., `photos/bled/`)
2. Open: `src/utils/photoLoader.js`
3. Find the event in the `getEvents` function (around line 30)
4. Add the require statement to the `photos` array:
   ```javascript
   {
     id: 1,
     title: 'Bled Photography Session',
     // ... other settings
     photos: [
       require('../../photos/bled/_MG_7027.jpg'),
       require('../../photos/bled/YOUR_NEW_PHOTO.jpg'),  // ADD HERE
       // ... rest of photos
     ],
     image: require('../../photos/bled/_MG_7027.jpg'),
   },
   ```
5. Save and refresh - the photo will appear in that event!

## 🆕 Adding a NEW Event Folder

### Step 1: Create the folder
Create a new folder in `photos/` with your event name (e.g., `photos/wedding_2024/`)

### Step 2: Add your photos
Copy all photos for this event into the new folder

### Step 3: Add the event to getEvents function
Open `src/utils/photoLoader.js` and add a new event object to the array in `getEvents()` (around line 30):

```javascript
export const getEvents = () => {
  return [
    { /* existing event 1 */ },
    { /* existing event 2 */ },
    // ... other existing events
    
    // ADD YOUR NEW EVENT HERE:
    {
      id: 6,  // Next sequential ID
      title: 'Beautiful Wedding 2024',
      date: 'June 15, 2024',
      location: 'Grand Hotel, New York',
      type: 'Wedding',
      description: 'Magical wedding ceremony and reception capturing love and joy.',
      photos: [
        require('../../photos/wedding_2024/photo1.jpg'),
        require('../../photos/wedding_2024/photo2.jpg'),
        require('../../photos/wedding_2024/photo3.jpg'),
        // Add all your photos with require()
      ],
      image: require('../../photos/wedding_2024/photo1.jpg'),  // Cover image (first photo)
    },
  ];
};
```

### Step 4: Save and refresh
Your new event will appear on the Events page!

## 🎨 Event Types
Use these for the `type` field:
- Wedding
- Travel
- Automotive
- Event
- Portrait
- Corporate Event
- Birthday
- Fashion

## ⚡ Quick Tips
- Photo filenames must match EXACTLY (including .jpg, .JPG, .png, etc.)
- Use descriptive folder names (lowercase, use underscores: `my_event_name`)
- The first photo in the array becomes the cover image for the event
- Photos appear in the order you list them
- No need to restart the app - just refresh the browser!

## 📋 Current Event Folders:
- `best/` - Main gallery (22 photos)
- `bled/` - Bled Photography (10 photos)
- `bp/` - Budapest Urban (13 photos)
- `m5/` - M5 Automotive (8 photos)
- `transilvinia/` - Transylvania Adventure (11 photos)
- `ballon_release/` - Balloon Release Event (11 photos) ✨ NEW!
