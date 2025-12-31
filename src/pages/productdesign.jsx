import React from 'react';
import Product from './components/productdesign-com/product';
import Topbar from '../components/TopBar';

function ProductDesign() {
  const products_dir = "/assets/products/";
  const carousel_imgs = "carousel-images/";

  const triend = products_dir + "Triend/";
  const thunder = products_dir + "Thunder/";
  const cocel = products_dir + "Cocel/";
  const icechair = products_dir + "Ice-chair/";
  const igloo = products_dir + "Igloo/";

  return (
    <div style={{ padding: '40px 20px' }}>
     
      <Product
        title="TRIEND"
        subtitle="2025"
        description="Triend is a thesis project for BA in interior and product design, focusing on the product designing as it is a special table designed to solve a very common problem that we may face in our daily life which is the weak or unsuccessful interactions among individuals. The table has many features that are made to solve different problems or to provide more solutions to same problem, main feature is the fidgets tool built in the table that play a huge role in self mastering and self regulation. As also the one of the main purposes of this design is reducing social stress and anxiety and promote confidence and calmness, which makes this product suitable for any kind of audience and for any kind of environment."
        mainImage={triend + "Triendmain.png"}
        carouselImages={[
          { src: triend + carousel_imgs + "triend1.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
          { src: triend + carousel_imgs + "triend2.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
          { src: triend + carousel_imgs + "triend3.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
          { src: triend + carousel_imgs + "triend4.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
          { src: triend + carousel_imgs + "triend5.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
          { src: triend + carousel_imgs + "triend6.jpg", style: { transform: 'scale(1.2) translate(10px, -10px)' } },
        ]}
      />

      <Product
        title="THUNDER"
        subtitle="2025"
        description="Thunder shaving machine is uniquely designed with cracks on the surface that are inspired by the shape of the thunder. It is designed to be light and easily portable, with the inclination of the body surface that makes the holding of the machine more comfortable and stable. Moreover, the machine can have different coloring options which can match different needs of the consumers."
        descMarginTop={80}
        mainImage={thunder + "SHAVING MACHINE.png"}
        MainImageStyle={{ transform: 'scale(0.8) translate(0px, -40px)' }}
        carouselImages={[
          { src: thunder + carousel_imgs + "C1.jpg", style: { transform: 'scale(1.06)' } },
          { src: thunder + carousel_imgs + "C2.jpg", style: { transform: 'scale(1.06)' } },
          { src: thunder + carousel_imgs + "C3.png", style: { transform: 'scale(1)' } },
          { src: thunder + carousel_imgs + "C4.png", style: { transform: 'scale(1)' } },
          { src: thunder + carousel_imgs + "C5.png", style: { transform: 'scale(1)' } },
        ]}
      />

      <Product
        title="ICE CHAIR"
        subtitle="2025"
        description="Ice chair is inspired by ice in general and every part of it represents a different form, for example the arms represent the smoothness of the ice, the decorative part inside the arms represents the ice flakes and the small legs for stability represent the ice cubes. It is designed to be both stable and very comfortable with the thick cushions and the smooth arms that are curved."
        mainImage={icechair + "yessir.png"}
        MainImageStyle={{ transform: 'scale(1) translate(0px, -40px)' }}
        descMarginTop={70}
        carouselImages={[
          { src: icechair + carousel_imgs + "I1.jpg", style: { transform: 'scale(1.05)' } },
          { src: icechair + carousel_imgs + "I2.jpg", style: { transform: 'scale(1.05)' } },
          { src: icechair + carousel_imgs + "I3.png", style: { transform: 'scale(1)' } },
          { src: icechair + carousel_imgs + "I4.png", style: { transform: 'scale(1)' } },
        ]}
      />

      <Product
        title="COCEL"
        subtitle="2025"
        description="Cocel is a unique earplug/earloop that has two aims, the first and main one is to cancel the noise around, while the second is to be used as an accessory, knowing that it has the jewelry attached to it. The jewelry has a part that can stick with the ear without the need for piercing the ear. The Cocel is designed to be adjustable in case of different ear sizes, as the small string that connects the earplug with the jewelry is made from fabrics that can be stretched easily without any damages."
        mainImage={cocel + "Cocelmain.jpg"}
        descMarginTop={60}
        carouselImages={[
          { src: cocel + carousel_imgs + "CO1.jpg", style: { transform: 'scale(1.05)' } },
          { src: cocel + carousel_imgs + "CO2.jpg", style: { transform: 'scale(1.05)' } },
          { src: cocel + carousel_imgs + "CO3.png", style: { transform: 'scale(1)' } },
          { src: cocel + carousel_imgs + "CO4.png", style: { transform: 'scale(1)' } },
        ]}
      />

      <Product
        title="IGLOO"
        subtitle="2024"
        description="Igloo desk is a studying desk combined with a beautiful harmonic mix of both organic and geometric shapes, inspired by the igloo with the aim of isolation for a better concentration result. It is ideal for studying and remote working as it has good lighting, a space for all the needed tools, a small fountain on the side that is calming and stress-reducing, which also results in helping the user to experience less distraction and a more productive time working."
        mainImage={igloo + "Igloomain.png"}
        MainImageStyle={{ width: '350px', margin: '0 80px 0 0' }}
        descMarginTop={60}
        carouselImages={[
          { src: igloo + carousel_imgs + "IG1.jpg", style: { transform: 'scale(1.2)' } },
          { src: igloo + carousel_imgs + "IG2.png", style: { transform: 'scale(1.2)' } },
          { src: igloo + carousel_imgs + "IG3.png", style: { transform: 'scale(1.2)' } },
        ]}
      />
    </div>
  );
}

export default ProductDesign;
