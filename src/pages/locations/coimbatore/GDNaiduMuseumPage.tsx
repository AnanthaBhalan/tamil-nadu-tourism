import * as React from 'react';
import LocationDetailTemplate from '../../../components/LocationDetailTemplate';

const GDNaiduMuseumPage: React.FC = () => {
  return (
    <LocationDetailTemplate
      id="coimbatore-gedee"
      title="G.D. Naidu Museum & Industrial Exhibition"
      city="Coimbatore"
      description="The G.D. Naidu Museum & Industrial Exhibition is a tribute to the great inventor and engineer G.D. Naidu. The museum showcases his inventions, including an electric razor, a tamper-proof voting machine, and a kerosene-run fan. It's a fascinating place for technology enthusiasts and those interested in the history of Indian innovation."
      imageUrl="/images/coimbatore/gd-naidu-museum.jpg"
      address="Avinashi Rd, Pappanaickenpalayam, Coimbatore, Tamil Nadu 641018"
      timing="9:30 AM - 5:30 PM (Closed on Sundays and Public Holidays)"
      entryFee="₹50 for adults, ₹20 for children, ₹100 for foreign nationals"
      contact="+91-422-2573970"
      website="www.gdnaiduexhibition.org"
      tips={[
        "Plan to spend at least 1-2 hours to explore all exhibits.",
        "Photography is allowed but may require additional permission.",
        "Great place for school and college educational trips.",
        "Guides are available for detailed explanations.",
        "Visit the souvenir shop for miniature models of Naidu's inventions."
      ]}
      coordinates={[11.0115, 76.9826]}
      nearbyAttractions={[
        {
          id: "coimbatore-voc-park",
          name: "VOC Park & Zoo",
          distance: "3 km"
        },
        {
          id: "coimbatore-marudhamalai",
          name: "Marudhamalai Temple",
          distance: "8 km"
        }
      ]}
    />
  );
};

export default GDNaiduMuseumPage;
