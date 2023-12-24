# Socket.IO Connection with Custom React Hook in Next.js

## Overview

This repository demonstrates a simple implementation of integrating Socket.IO connections into a Next.js project using a custom React Hook. The goal is to establish a WebSocket connection between the client and server, allowing real-time communication.

## Contents

Socket.IO Client Implementation (socket-client.ts)

A Socket.IO client class encapsulating the WebSocket connection.
The class extends the EventEmitter to handle custom events.
Implements methods for subscribing to events, sending messages, and checking connection status.
Socket.IO Context and Provider (SocketIoProvider.tsx)

A React context to manage the Socket.IO client's state.
A provider component (ProvideSocketIoClient) that initializes and provides the Socket.IO client using the custom hook.
Singleton Design Pattern

The custom hook (useProvideSocketIoClient) is designed following the singleton pattern.
Ensures a single instance of the Socket.IO client is created and reused throughout the application.
Custom Hooks for Consuming Socket.IO Client (useSocketIoClient.ts)

useSocketIoClient: A hook to access the Socket.IO client instance within components.
useIsSocketConnected: A hook to check the connection status.

## Getting Started

1-Clone the repository:

```bash
git clone https://github.com/mahmodghnaj/wrapping-socket-with-nextJs
cd wrapping-socket-with-nextJs
```

2 Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the Socket.IO connection in action.

## Demo

- (https://wrapping-socket-with-next-js.vercel.app/).

## Screenshots

<img width="1552" alt="loading" src="/public/1.jpeg">

<img width="1552" alt="online" src="/public/2.jpeg">

<img width="1552" alt="chat" src="/public/3.jpeg">
