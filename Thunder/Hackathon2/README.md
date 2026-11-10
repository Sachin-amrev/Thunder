# System Info & CRUD Utility

## 📘 Introduction
A Node.js utility project that collects system-level details and performs CRUD operations on files.

## ⚙️ Code Flow
- `index.js`: Orchestrator. Calls system and file modules.
- `system.js`: Gathers system metadata.
- `fileManager.js`: Handles file CRUD with error management.

## 🧠 Strategy
Use Node.js core modules (`os`, `fs`), maintain modular structure, and provide proper console feedback and JSON output.

## 🧩 Modules Used
- `fs`
- `os`
- `process`

## ▶️ How to Run
```bash
npm install
npm start