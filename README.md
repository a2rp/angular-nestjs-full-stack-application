# Angular NestJS Full-Stack Application

A full-stack user management application built with Angular, NestJS, and TypeScript.

The application supports complete user management operations along with PDF generation, viewing, and downloading functionality.

## Features

- Add new users
- Edit existing users
- Delete users
- View the complete users list
- Generate PDF files from the users list
- View generated PDF files
- Download generated PDF files
- Separate Angular frontend and NestJS backend
- TypeScript-based implementation
- SCSS-based frontend styling

## Technology Stack

### Frontend

- Angular 16
- TypeScript
- HTML
- SCSS

### Backend

- NestJS 10
- TypeScript
- Node.js

## Backend Libraries

### pdf-creator-node

Used to generate PDF files from HTML content.

### uuid

Used to generate unique user identifiers.

### Backend Preview

<img width="744" alt="Backend application preview" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/3d53543a-2668-47f6-81f7-adb8c7b8854a">

## Frontend Styling

The frontend uses SCSS for application styling.

SCSS extends CSS with useful features such as variables, nesting, reusable styling patterns, and improved stylesheet organization.

### Frontend Preview

<img width="677" alt="Frontend application preview" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/56405f10-4c3e-4751-ac89-e031427e2b96">

## Project Structure

```text
angular-nestjs-full-stack-application/
â”œâ”€â”€ backend/
â”œâ”€â”€ frontend/
â”œâ”€â”€ .gitignore
â””â”€â”€ README.md
```

The repository contains two independent applications:

- `backend/` - NestJS server application
- `frontend/` - Angular client application

## Run the Backend

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the NestJS development server:

```bash
npm run start:dev
```

The backend server will start on the port configured by the application.

## Run the Frontend

Open another terminal and move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular application:

```bash
npm run start
```

The frontend application will start on the port configured by the project.

## Application Workflow

```text
Angular Frontend
      â†“
NestJS Backend
      â†“
User Management
      â†“
PDF Generation
      â†“
View / Download PDF
```

The Angular frontend communicates with the NestJS backend for user management operations.

Users can be created, viewed, updated, and deleted through the application interface.

The users list can also be converted into a PDF document for viewing or downloading.

## Application Screenshots

### User Management Interface

![Application screenshot 970](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/000a7c25-8d7b-4c27-88c8-0b7d2517e4b3)

![Application screenshot 971](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/09b6ff06-bf1b-46cd-89c0-c4dd7bb98202)

<img width="494" alt="Application screenshot" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/a0ffcee6-4897-43b2-8319-d4459dc9eeef">

![Application screenshot 972](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/41e3f1e7-9d60-42c6-9b68-87ad4889a961)

![Application screenshot 973](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/1b6849eb-5098-4d59-95bc-a0e911b0fb26)

![Application screenshot 974](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/056ca47b-1ad2-454e-9605-f0330e30a583)

### Application Views

<img width="960" alt="Application screenshot 975" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/69752faf-86ea-4a94-b66f-09ca04768d76">

<img width="960" alt="Application screenshot 976" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/104a35b9-32e2-4053-b4dc-ad4cc3a824e9">

<img width="960" alt="Application screenshot 977" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/72ff2b70-ef53-4206-a3b7-f7fecbf62536">

<img width="960" alt="Application screenshot 978" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/9b796636-7be0-434d-b062-065d387baeae">

<img width="960" alt="Application screenshot 979" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/0891dfa0-8a81-469d-82a7-175f8a951677">

<img width="960" alt="Application screenshot 980" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/677cb700-ca58-4892-ad49-3a5d5bd365d5">

<img width="960" alt="Application screenshot 981" src="https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/27aee633-dfc4-447e-b9ce-6e114b608222">

### PDF and Additional Application Views

![Application screenshot 982](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/94462c25-45f2-4a97-b4d8-47391b135eae)

![Application screenshot 983](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/5e44a548-c7e5-42bd-adff-25190600215c)

![Application screenshot 984](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/31e0df94-cafb-416f-9b2b-998e4ccc6557)

![Application screenshot 985](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/582582c9-be81-4ef8-8aff-5a0976f70f52)

![Application screenshot 986](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/e9d850e4-a81d-4068-b585-4310e8330a12)

![Application screenshot 987](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/c407f3da-c7f7-4716-a0b8-0976c7cdec43)

![Application screenshot 988](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/9fb580ab-0b60-4db6-9daa-7adda840e9f9)

![Application screenshot 989](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/50c62e7d-62b7-4ea3-8493-778c6da9ac8f)

![Application screenshot 990](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/bca7f7f6-b88a-49bb-a5f6-92705eebf166)

![Application screenshot 991](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/e9f84b35-9fe8-489b-a8b4-a527f13fd651)

![Application screenshot 992](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/4fdfa080-2c25-4b1c-876a-8ae5ee113578)

![Application screenshot 993](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/044deeb6-0d7e-4767-80b1-46ef285a504e)

![Application screenshot 994](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/b263081b-44a4-4c32-9919-d6a7d244d6e4)

![Application screenshot 995](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/eb4f4767-30f4-4f41-8ae8-91dfef10c19b)

![Application screenshot 996](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/ecfc3388-2410-4c9f-a583-7e5249107e88)

![Application screenshot 997](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/169d32c1-3021-4529-ab1a-d6ad47964087)

![Application screenshot 969](https://github.com/a2rp/angular-nestjs-full-stack-application/assets/5670738/3890a3d5-5ea3-4a8a-897b-a8ad028eea75)

## Development Notes

When running the project locally:

1. Start the NestJS backend.
2. Start the Angular frontend in a separate terminal.
3. Open the frontend application in the browser.
4. Use the application to manage users.
5. Generate, view, or download PDFs from the users list.

## Documentation

Additional architecture, workflow, implementation, and project notes are available in:

```text
```

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
