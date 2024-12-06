# Next.js Dashboard Template

A modern, responsive dashboard template built with Next.js 14, featuring:
- Light/Dark mode support
- Collapsible sidebar navigation
- Responsive layout
- TypeScript support
- Tailwind CSS for styling
- React Icons integration

## Prerequisites

Before you begin, ensure you have installed:
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                # Next.js app directory
├── components/         # React components
│   └── auth/           # Authentication components
│   └── layout/         # Layout components
│   └── utils/          # Utility components
├── contexts/           # React contexts
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Features

### Theme Support
The application supports both light and dark modes, with:
- System preference detection
- Manual toggle option
- Persistent theme selection

### Navigation
- Collapsible sidebar with icon and full-width modes
- Responsive navigation for mobile devices
- Grouped navigation items with icons

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs) - JavaScript with syntax for types

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
