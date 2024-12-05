# Bunyawat Frontend Assignment

This project is a React application built with Next.js, leveraging modern web development tools like TypeScript, Tailwind CSS, and Jest for testing. It is aimed at demonstrating fundamental concepts and architecture of a front-end application.

## Project Structure

```
.
├── coverage/               # Jest coverage reports
├── public/                 # Public assets
├── src/                    # Source files
│   ├── app/                # Next.js app routing and API
│   ├── components/         # Reusable React components
│   ├── features/           # Feature modules
│   └── types.ts            # TypeScript types
├── jest.config.ts          # Jest configuration
├── next.config.ts          # Next.js configuration
├── package.json            # NPM configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Scripts

- `dev`: Start the development server using Turbopack.
- `build`: Build the application for production.
- `start`: Start the production server.
- `lint`: Run ESLint to find and fix problems in the code.
- `test`: Run Jest tests.

## Dependencies

- **Next.js**: Server-side rendering and static site generation.
- **React**: UI building library.
- **Tailwind CSS**: A utility-first CSS framework.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Dev Dependencies

- **Jest**: JavaScript testing framework.
- **Testing Library**: Utilities for testing UI components.
- **TypeScript**: JavaScript with static typing.
- **ESLint**: Linting utility for JavaScript and TypeScript.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bunyawat-fe-assignment
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

- Run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- Build for production:

  ```bash
  npm run build
  # or
  yarn build
  ```

- Run tests:
  ```bash
  npm run test
  # or
  yarn test
  ```
