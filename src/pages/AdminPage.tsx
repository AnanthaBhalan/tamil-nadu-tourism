import { useState, ChangeEvent, FormEvent } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface Location {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  name: string;
  description: string;
}

// Mock API functions - replace with actual API calls
const fetchLocations = async (): Promise<Location[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Chennai', description: 'Capital city of Tamil Nadu' },
        { id: 2, name: 'Madurai', description: 'Temple city' },
        { id: 3, name: 'Ooty', description: 'Hill station' },
      ]);
    }, 500);
  });
};

const AdminPage = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
  });

  // Fetch locations
  const { data: locations = [] as Location[], isLoading } = useQuery<Location[]>({
    queryKey: ['adminLocations'],
    queryFn: fetchLocations,
  });

  // Add new location mutation
  const addLocation = useMutation<Location, Error, FormData>({
    mutationFn: async (newLocation: FormData) => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ...newLocation, id: Date.now() } as Location);
        }, 500);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminLocations'] });
      toast.success('Location added successfully');
      setFormData({ name: '', description: '' });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      toast.error('Please fill in all fields');
      return;
    }
    addLocation.mutate({...formData});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Location Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Location</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Location Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location description"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={addLocation.isPending}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {addLocation.isPending ? 'Adding...' : 'Add Location'}
            </button>
          </form>
        </div>

        {/* Locations List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Locations</h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">{location.name}</h3>
                  <p className="text-gray-600 text-sm">{location.description}</p>
                </div>
              ))}
              {locations.length === 0 && (
                <p className="text-gray-500">No locations found. Add one to get started.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
