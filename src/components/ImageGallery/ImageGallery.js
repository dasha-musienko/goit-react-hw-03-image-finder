import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id}>
            <ImageGalleryItem
              smallImg={webformatURL}
              largeImg={largeImageURL}
            />
          </li>
        );
      })}
    </Gallery>
  );
};
