# Admin UI Geektrust Project

## Tech Stack
- **Frontend Framework:** React
- **Programming Language:** TypeScript
- **Styling:** SCSS
- **State Management:** Zustand
- **Libraries:** 
  - React Icons
  - React Hot Toast
  - React Query

## Overview
The Admin UI Geektrust Project is a user management system that provides functionalities for searching, editing, deleting, and paginating user records. The project leverages various modern web development technologies to deliver a responsive and user-friendly interface.

## Features

1. **Search Functionality with Debouncing**
   - Users can search across any column (Name, Email, Role).
   - Implements debouncing to optimize search performance and reduce unnecessary API calls.

2. **Select and Delete Rows**
   - Ability to select multiple rows.
   - Delete selected rows with a single action.

3. **Edit and Delete Individual Rows**
   - Edit user details inline within the table.
   - Delete individual user records.

4. **Pagination**
   - Efficient pagination to navigate through large sets of data.
   - Provides a user-friendly pagination interface at the bottom of the table.

## SOLID Principles
This project adheres to the SOLID principles of object-oriented design to ensure maintainable and scalable code.

1. **Single Responsibility Principle (SRP)**
   - Each component has a single responsibility. For example, the `SearchComponent` handles only the search functionality, while the `UserTable` manages the display and management of user data.

2. **Open/Closed Principle (OCP)**
   - The code is designed to be open for extension but closed for modification. For instance, new features can be added as new components or enhancements without modifying the existing ones.

3. **Liskov Substitution Principle (LSP)**
   - Components are replaceable with their subtypes without altering the correctness of the program. This ensures that the `UserTable` component can work seamlessly with different types of data providers or state management solutions.

4. **Interface Segregation Principle (ISP)**
   - The codebase avoids large, monolithic interfaces. Instead, it uses specific, client-focused interfaces. Each component or utility function has a clearly defined role and interacts with well-defined interfaces.

5. **Dependency Inversion Principle (DIP)**
   - High-level modules do not depend on low-level modules but on abstractions. State management using Zustand and data fetching with React Query abstracts the details of these operations from the components, allowing them to focus on their core responsibilities.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin-ui-geektrust.git
   cd admin-ui-geektrust
   npm run dev