# React 9-Dimensional Index Query Structure

A practice project for learning React with complex state management through a 9-dimensional data structure.

< 
    src="https://nicholasdudek.github.io/react9dspace/" 
    width="100%" 
    height="600px" 
    title="React 9D Space Demo"
>
  
## Features

- **9 Independent Dimensions**: Each dimension can be navigated independently
  - D1: Category (Sales, Marketing, Engineering, HR, Finance)
  - D2: Region (North, South, East, West, Central)
  - D3: TimeFrame (Q1, Q2, Q3, Q4, Annual)
  - D4: Priority (Critical, High, Medium, Low, Trivial)
  - D5: Status (Active, Pending, Completed, Cancelled, On Hold)
  - D6: Department (Operations, Research, Development, Support, Admin)
  - D7: Type (Project, Task, Bug, Feature, Enhancement)
  - D8: Level (Executive, Senior, Mid, Junior, Intern)
  - D9: Tag (Urgent, Review, Approved, Draft, Archive)

- **Interactive Controls**: 
  - Sliders for each dimension
  - Quick-select buttons for all values
  - Random query generator
  - Reset functionality

- **Real-time Querying**: Updates query results immediately as you change indices

- **Visual Feedback**: Beautiful gradient UI with responsive design

## Installation

```bash
npm install
```

## Running the App

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (typically http://localhost:5173)

## What You'll Practice

- Complex state management with multiple interdependent values
- React hooks (useState, useMemo)
- Dynamic UI rendering based on data structures
- Event handling and controlled components
- CSS styling and responsive design
- Working with multi-dimensional arrays/objects

## Total Combinations

With 5 values per dimension across 9 dimensions, this structure has **1,953,125** possible coordinate combinations!

## Project Structure

```
reactPractice/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                    # Entry point
│   ├── App.jsx                      # Main app component
│   ├── index.css                    # Global styles
│   ├── NineDimensionalIndex.jsx    # Main 9D component
│   └── NineDimensionalIndex.css    # Component styles
```

## Learning Goals

This project helps you practice:
1. Managing complex state with multiple dimensions
2. Creating reusable UI patterns
3. Optimizing performance with useMemo
4. Building intuitive interfaces for complex data
5. Handling user interactions across many inputs
