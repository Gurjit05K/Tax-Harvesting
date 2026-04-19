# Tax Loss Harvesting Tool

A professional React-based tool for optimizing capital gains through strategic tax-loss harvesting. This tool helps investors visualize and calculate potential tax savings by selecting holdings with losses to offset capital gains.


## ✨ Features

- 📊 **Real-time Capital Gains Calculation** - Instantly see impact of harvesting decisions
- 🔄 **Dynamic Updates** - Select/deselect holdings and watch calculations update in real-time
- 💰 **Tax Savings Estimation** - Automatic calculation of potential tax savings
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🔍 **Search & Filter** - Easily find specific holdings in your portfolio
- ✨ **Smooth Animations** - Visual feedback for all user interactions
- ⚡ **Loading States** - Professional loading indicators during data fetch
- 🎨 **Modern UI** - Beautiful gradient design matching Figma specifications
- 📋 **Detailed Holdings Table** - Comprehensive view of all assets with short-term/long-term breakdown

## 🛠️ Tech Stack

- **React 18** - Latest React with Hooks
- **Custom Hooks** - For state management and business logic
- **CSS3** - Modern CSS with animations and responsive design
- **Mock APIs** - Promise-based API simulation with realistic delays
- **Create React App** - Bootstrapped with CRA for optimal performance

## 📁 Project Structure

    tax-loss-harvesting/
    ├── public/
    │ └── index.html
    ├── src/
    │ ├── components/
    │ │ ├── CapitalGainsCard.jsx # Pre/Post harvesting cards
    │ │ ├── Disclaimer.jsx # Important notes section
    │ │ ├── Header.jsx # App header with logo
    │ │ ├── HoldingsTable.jsx # Main holdings table
    │ │ └── Loader.jsx # Loading spinner
    │ ├── hooks/
    │ │ └── useTaxHarvesting.js # Custom hook for business logic
    │ ├── services/
    │ │ └── api.js # Mock API service
    │ ├── App.js # Main application component
    │ ├── App.css # Global styles
    │ ├── index.js # Application entry point
    │ └── index.css # Base styles
    ├── package.json
    └── README.md