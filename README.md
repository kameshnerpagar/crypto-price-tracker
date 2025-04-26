Real-Time Crypto Price Tracker

Tech Stack:
React.js (with Vite)
Redux Toolkit (createSlice, configureStore)
TailwindCSS for styling

Architecture:
/src
  /components    → Table and UI components
  /redux         → cryptoSlice and store setup
  /utils         → Mock WebSocket simulation
  App.jsx
  main.jsx
/public
  index.html
README.md
package.json
vite.config.js

All asset data is managed by Redux Toolkit.
Simulated real-time updates using setInterval.

Setup Instructions
1. Clone the Repository
    git clone https://github.com/kameshnerpagar/crypto-price-tracker.git

2. Navigate into the Project
    cd crypto-price-tracker
    
4. Install Dependencies
    npm install
    
5. Run the Application
    npm run dev

Application will start at:
http://localhost:5173/


Project Walkthrough : 

1. After running the app (npm run dev), a responsive crypto price table is displayed.
2. The table shows details for 5 assets: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), etc.
3. Every 1–2 seconds, the following values update automatically:
4. Price
5. 1h %, 24h %, 7d % changes
6. 24h Volume
7. Positive % changes are color-coded green, negative changes are red.
8. The "7D Chart" column shows a static trend image or SVG.
9. The layout adjusts responsively for smaller screen sizes (mobile/tablet).
10. All data is fully managed through Redux Toolkit slices and selectors (no local component state).