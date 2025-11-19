import { Platform } from 'react-native';

// Inject hover styles for web
if (Platform.OS === 'web') {
  const style = document.createElement('style');
  style.textContent = `
    /* Photo hover effect on home page */
    [data-photo-container]:hover {
      transform: scale(1.08) !important;
      z-index: 10 !important;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
    }

    [data-photo-container] {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease !important;
    }

    /* Event card hover effect */
    [data-event-card]:hover {
      transform: scale(1.02) !important;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25) !important;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease !important;
    }

    [data-event-card] {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease !important;
    }

    /* Gallery photo hover effect */
    [data-gallery-photo]:hover {
      transform: scale(1.08) !important;
      z-index: 10 !important;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
    }

    [data-gallery-photo] {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease !important;
      cursor: pointer !important;
    }

    /* Masonry Layout */
    [data-masonry-grid] {
      column-count: 1;
      column-gap: 15px;
      width: 100%;
      display: block !important; /* Ensure it behaves like a block for columns */
    }
    @media (min-width: 600px) {
      [data-masonry-grid] { column-count: 2; }
    }
    @media (min-width: 900px) {
      [data-masonry-grid] { column-count: 3; }
    }
    @media (min-width: 1200px) {
      [data-masonry-grid] { column-count: 4; }
    }
    @media (min-width: 1500px) {
      [data-masonry-grid] { column-count: 5; }
    }
    @media (min-width: 1800px) {
      [data-masonry-grid] { column-count: 6; }
    }
    
    [data-masonry-item] {
      break-inside: avoid;
      margin-bottom: 15px;
      width: 100%;
      display: inline-block; /* Helps with break-inside behavior in some browsers */
    }
  `;
  document.head.appendChild(style);
}

export default {};
