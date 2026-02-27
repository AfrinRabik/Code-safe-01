# CODE:safe-01 - Missing Child Alert System Prototype

CODE:safe-01 is a web application prototype designed for rapid reporting and broadcasting of missing child alerts (Amber Alerts). It features a dedicated dashboard for visibility and a comprehensive reporting tool, styled with a high-awareness emergency theme.

## 🚀 Features

-   **Dashboard**: Real-time list of missing children with visual status indicators.
-   **Report Form**: Structured form to capture critical child data and photos.
-   **Photo Support**: Ability to upload and store child photos using Base64 encoding.
-   **Persistence**: Data is saved to the browser's `localStorage` (persists after refresh).
-   **Status Management**: Mark alerts as 'Resolved' when a child is found.
-   **Mobile-Friendly**: Responsive design optimized for high-pressure mobile usage.
-   **Emergency UI**: High-contrast red and yellow theme for immediate identification.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
-   `node.js` (v14.0.0 or higher)
-   `npm` or `yarn`

## 📦 Installation & Setup

1.  **Clone the files** into a directory named `code-safe-01`.
2.  **Open your terminal** in that directory.
3.  **Install dependencies**:
    npm install
4.  **Start the development server**:
    npm start

The application will open automatically at `http://localhost:3000`.

## 📖 Usage

### Reporting a Child
1.  Click the yellow **+ Report Missing** button.
2.  Fill in all required fields (Name, Age, Location, Time, Contact, Description).
3.  Upload a photo if available.
4.  Click **ACTIVATE AMBER ALERT**. The alert will now appear on the dashboard.

### Managing Alerts
-   **Calling**: Click "CALL CONTACT" to initiate a phone call (mobile only).
-   **Resolving**: Click "Mark Resolved" on an active card to change its status to green.
-   **Switching Views**: Use the toggle buttons at the top to move between the Feed and the Form.

## 📁 Project Structure

-   `src/services/storageService.js`: logic for reading/writing to localStorage.
-   `src/components/ReportForm.js`: The reporting interface.
-   `src/components/Dashboard.js`: The feed aggregator.
-   `src/components/AlertCard.js`: Individual alert visual component.
-   `src/App.js`: State management and routing logic.
-   `src/App.css`: Custom emergency styling variables and classes.

## ⚠️ Troubleshooting

-   **Image not appearing**: The app uses `localStorage`, which usually has a 5MB limit. If you use very high-resolution photos, you might exceed storage capacity. Try small utility photos/optimized mobile screenshots.
-   **Data missing**: Clearing your browser cache/local storage will delete all current reports as this is a prototype without a backend database.
-   **Form reset**: If the form cancels unexpectedly, ensure you are not clicking outside the form area on specific mobile devices.

## ⚖️ Disclaimer
This is a prototype for demonstration purposes and is not connected to actual law enforcement databases.
