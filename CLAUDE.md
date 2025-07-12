# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains a React-based business consulting website for CenterConsulting.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

### Quick Start (Windows)
- **Run React app**: Execute `start-website.bat` from root directory

## Architecture Overview

Component-based React architecture in `src/components/`:
- `App.jsx`: Main application component orchestrating all sections
- `Header.jsx`: Navigation with smooth scrolling
- `Hero.jsx`: Landing section with call-to-action
- `About.jsx`: Company overview with feature highlights
- `Services.jsx`: Service offerings grid
- `Contact.jsx`: Contact information and form
- `Footer.jsx`: Site footer

## Technology Stack

- **Framework**: React 19 with Vite for fast development
- **Styling**: CSS modules/vanilla CSS
- **Linting**: ESLint with React hooks and refresh plugins
- **Deployment**: Vercel (configured with vercel.json)
- **Build Tool**: Vite with React plugin

## Deployment

- Configured for Vercel deployment with SPA routing
- Build output directory: `dist/`
- All routes redirect to `index.html` for client-side routing