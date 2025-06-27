# 🖼️ AI Image Generator (SaaS App)

An AI-powered SaaS web application that transforms **text prompts into images** using the ClipDrop API.  
Built with **React**, **Node.js**, **MongoDB**, and **TailwindCSS**.  
Includes authentication, credit management, and dynamic image generation.

---

## 🚀 Features

- 🔑 **Authentication System** (Login/Signup with JWT)
- 💰 **Credit-Based Image Generation**
- ✍️ **Text-to-Image** powered by [ClipDrop API](https://clipdrop.co/apis)
- ⚡ Real-time UI with **React** + **TailwindCSS**
- 🌐 Fully functional backend with **Node.js + Express**
- 📦 Persistent storage using **MongoDB**
- 📱 Mobile responsive design
- 🧑‍💻 Clean, modular codebase (good for extending into full SaaS)

---

## 🛠️ Tech Stack

| Frontend     | Backend      | Others           |
|--------------|--------------|------------------|
| React        | Node.js      | ClipDrop API     |
| TailwindCSS  | Express.js   | JSON Web Token   |
| React Router | MongoDB      | FormData, Axios  |

---

## ⚙️ How It Works

1. User registers or logs in
2. Each user gets a certain number of image generation credits
3. User enters a text prompt
4. Image is generated via ClipDrop API
5. Credit is deducted, and image is displayed and downloadable

---

## 📸 Demo

Coming soon — or host it on **Vercel/Render** and update this section.

---

## 🧪 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/rajxxxxer/image-generator-app.git
cd image-generator-app
