// Helper to get all photos from best folder
export const getBestPhotos = () => {
  return [
    { id: 1, url: require('../../photos/best/IMG_4415.jpg'), title: 'IMG 4415' },
    { id: 2, url: require('../../photos/best/IMG_5918.jpg'), title: 'IMG 5918' },
    { id: 3, url: require('../../photos/best/IMG_5924.jpg'), title: 'IMG 5924' },
    { id: 4, url: require('../../photos/best/_MG_1650.jpg'), title: 'MG 1650' },
    { id: 5, url: require('../../photos/best/_MG_1691.jpg'), title: 'MG 1691' },
    { id: 6, url: require('../../photos/best/_MG_1701.jpg'), title: 'MG 1701' },
    { id: 7, url: require('../../photos/best/_MG_1754.jpg'), title: 'MG 1754' },
    { id: 8, url: require('../../photos/best/_MG_6573.jpg'), title: 'MG 6573' },
    { id: 9, url: require('../../photos/best/_MG_6581.jpg'), title: 'MG 6581' },
    { id: 10, url: require('../../photos/best/_MG_6596.jpg'), title: 'MG 6596' },
    { id: 11, url: require('../../photos/best/_MG_7027.jpg'), title: 'MG 7027' },
    { id: 12, url: require('../../photos/best/_MG_7373.jpg'), title: 'MG 7373' },
    { id: 13, url: require('../../photos/best/_MG_7404.jpg'), title: 'MG 7404' },
    { id: 14, url: require('../../photos/best/_MG_7409.jpg'), title: 'MG 7409' },
    { id: 15, url: require('../../photos/best/_MG_7450.jpg'), title: 'MG 7450' },
    { id: 16, url: require('../../photos/best/_MG_7531.jpg'), title: 'MG 7531' },
    { id: 17, url: require('../../photos/best/_MG_9760.jpg'), title: 'MG 9760' },
    { id: 18, url: require('../../photos/best/_MG_9778.jpg'), title: 'MG 9778' },
    { id: 19, url: require('../../photos/best/_MG_9857.jpg'), title: 'MG 9857' },
    { id: 20, url: require('../../photos/best/_MG_9899.jpg'), title: 'MG 9899' },
    { id: 21, url: require('../../photos/best/_MG_9955.jpg'), title: 'MG 9955' },
    { id: 22, url: require('../../photos/best/_MG_9956.jpg'), title: 'MG 9956' },
  ];
};

export const getRandomBestPhotos = (count = 12) => {
  const allPhotos = getBestPhotos();
  const shuffled = [...allPhotos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate events array with static requires
export const getEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Bled Photography Session',
      date: 'Summer 2024',
      location: 'Bled, Slovenia',
      type: 'Travel',
      description: 'Stunning photography session at Lake Bled, capturing the iconic island church and alpine scenery.',
      photos: [
        require('../../photos/bled/_MG_7027.jpg'),
        require('../../photos/bled/_MG_7131.jpg'),
        require('../../photos/bled/_MG_7183.jpg'),
        require('../../photos/bled/_MG_7373.jpg'),
        require('../../photos/bled/_MG_7404.jpg'),
        require('../../photos/bled/_MG_7409.jpg'),
        require('../../photos/bled/_MG_7450.jpg'),
        require('../../photos/bled/_MG_7511.jpg'),
        require('../../photos/bled/_MG_7531.jpg'),
        require('../../photos/bled/_MG_7560.jpg'),
      ],
      image: require('../../photos/bled/_MG_7404.jpg'),
    },
    {
      id: 2,
      title: 'Budapest Urban Photography',
      date: 'Fall 2024',
      location: 'Budapest, Hungary',
      type: 'Travel',
      description: 'Urban exploration of Budapest, featuring historic architecture, the Danube River, and city landmarks.',
      photos: [
        require('../../photos/bp/_MG_0039.jpg'),
        require('../../photos/bp/_MG_0799.jpg'),
        require('../../photos/bp/_MG_0932.jpg'),
        require('../../photos/bp/_MG_1044.jpg'),
        require('../../photos/bp/_MG_1569.jpg'),
        require('../../photos/bp/_MG_9760.jpg'),
        require('../../photos/bp/_MG_9778.jpg'),
        require('../../photos/bp/_MG_9857.jpg'),
        require('../../photos/bp/_MG_9878.jpg'),
        require('../../photos/bp/_MG_9899.jpg'),
        require('../../photos/bp/_MG_9955.jpg'),
        require('../../photos/bp/_MG_9956.jpg'),
        require('../../photos/bp/_MG_9961.jpg'),
      ],
      image: require('../../photos/bp/_MG_0039.jpg'),
    },
    {
      id: 3,
      title: 'M5 Automotive Photography',
      date: 'Spring 2024',
      location: 'Various Locations',
      type: 'Automotive',
      description: 'Professional automotive photography showcasing the BMW M5 in various settings and angles.',
      photos: [
        require('../../photos/m5/_MG_1623.jpg'),
        require('../../photos/m5/_MG_1650.jpg'),
        require('../../photos/m5/_MG_1667.jpg'),
        require('../../photos/m5/_MG_1691.jpg'),
        require('../../photos/m5/_MG_1694.jpg'),
        require('../../photos/m5/_MG_1720.jpg'),
        require('../../photos/m5/_MG_1729.jpg'),
        require('../../photos/m5/_MG_1754.jpg'),
        require('../../photos/m5/_MG_1755.jpg'),
      ],
      image: require('../../photos/m5/_MG_1623.jpg'),
    },
    {
      id: 4,
      title: 'Transylvania Adventure',
      date: 'Summer 2024',
      location: 'Transylvania, Romania',
      type: 'Travel',
      description: 'Exploring the mystical landscapes and medieval castles of Transylvania, Romania.',
      photos: [
        require('../../photos/transilvinia/IMG_5918.jpg'),
        require('../../photos/transilvinia/IMG_5924.jpg'),
        require('../../photos/transilvinia/IMG_5963.jpg'),
        require('../../photos/transilvinia/IMG_6085.jpg'),
        require('../../photos/transilvinia/IMG_6152.jpg'),
        require('../../photos/transilvinia/IMG_6205.jpg'),
        require('../../photos/transilvinia/IMG_6216.jpg'),
        require('../../photos/transilvinia/IMG_6222.jpg'),
        require('../../photos/transilvinia/IMG_6448.jpg'),
        require('../../photos/transilvinia/IMG_6469.jpg'),
        require('../../photos/transilvinia/IMG_6482.jpg'),
      ],
      image: require('../../photos/transilvinia/IMG_5918.jpg'),
    },
    {
      id: 5,
      title: 'Balloon Release Event',
      date: 'Spring 2024',
      location: 'Event Venue',
      type: 'Event',
      description: 'Colorful balloon release ceremony capturing joyful moments and celebration.',
      photos: [
        require('../../photos/ballon_release/_MG_1149.jpg'),
        require('../../photos/ballon_release/_MG_1151.jpg'),
        require('../../photos/ballon_release/_MG_1155.jpg'),
        require('../../photos/ballon_release/_MG_1207.jpg'),
        require('../../photos/ballon_release/_MG_1369.jpg'),
        require('../../photos/ballon_release/_MG_1432.jpg'),
        require('../../photos/ballon_release/_MG_1434.jpg'),
        require('../../photos/ballon_release/_MG_1464.jpg'),
        require('../../photos/ballon_release/_MG_1469.jpg'),
        require('../../photos/ballon_release/_MG_1484.jpg'),
        require('../../photos/ballon_release/_MG_1485.jpg'),
      ],
      image: require('../../photos/ballon_release/_MG_1149.jpg'),
    },
  ];

  return events.map(event => {
    const photosWithDims = event.photos.map(photo => {
      return { source: photo };
    });
    return { ...event, photos: photosWithDims };
  });
};
