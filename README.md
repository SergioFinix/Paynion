# 💸 Paynion – Split Payments, Keep Friends

**Paynion** is a Web3-powered social dApp designed to simplify group payments using smart contracts, cross-chain settlements, and intuitive UX.

Whether it's a dinner, a trip, or a shared experience, Paynion allows one person to pay upfront while others reimburse their share in **any crypto, on any supported chain** – all automated and transparent.

---

## 🚀 Features

- 🧾 **Create & Share Group Expenses**  
  The payer creates a "payment request" including the bill, name (e.g. *"Dinner at Café Madero"*) and even uploads a photo of the receipt.

- 📲 **QR Code Onboarding**  
  Friends scan a QR code to join the split and confirm their individual share or select specific items from the receipt.

- 🤖 **OCR Receipt Scanning**  
  AI-powered receipt analysis extracts itemized data from photos so participants can select what they ordered.

- 🔀 **Cross-Chain Payments**  
  Built with [CCIP](https://chain.link/cross-chain) to enable payments across chains. Payees can request in one crypto (e.g., USDC on Celo) while others pay in a different one (e.g., USDT on Base or Ethereum).


- 🧠 **Smart Contract Ledger**  
  All agreements are recorded in verifiable on-chain smart contracts for transparency and trust on the Mantle Network.

---

## 🛠 Tech Stack

- ☁️ **Frontend:** React Native
- 🔗 **Smart Contracts:** Solidity, deployed on multiple EVM-compatible chains  
- 🔄 **Cross-Chain Messaging:** CCIP
- 🧠 **OCR & AI:** Gemini Vision / OCR API  
- 🧪 **Dev Tools:** Foundry, Ethers.js

---

## 📷 Screenshots & Mockups

Coming soon! Want to contribute UI mockups? Check out the [open issues](#) or design in [Figma](#)!

---

## 👥 Use Case Example

1. Ana pays $90 at a restaurant.  
2. She creates a **Paynion** request: “Dinner at Café Madero”.  
3. A QR code is generated and shared.  
4. Her 3 friends scan it, adjust what they owe (e.g., one selects items via OCR), and choose to repay in the crypto and network of their choice.  
5. Paynion handles cross-chain transfers and Ana gets her USDC on Celo.  
6. Everyone is happy. No awkward follow-ups.

---

## 🧪 Live Demo

🧱 In development. Want to help test the alpha version? [Open an issue](#) or join the waitlist.

---

# Clone el repositorio
git clone https://github.com/SergioFinix/paynion.git
cd paynion

# Instalar dependencias
npm install

# Para iOS (requiere macOS y Xcode)
cd ios && pod install && cd ..
npx react-native run-ios

# Para Android (requiere Android Studio configurado)
npx react-native run-android

# Iniciar Metro bundler (desarrollo)
npx react-native start