# Angular NestJS Full-Stack Application Documentation

## Overview

Angular NestJS Full-Stack Application is a user management project demonstrating communication between an Angular frontend and a NestJS backend.

The application provides user management operations together with PDF generation functionality.

The repository keeps the frontend and backend as separate applications while maintaining both inside a single project repository.

## Core Features

The application supports:

- Adding users
- Viewing users
- Editing users
- Deleting users
- Displaying a users list
- Generating a PDF from user information
- Viewing generated PDF files
- Downloading generated PDF files

## Technology Stack

### Frontend

The client application is built with:

- Angular 16
- TypeScript
- HTML
- SCSS

### Backend

The server application is built with:

- NestJS 10
- Node.js
- TypeScript

### Additional Backend Libraries

The backend uses additional packages for specific application functionality.

#### pdf-creator-node

Used for generating PDF documents from HTML-based content.

#### uuid

Used for generating unique identifiers.

## Repository Structure

The repository is divided into frontend and backend applications.

```text
angular-nestjs-full-stack-application/
├── backend/
├── frontend/
├── .gitignore
├── DOCUMENTATION.md
├── LICENSE
└── README.md
```

### `backend/`

Contains the NestJS application responsible for server-side functionality.

### `frontend/`

Contains the Angular application responsible for the user interface and client-side interaction.

### `README.md`

Provides the project overview, features, setup instructions, screenshots, and repository information.

### `DOCUMENTATION.md`

Provides additional technical and architectural information about the project.

### `LICENSE`

Contains the project's license information.

## Application Architecture

At a high level, the application follows a client-server architecture.

```text
User
  ↓
Angular Frontend
  ↓
HTTP Requests
  ↓
NestJS Backend
  ↓
Application Logic
  ↓
HTTP Response
  ↓
Angular Frontend
  ↓
Updated Interface
```

The Angular application handles user interaction and presentation.

The NestJS application handles backend requests and application logic.

## Frontend

The frontend provides the graphical interface through which users interact with the application.

Its responsibilities include:

- Displaying user information
- Collecting user input
- Sending requests to the backend
- Displaying backend responses
- Providing controls for CRUD operations
- Providing access to PDF-related functionality

## Backend

The NestJS backend provides the server-side functionality required by the Angular frontend.

Its responsibilities include:

- Receiving frontend requests
- Processing user operations
- Returning responses to the frontend
- Supporting PDF generation
- Managing server-side application logic

## User Management Workflow

The primary application workflow revolves around user management.

```text
User Interface
      ↓
Select Operation
      ↓
Create / Read / Update / Delete
      ↓
Frontend Request
      ↓
NestJS Backend
      ↓
Process Operation
      ↓
Return Response
      ↓
Update Interface
```

## CRUD Operations

CRUD represents four common data-management operations.

### Create

Allows new user information to be added through the application.

### Read

Displays existing users through the frontend interface.

### Update

Allows existing user information to be modified.

### Delete

Allows an existing user to be removed.

## PDF Functionality

The project includes functionality for generating PDF documents from user information.

The backend uses `pdf-creator-node` for PDF creation.

The general workflow is:

```text
Users List
    ↓
Application Data
    ↓
HTML Content
    ↓
pdf-creator-node
    ↓
PDF Document
    ↓
View / Download
```

This demonstrates how backend-generated documents can be integrated into a full-stack web application.

## Unique Identifiers

The backend uses the `uuid` package for unique identifiers.

UUIDs provide identifiers that can be generated without relying on simple sequential numbering.

## Running the Project

The frontend and backend need to run separately during local development.

## Backend Setup

Open a terminal from the repository root and move into the backend directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Start the NestJS development server:

```bash
npm run start:dev
```

Keep this terminal running while using the application.

## Frontend Setup

Open another terminal from the repository root and move into the frontend directory:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm run start
```

Keep both frontend and backend applications running while testing the complete application.

## Local Development Workflow

A typical development session follows this sequence:

```text
Repository
    │
    ├── Backend Terminal
    │      ↓
    │   npm install
    │      ↓
    │   npm run start:dev
    │
    └── Frontend Terminal
           ↓
        npm install
           ↓
        npm run start
           ↓
        Browser
```

Once both applications are running, the frontend can communicate with the backend.

## SCSS

The Angular frontend uses SCSS for styling.

SCSS provides additional stylesheet organization capabilities while compiling to standard CSS understood by browsers.

Depending on the frontend structure, SCSS can be used for:

- Component styling
- Nested selectors
- Reusable values
- Better stylesheet organization
- Responsive interface rules

## TypeScript

Both Angular and NestJS use TypeScript.

Using TypeScript across the frontend and backend provides a consistent development language throughout the application.

TypeScript adds features such as:

- Static typing
- Interfaces
- Classes
- Improved editor tooling
- Compile-time checks
- Better maintainability for structured applications

## Angular and NestJS

Angular and NestJS work well together because both use TypeScript and follow structured application patterns.

In this project:

```text
Angular
   ↓
Frontend Application

NestJS
   ↓
Backend Application
```

Together they demonstrate a TypeScript-based full-stack architecture.

## Testing the Application

When testing locally, verify the major application workflows.

### User Operations

Check that the application can:

1. Display users.
2. Add a user.
3. Edit a user.
4. Delete a user.
5. Reflect changes in the interface.

### PDF Operations

Check that the application can:

1. Access the users list.
2. Trigger PDF generation.
3. Generate the expected document.
4. View the generated PDF.
5. Download the generated PDF when applicable.

## Troubleshooting

### Frontend Cannot Reach Backend

Confirm that the backend development server is running before using frontend functionality that requires server communication.

### Dependencies Are Missing

Run:

```bash
npm install
```

inside the affected `frontend` or `backend` directory.

Each application maintains its own dependencies.

### Port Already in Use

If the configured frontend or backend port is already occupied, stop the conflicting process before starting the application again.

### PDF Is Not Generated

Confirm that:

- The backend is running.
- Backend dependencies are installed.
- The PDF-related request reaches the backend.
- The required application data is available.

## Existing Project Preservation

This repository represents an existing full-stack implementation.

Repository modernization focuses on improving its presentation and documentation while preserving the original application implementation and functionality.

The existing frontend and backend source code remain the primary reference for the exact implementation.

## Documentation Maintenance

When the project changes in the future, review both:

```text
README.md
DOCUMENTATION.md
```

Update documentation whenever there are meaningful changes to:

- Features
- Dependencies
- Application structure
- Setup commands
- Frontend behavior
- Backend behavior
- PDF functionality

## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash[.ranjan09@gmail.com](mailto:.ranjan09@gmail.com)

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
