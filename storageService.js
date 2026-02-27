const STORAGE_KEY = 'safe01_alerts';

/**
 * Service to handle persistence of alerts using browser localStorage.
 * In a production app, this would interact with a real backend API.
 */
// src/services/notificationService.js

/**
 * Simulates sending an emergency SMS notification.
 * In a production app, this would call an API like Twilio.
 */
export const simulateSmsNotification = (phoneNumber, childName, location) => {
  return new Promise((resolve) => {
    console.log(`[SIMULATION] Sending SMS to ${phoneNumber}...`);
    
    const message = `EMERGENCY ALERT: Missing child ${childName} reported last seen at ${location}. Please check CODE:safe-01 dashboard for details.`;
    
    // Simulate network delay
    setTimeout(() => {
      console.log(`[SIMULATION] SMS Content: "${message}"`);
      resolve({
        success: true,
        recipient: phoneNumber,
        timestamp: new Date().toISOString(),
        content: message
      });
    }, 1500);
  });
};
export const storageService = {
  // Retrieve all alerts from local storage
  getAlerts: () => {
    try {
      const alerts = localStorage.getItem(STORAGE_KEY);
      return alerts ? JSON.parse(alerts) : [];
    } catch (error) {
      console.error("Failed to fetch alerts from storage:", error);
      return [];
    }
  },

  // Add a new alert to the top of the list
  saveAlert: (newAlert) => {
    try {
      const alerts = storageService.getAlerts();
      const alertWithMeta = {
        ...newAlert,
        id: Date.now(), // Unique ID based on timestamp
        status: 'active',
        createdAt: new Date().toISOString()
      };
      const updatedAlerts = [alertWithMeta, ...alerts];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAlerts));
      return alertWithMeta;
    } catch (error) {
      console.error("Failed to save alert:", error);
      throw new Error("Local storage is full or unavailable.");
    }
  },

  // Update specific alert status (e.g., mark as resolved)
  updateAlertStatus: (id, status) => {
    try {
      const alerts = storageService.getAlerts();
      const updatedAlerts = alerts.map(alert => 
        alert.id === id ? { ...alert, status } : alert
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAlerts));
      return true;
    } catch (error) {
      console.error("Failed to update status:", error);
      return false;
    }
  },

  // Delete an alert completely
  deleteAlert: (id) => {
    try {
      const alerts = storageService.getAlerts();
      const filteredAlerts = alerts.filter(alert => alert.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredAlerts));
      return true;
    } catch (error) {
      console.error("Failed to delete alert:", error);
      return false;
    }
  }
};
