import * as React from 'react';
import LocationDetailTemplate from '../../../components/LocationDetailTemplate';

const VOCParkPage: React.FC = () => {
  return (
    <LocationDetailTemplate
      id="coimbatore-voc-park"
      title="VOC Park & Zoo"
      city="Coimbatore"
      description="VOC Park & Zoo, officially known as V.O. Chidambaranar Park, is a popular recreational spot in Coimbatore. The park is named after the famous freedom fighter V.O. Chidambaram Pillai. It features a well-maintained zoo, a toy train, and beautiful gardens. The park is a favorite among families and children, offering a perfect blend of education and entertainment."
      imageUrl="/images/coimbatore/voc-park.jpg"
      address="Avinashi Rd, Tatabad, Gopalapuram, Coimbatore, Tamil Nadu 641018"
      timing="9:00 AM - 6:00 PM (Closed on Tuesdays)"
      entryFee="₹20 for adults, ₹10 for children, ₹50 for camera"
      contact="+91-422-2301321"
      tips={[
        "Visit during weekdays to avoid weekend crowds.",
        "The toy train ride is a must-try for children.",
        "Carry water and snacks as options inside are limited.",
        "Wear comfortable walking shoes as the area is quite large.",
        "Early morning and late afternoon are the best times to visit to avoid the heat."
      ]}
      coordinates={[11.0106, 76.9671]}
      nearbyAttractions={[
        {
          id: "coimbatore-marudhamalai",
          name: "Marudhamalai Temple",
          distance: "10 km"
        },
        {
          id: "coimbatore-gedee",
          name: "G.D. Naidu Museum",
          distance: "3 km"
        }
      ]}
    />
  );
};

export default VOCParkPage;
