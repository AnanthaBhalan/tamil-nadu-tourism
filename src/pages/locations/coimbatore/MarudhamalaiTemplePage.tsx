import * as React from 'react';
import LocationDetailTemplate from '../../../components/LocationDetailTemplate';

const MarudhamalaiTemplePage: React.FC = () => {
  return (
    <LocationDetailTemplate
      id="coimbatore-marudhamalai"
      title="Marudhamalai Temple"
      city="Coimbatore"
      description="Dedicated to Lord Murugan, the Marudhamalai Temple is a famous hill temple located about 12 km from Coimbatore. The temple is situated on a hillock and offers a panoramic view of the city. The main deity, Dandayudhapani Swamy, is believed to be a swayambumurthy (self-manifested). The temple is known for its beautiful Dravidian architecture and the annual Panguni Uthiram festival which attracts thousands of devotees."
      imageUrl="/images/coimbatore/marudhamalai-temple.jpg"
      address="Marudhamalai Road, Marudhamalai Adivaram, Coimbatore, Tamil Nadu 641046"
      timing="5:00 AM - 1:00 PM, 4:00 PM - 9:00 PM"
      entryFee="Free"
      contact="+91-422-2429000"
      website="www.marudhamalaitemple.tnhrce.in"
      tips={[
        "Best time to visit is during the early morning or evening aarti.",
        "There are around 150 steps to climb to reach the temple, but an elevator is available for elderly and differently-abled visitors.",
        "Dress modestly as it's a religious site.",
        "Visit during the annual Panguni Uthiram festival for a special experience.",
        "Photography is not allowed inside the sanctum sanctorum."
      ]}
      coordinates={[11.0486, 76.8199]}
      nearbyAttractions={[
        {
          id: "coimbatore-gedee",
          name: "G.D. Naidu Museum",
          distance: "8 km"
        },
        {
          id: "coimbatore-voc-park",
          name: "VOC Park & Zoo",
          distance: "10 km"
        }
      ]}
    />
  );
};

export default MarudhamalaiTemplePage;
