import axios from 'axios';
import { Restaurant, Review } from '../types/restaurant';

const API_BASE_URL = '/api/restaurants';

// Create axios instance with base URL and common headers
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized (e.g., redirect to login)
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

interface GetRestaurantsParams {
  search?: string;
  cuisines?: string[];
  minRating?: number;
  priceRange?: string[];
  isOpenNow?: boolean;
  sortBy?: 'rating' | 'name' | 'price' | 'reviewCount';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export const restaurantService = {
  /**
   * Fetch restaurants with optional filters and pagination
   */
  async getRestaurants(params: GetRestaurantsParams = {}) {
    try {
      const response = await api.get<{
        data: Restaurant[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
      }>('/', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      throw error;
    }
  },

  /**
   * Fetch a single restaurant by ID
   */
  async getRestaurantById(id: string) {
    try {
      const response = await api.get<Restaurant>(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching restaurant ${id}:`, error);
      throw error;
    }
  },

  /**
   * Submit a review for a restaurant
   */
  async submitReview(restaurantId: string, reviewData: {
    rating: number;
    comment: string;
    images: File[];
  }) {
    try {
      const formData = new FormData();
      formData.append('rating', reviewData.rating.toString());
      formData.append('comment', reviewData.comment);
      
      // Append each image file
      reviewData.images.forEach((file, index) => {
        formData.append(`images`, file);
      });

      const response = await api.post<{ review: Review }>(
        `/${restaurantId}/reviews`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data.review;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  },

  /**
   * Get reviews for a restaurant
   */
  async getRestaurantReviews(restaurantId: string, page = 1, limit = 10) {
    try {
      const response = await api.get<{
        data: Review[];
        total: number;
        page: number;
        limit: number;
      }>(`/${restaurantId}/reviews`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching reviews for restaurant ${restaurantId}:`, error);
      throw error;
    }
  },

  /**
   * Get available cuisines for filtering
   */
  async getCuisines() {
    try {
      const response = await api.get<string[]>('/cuisines');
      return response.data;
    } catch (error) {
      console.error('Error fetching cuisines:', error);
      return [];
    }
  },

  /**
   * Get available price ranges for filtering
   */
  async getPriceRanges() {
    return ['$', '$$', '$$$', '$$$$'];
  },

  // Authentication methods
  auth: {
    async login(credentials: { email: string; password: string }) {
      try {
        const response = await api.post<{ token: string; user: any }>('/auth/login', credentials);
        localStorage.setItem('authToken', response.data.token);
        return response.data.user;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    logout() {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    },

    async register(userData: {
      name: string;
      email: string;
      password: string;
    }) {
      try {
        const response = await api.post<{ user: any }>('/auth/register', userData);
        return response.data.user;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },

    getCurrentUser() {
      const token = localStorage.getItem('authToken');
      if (!token) return null;
      
      // In a real app, you'd decode the JWT token or fetch user data
      // This is a simplified version
      try {
        // This is a mock implementation - in a real app, you'd decode the JWT
        // or make an API call to get the current user
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        return tokenData.user || null;
      } catch (error) {
        console.error('Error getting current user:', error);
        return null;
      }
    },
  },
};

export default restaurantService;
