# 📦 Order Tracking UI

A responsive, mobile-first order tracking interface built with **Next.js, React, Tailwind CSS, and Lucide React**.

This project demonstrates different order delivery scenarios, including delayed orders, delivered-but-not-received orders, and orders where tracking information is not yet available.

## ✨ Features

- 📦 Order tracking timeline
- 🚚 Processing, Shipped, Out for Delivery, and Delivered statuses
- ⚠️ Delayed order state
- ❗ Delivered but not received state
- ⏳ Tracking unavailable state
- 📱 Mobile-first responsive design
- 🎨 Tailwind CSS styling
- 🔔 Support/action interaction
- 🧩 Separate order data and UI components
- 🔄 Preview different order states

## 🛠️ Tech Stack

- Next.js
- React
- Tailwind CSS
- Lucide React
- JavaScript
- JSX

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd order-tracking
```

### 2. Install dependencies

```bash
npm install
```

Install `lucide-react` if it is not already installed:

```bash
npm install lucide-react
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
order-tracking/
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.js
    │   └── page.js
    │
    ├── components/
    │   └── OrderTracking.jsx
    │
    └── data/
        └── orderData.js
```

## 📋 Supported Order States

The order data is stored in:

```text
src/data/orderData.js
```

The application supports the following states:

### 1. Delayed Order

Displays:

- Order delayed message
- Updated delivery estimate
- Current delivery progress
- Contact support action

### 2. Delivered but Not Received

Displays:

- Delivered status
- Delivery date and time
- Delivery issue message
- Report delivery issue action

### 3. Tracking Not Available Yet

Displays:

- Order confirmation
- Tracking unavailable message
- Estimated delivery date
- View order details action

## 🧩 Main Component

The main tracking interface is located at:

```text
src/components/OrderTracking.jsx
```

The component includes:

- Order header
- Status card
- Delivery timeline
- Order summary
- Support/action section
- Order state selector

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📄 License

This project is created for demonstration and development purposes.