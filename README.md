# 🎥 VisionMeet

### Real-Time Video Calling & Chat Platform

> VisionMeet is a real-time video conferencing and chat platform built with **WebRTC, Node.js, Express.js, and Stream API**, enabling users to communicate through video, audio, and messaging with a smooth and responsive experience.

---

## 🚀 Features

### 🎥 Real-Time Video Calling

* Start and join video meetings in real time
* Peer-to-peer video communication using **WebRTC**
* Real-time audio and video streaming
* Support for multiple participants
* Camera and microphone controls
* Join and leave meetings seamlessly

### 💬 Real-Time Chat

* Instant messaging during video meetings
* Real-time communication using **Stream API**
* Send and receive messages without refreshing the page
* Chat alongside an active video call

### 👥 Multi-User Meetings

VisionMeet supports multi-user meeting sessions, allowing participants to communicate through video, audio, and chat within the same meeting environment.

The current implementation is designed to support **up to 5 participants per session**.

### ⚡ Low-Latency Communication

The application is designed for real-time communication with a focus on:

* Fast peer-to-peer media transmission
* Efficient real-time events
* Responsive user interactions
* Reliable communication between participants

---

## 🧠 How It Works

VisionMeet combines **WebRTC** and backend services to establish real-time communication between participants.

```text
                    VisionMeet
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
          User A                User B
       Camera + Audio        Camera + Audio
             │                     │
             │       WebRTC        │
             └──────────┬──────────┘
                        │
                        ▼
                 Peer-to-Peer
                 Communication

                        │
                        ▼
                   Stream API
                        │
                        ▼
                 Real-Time Chat
```

### Communication Flow

1. User opens the VisionMeet application.
2. User joins or creates a meeting.
3. The browser requests camera and microphone permissions.
4. WebRTC establishes peer-to-peer media communication.
5. Required connection/signaling information is exchanged.
6. Participants receive real-time audio and video.
7. Stream API provides real-time chat functionality.
8. Users can leave the meeting when finished.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* WebRTC
* Stream API

### Backend

* Node.js
* Express.js

### APIs & Communication

* WebRTC
* Stream API
* REST APIs

### Development Tools

* Git
* GitHub
* npm
* Postman

---

## 🏗️ Project Structure

```text
VisionMeet-video-calls/
│
├── backend/
│
├── frontend/
│
├── package.json
├── .gitignore
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

> ⚠️ **Important:** Never commit `.env` files, API keys, or secret credentials to GitHub.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git
* A modern web browser
* Camera and microphone

Check your Node.js and npm versions:

```bash
node --version
npm --version
```

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MdWahidansari/VisionMeet-video-calls.git
```

### 2. Open the Project

```bash
cd VisionMeet-video-calls
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## ▶️ Run the Application

### Start the Backend

```bash
cd backend
npm start
```

If the project is configured with a development script:

```bash
npm run dev
```

### Start the Frontend

Open another terminal:

```bash
cd frontend
npm start
```

The application will be available at the local development URL provided by the frontend server.

---

## 🧪 Testing

Backend APIs can be tested using **Postman**.

Testing areas include:

* Authentication
* Meeting creation
* Meeting joining
* Real-time communication
* Chat functionality
* API requests and responses
* Error handling
* Invalid requests

---

## 📊 Performance & Scalability

VisionMeet is designed with real-time communication and scalability in mind.

### Performance Considerations

* **WebRTC** enables peer-to-peer media communication.
* Real-time communication reduces unnecessary request/response delays.
* **Stream API** handles real-time messaging.
* Frontend and backend responsibilities are separated.
* The architecture can be extended to support larger meeting sessions.

> Actual communication latency depends on network conditions, geographical distance, device performance, and WebRTC connection quality.

---

## 🔒 Security

The project uses environment variables to keep sensitive API credentials outside the source code.

For a production-ready implementation, additional security measures can include:

* User authentication
* Role-based authorization
* Input validation
* Rate limiting
* Secure HTTP/HTTPS
* API access control
* Monitoring and logging

---

## ☁️ Deployment

VisionMeet can be deployed using modern cloud platforms.

### Backend

Possible deployment platforms:

* Render
* Railway
* AWS
* Azure
* Google Cloud

### Frontend

Possible deployment platforms:

* Vercel
* Netlify
* AWS
* Cloudflare Pages

> HTTPS is recommended for production WebRTC applications because browsers require a secure context for camera and microphone access.

---

## 📸 Screenshots

Add screenshots of the actual application here.

```markdown
## 📸 Screenshots

### Video Meeting

![Video Meeting](./screenshots/video-meeting.png)

### Real-Time Chat

![Real-Time Chat](./screenshots/chat.png)

### Home Page

![Home Page](./screenshots/home.png)
```

---

## 🧠 What I Learned

Building VisionMeet provided hands-on experience with:

* Real-time web application development
* WebRTC fundamentals
* Peer-to-peer communication
* Real-time video and audio streaming
* Real-time chat implementation
* Node.js and Express.js
* REST API development
* Stream API integration
* Asynchronous JavaScript
* Client-server communication
* Error handling
* Git and GitHub
* Cloud deployment concepts

---

## 🔮 Future Improvements

The following features could be added in future versions:

* 🖥️ Screen sharing
* 📝 Meeting recording
* 📅 Meeting scheduling
* 🔗 Shareable meeting links
* 👤 User profiles
* 🔐 Advanced authentication
* 🔔 Meeting notifications
* 📊 Meeting analytics
* 🔊 Advanced audio controls
* 👥 Larger meeting capacity
* 📱 Improved mobile experience

---


