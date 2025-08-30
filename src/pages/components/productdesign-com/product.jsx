import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './product.css';
import '@fontsource/montserrat/800.css';

function Product({
  title,
  subtitle,
  description,
  DescMaxWidth,
  mainImage = '',
  carouselImages,
  descMarginTop = 15,
  MainImageMargin,
  MainImageHeight,
  MainImageWidth,
  MainImageStyle,
}) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: false,
    containScroll: 'trimSnaps',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-text">
          <h1 className="product-title">{title}</h1>
          <h2 className="product-subtitle">{subtitle}</h2>
          <p
            className="product-description"
            style={{
              marginTop: descMarginTop,
              maxWidth: DescMaxWidth == null ? '100%' : DescMaxWidth,
            }}
          >
            {description}
          </p>
        </div>

        {mainImage && (
          <div className="product-main-image">
            <img src={mainImage} style={MainImageStyle} alt={title} />
          </div>
        )}
      </div>

      <div className="product-carousel embla" ref={emblaRef}>
        <div className="embla__container">
          {carouselImages.map((img, index) => {
            const {
              src,
              alt,
              style = {},
              className = '',
            } = img;

            return (
              <div className="embla__slide" key={index}>
                <div className="carousel-image-frame" > 
                  <img
                    src={src}
                    alt={alt || `carousel-${index}`}
                    className={`carousel-img-inner ${className}`}
                    style={{
                      ...style,
                    }}
                    onClick={() => setSelectedImage(src)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default Product;
