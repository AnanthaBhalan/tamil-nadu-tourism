import { useEffect, useState } from 'react';
import { OpeningHours } from '../types/restaurant';

const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

export const useRestaurantStatus = (openingHours: { [key: string]: OpeningHours[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpening, setNextOpening] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentDayName = DAYS[currentDayIndex];
      setCurrentDay(currentDayName);
      
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes
      
      // Check if the restaurant is open today
      const todayHours = openingHours[currentDayName];
      
      if (!todayHours || todayHours.length === 0) {
        setIsOpen(false);
        findNextOpening(now, currentDayIndex);
        return;
      }

      // Check all time slots for today
      let isCurrentlyOpen = false;
      
      for (const slot of todayHours) {
        if (slot.isClosed) continue;
        
        const [openHour, openMinute] = slot.open.split(':').map(Number);
        const [closeHour, closeMinute] = slot.close.split(':').map(Number);
        
        const openTime = openHour * 60 + openMinute;
        const closeTime = closeHour * 60 + closeMinute;
        
        // Handle overnight hours (e.g., open until 1 AM next day)
        if (closeTime > openTime) {
          // Normal case: closes same day
          if (currentTime >= openTime && currentTime < closeTime) {
            isCurrentlyOpen = true;
            break;
          }
        } else {
          // Special case: closes next day (after midnight)
          if (currentTime >= openTime || currentTime < closeTime) {
            isCurrentlyOpen = true;
            break;
          }
        }
      }
      
      setIsOpen(isCurrentlyOpen);
      
      // If closed, find next opening time
      if (!isCurrentlyOpen) {
        findNextOpening(now, currentDayIndex);
      }
    };

    // Check status immediately and then every minute
    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [openingHours]);

  const findNextOpening = (now: Date, currentDayIndex: number) => {
    // Check next 7 days starting from today
    for (let i = 0; i < 7; i++) {
      const dayIndex = (currentDayIndex + i) % 7;
      const dayName = DAYS[dayIndex];
      const daySlots = openingHours[dayName];
      
      if (!daySlots || daySlots.length === 0) continue;
      
      for (const slot of daySlots) {
        if (slot.isClosed) continue;
        
        const [openHour, openMinute] = slot.open.split(':').map(Number);
        
        // If it's today and the opening time is later today
        if (i === 0) {
          const currentTime = now.getHours() * 60 + now.getMinutes();
          const openTime = openHour * 60 + openMinute;
          
          if (openTime > currentTime) {
            setNextOpening(`Opens today at ${formatTime(openHour, openMinute)}`);
            return;
          }
        } else {
          // For future days
          const dayNameFormatted = dayName.charAt(0).toUpperCase() + dayName.slice(1);
          setNextOpening(`Opens ${dayNameFormatted} at ${formatTime(openHour, openMinute)}`);
          return;
        }
      }
    }
    
    setNextOpening('No upcoming opening hours found');
  };

  const formatTime = (hours: number, minutes: number): string => {
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert to 12-hour format
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${period}`;
  };

  return {
    isOpen,
    nextOpening,
    currentDay,
  };
};

export default useRestaurantStatus;
