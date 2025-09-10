// Mock service for live ocean data
// In a real application, you would connect to actual APIs

const mockOceanData = {
  waterLevel: 2.5, // meters
  temperature: 22.5, // celsius
  salinity: 35.2, // parts per thousand
  timestamp: new Date().toLocaleTimeString()
};

// Simulate data changes over time
const simulateDataChange = (baseData) => {
  return {
    ...baseData,
    waterLevel: baseData.waterLevel + (Math.random() * 0.4 - 0.2),
    temperature: baseData.temperature + (Math.random() * 0.3 - 0.15),
    salinity: baseData.salinity + (Math.random() * 0.2 - 0.1),
    timestamp: new Date().toLocaleTimeString()
  };
};

class OceanDataService {
  constructor() {
    this.subscribers = [];
    this.currentData = mockOceanData;
    this.intervalId = null;
  }

  // Start emitting data updates
  start() {
    if (this.intervalId) return;
    
    this.intervalId = setInterval(() => {
      this.currentData = simulateDataChange(this.currentData);
      this.notifySubscribers();
    }, 2000); // Update every 2 seconds
  }

  // Stop updates
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Subscribe to data updates
  subscribe(callback) {
    this.subscribers.push(callback);
    // Immediately send current data to new subscriber
    callback(this.currentData);
    
    // Return unsubscribe function
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.currentData));
  }

  // Get current data without subscribing
  getCurrentData() {
    return this.currentData;
  }
}

// Create a singleton instance
export const oceanDataService = new OceanDataService();
