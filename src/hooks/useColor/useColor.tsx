import { useState } from 'react';

import ImageColors from 'react-native-image-colors';

const useColor = (defaultBackgroundColor: string) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(defaultBackgroundColor);

  const getColorByImage = async (imageUrl: string) => {
    ImageColors.getColors(imageUrl, {
      fallback: defaultBackgroundColor,
    }).then(colors => {
      switch (colors.platform) {
        case 'android':
          setBackgroundColor(colors.dominant || defaultBackgroundColor);
          break;
        case 'ios':
          setBackgroundColor(colors.background || defaultBackgroundColor);
          break;
        default:
          setBackgroundColor(defaultBackgroundColor);
          break;
      }
    });
  };

  return { backgroundColor, getColorByImage };
};

export { useColor };
