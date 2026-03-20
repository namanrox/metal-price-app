# 📱 Metal Prices App

A React Native mobile application that displays **live prices of precious metals** and mimics a real-world financial product experience.

---

## 🚀 Features

* 📊 View prices of:

  * Gold
  * Silver
  * Platinum
  * Palladium
* 🔄 Independent data loading for each metal
* ⏳ Loading indicators per metal
* ❌ Error handling for API failures
* 📱 Clean and simple UI using cards
* 🔍 Detailed view for each metal

---

## 🧩 Tech Stack

* React Native (Expo)
* React Navigation
* JavaScript (ES6)

---

## 📂 Project Structure

```
MetalPricesApp
│
├── App.js
├── src
│   ├── screens
│   │   ├── HomeScreen.js
│   │   └── DetailsScreen.js
│   │
│   ├── components
│   │   └── MetalCard.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   └── constants
│       └── metals.js
```

---

## ⚙️ Setup & Run

### 1️⃣ Install dependencies

```
npm install
```

---

### 2️⃣ Start the project

```
npm start
```

---

### 3️⃣ Run the app

* Press **`a`** → Run on Android Emulator / Device
* Press **`w`** → Run on Web
* OR scan QR using **Expo Go app**

---

## 🧪 API

* Currently using a **mock API service**
* Simulates:

  * Live price updates
  * Network delay
  * Random API failures (for error handling testing)

---

## 📱 Screens

### 🏠 Home Screen

* Displays all metals
* Shows:

  * Name
  * Price
  * Last updated time

<img width="1146" height="797" alt="image" src="https://github.com/user-attachments/assets/de32c92b-5fae-4a32-ac80-d77b2a8a4b09" />

---

### 📄 Details Screen

* Displays:

  * Current price
  * Previous open price
  * Previous close price
  * Current date & time

<img width="824" height="397" alt="image" src="https://github.com/user-attachments/assets/2680aa0e-5885-4a06-9e07-826722c274ab" />
<img width="622" height="344" alt="image" src="https://github.com/user-attachments/assets/e0811fa6-70d0-4f62-a726-4ec75b364fe4" />
<img width="642" height="335" alt="image" src="https://github.com/user-attachments/assets/afcf97c2-2135-49d7-b558-fa3ec7c3d205" />
<img width="740" height="338" alt="image" src="https://github.com/user-attachments/assets/00993e23-7695-4050-9824-ca2a4c20784c" />

---

## ⚠️ Notes

* Each metal’s data is fetched **independently**
* Proper handling of:

  * Loading states
  * Error states
  * Empty data scenarios
