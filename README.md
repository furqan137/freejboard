# Freejboard

**Hire sharp talent. Land better work.**

Freejboard is a full-stack freelance marketplace that connects clients with freelancers across design, development, marketing, writing, and more. Clients can post jobs and hire specialists; freelancers can browse opportunities, offer services, and grow their presence—all in one modern web platform.

## Project description

Freejboard is built as a professional hiring and freelancing hub. It provides role-based experiences for guests, clients, and freelancers, with a polished UI for discovering categories, browsing services and job listings, managing profiles, and authenticating securely through a REST API.

The frontend is a React (Vite) single-page app with a dynamic sticky header, animated landing and dashboard pages, and marketplace routes for services, jobs, and skill categories. The backend is an Express + MongoDB API that handles user signup/login with JWT authentication and password hashing.

### Key features

- Role-based flows for freelancers and clients
- Auth (signup / login) with JWT and MongoDB
- Marketplace browsing: services, job postings, remote roles, categories
- Search in the header with filters (projects, services, freelancers, clients)
- Responsive UI with hover states, scroll reveals, and a brand-first hero experience
- Profile, inbox, and manage areas for signed-in users

### Tech stack

| Layer    | Stack                                      |
| -------- | ------------------------------------------ |
| Frontend | React 18, Vite, React Router, Axios        |
| Backend  | Node.js, Express, Mongoose, JWT, bcryptjs  |
| Database | MongoDB                                    |

## Structure

- `client/` — Vite React frontend
- `server/` — Express API

## Run

```bash
# Install (once)
npm --prefix server install
npm --prefix client install

# Terminal 1 — API (needs MongoDB on localhost:27017)
npm --prefix server run dev

# Terminal 2 — UI
npm --prefix client run dev
```

- Frontend: http://localhost:3000
- API: http://localhost:5050

MongoDB must be running locally (or update `server/.env` `MONGODB_URI`).
