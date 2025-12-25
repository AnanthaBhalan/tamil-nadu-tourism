export interface Review {
  id: string;
  userId: string;
  userName: string;
  userImage?: string; // URL to user's profile image
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface OpeningHours {
  open: string;  // Format: "HH:MM" in 24-hour format
  close: string; // Format: "HH:MM" in 24-hour format
  isClosed?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string[];
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  openingHours: {
    [key: string]: OpeningHours[]; // Key is day in lowercase (e.g., 'monday', 'tuesday')
  };
  contact: {
    phone: string;
    email?: string;
    website?: string;
  };
  rating: number;
  reviewCount: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  images: string[];
  isOpen: boolean;
  lastUpdated: string;
  reviews?: Review[];
  featured?: boolean;
  amenities?: string[];
}
