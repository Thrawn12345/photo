import React from 'react';
import { Image, Platform, View } from 'react-native';

export const MasonryImage = ({ source, style, resizeMode, ...props }) => {
  if (Platform.OS === 'web') {
    // On web, we render a standard HTML img tag to let the browser handle aspect ratios naturally
    // This fixes the "square crop" issue by allowing height: auto
    return (
      <img
        src={source.uri || source}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover', // Ensures image covers the width
          ...style,
        }}
        {...props}
      />
    );
  }

  // Fallback for native (iOS/Android)
  return (
    <Image
      source={source}
      style={style}
      resizeMode={resizeMode}
      {...props}
    />
  );
};
