# BLiP Cards React Components

## ✨ Features

- 🚀 **Modern Stack**: Built with React 18, TypeScript 5, and Vite
- 📱 **Multi-Channel Support**: WhatsApp interactive components and more
- 🎨 **Design System**: Powered by `@lucasmiqueias/blip-tokens` for consistent theming
- 🧩 **Interactive Elements**: Quick replies, lists, buttons, and carousels
- 🧪 **Well Tested**: Comprehensive test suite with Vitest and Testing Library
- 📦 **Tree Shakeable**: Optimized bundle size with ESM support
- 🔧 **Developer Experience**: TypeScript, hot reload, and comprehensive tooling
- 🌙 **Theme Support**: Light/dark mode compatible
- ⚡ **Performance**: Optimized rendering and minimal bundle size
- 🔄 **React Port**: Based on official [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components)ion](https://badge.fury.io/js/blip-cards-react-components.svg)](https://badge.fury.io/js/blip-cards-react-components)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)

> **Unofficial** React port of [blip-cards-vue-componen## ## 🆘 Support & Community

- 🐛 [Report Issues](https://github.com/lucasmiqueias/blip-cards-react-components/issues)
- 💬 [Discussions](https://github.com/lucasmiqueias/blip-cards-react-components/discussions)

## 🔗 Related Projectsport & Community

- 🐛 [Report Issues](https://github.com/lucasmiqueias/blip-cards-react-components/issues)
- 💬 [Discussions](https://github.com/lucasmiqueias/blip-cards-react-components/discussions)https://github.com/takenet/blip-cards-vue-components). A comprehensive React component library for rendering BLiP conversational messages with support for multiple channels, interactive elements, and modern TypeScript development.

> ⚠️ **Note**: This is an unofficial community project and is not maintained by Take/BLiP team. For official components, please use [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components).

## 📖 About This Project

This project is a React port of the official [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components) library. It aims to provide React developers with the same powerful BLiP message rendering capabilities that Vue developers enjoy.

### Why This Port?

- **React Ecosystem**: Bring BLiP Cards to React applications
- **Component Parity**: Match the functionality of the original Vue components
- **Modern React**: Built with React 18, hooks, and modern patterns
- **TypeScript First**: Full TypeScript support for better developer experience
- **Community Driven**: Open for contributions and improvements

## ✨ Features

- 🚀 **Modern Stack**: Built with React 18, TypeScript 5, and Vite
- 📱 **Multi-Channel Support**: WhatsApp interactive components and more
- 🎨 **Customizable Design**: CSS variables and themes support
- 🧩 **Interactive Elements**: Quick replies, lists, buttons, and carousels
- 🧪 **Well Tested**: Comprehensive test suite with Vitest and Testing Library
- 📦 **Tree Shakeable**: Optimized bundle size with ESM support
- 🔧 **Developer Experience**: TypeScript, hot reload, and comprehensive tooling
- � **Theme Support**: Light/dark mode compatible
- ⚡ **Performance**: Optimized rendering and minimal bundle size
- � **React Port**: Based on official [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components)

## 🎮 Demo

> 🚧 **Coming Soon**: Live demo will be available soon. For now, you can run the development server locally to see the components in action.

```bash
git clone https://github.com/lucasmiqueias/blip-cards-react-components.git
cd blip-cards-react-components
npm install
npm run dev
```

## 📦 Installation

```bash
npm install blip-cards-react-components
```

Or with other package managers:

```bash
# Yarn
yarn add blip-cards-react-components

# pnpm
pnpm add blip-cards-react-components

# Bun
bun add blip-cards-react-components
```

### Design Tokens

This library uses `@lucasmiqueias/blip-tokens` for consistent design tokens. It's automatically installed as a dependency, providing:

- CSS custom properties for theming
- TypeScript theme utilities
- Consistent spacing, colors, and typography

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom
```

## 🚀 Quick Start

```tsx
import React from "react";
import { BlipCard } from "blip-cards-react-components";
import "blip-cards-react-components/dist/style.css";

function App() {
  const message = {
    id: "1",
    type: "text/plain",
    content: "Hello! Welcome to BLiP Cards React Components 👋",
    date: new Date().toISOString(),
  };

  return (
    <BlipCard
      document={message}
      position="left"
      date={new Date().toLocaleTimeString()}
      status="received"
      memberInfo={{
        name: "BLiP Assistant",
        photo: "https://example.com/avatar.png",
      }}
    />
  );
}

export default App;
```

## 📋 Components

### BlipCard

Main component for rendering BLiP messages with automatic type detection.

```tsx
import { BlipCard } from "blip-cards-react-components";

<BlipCard
  document={{
    id: "1",
    type: "text/plain",
    content: "Hello World!",
    date: "2024-01-01T10:00:00Z",
  }}
  position="left"
  date="10:00 AM"
  status="received"
  editable={true}
  onSave={(doc) => console.log("Saved:", doc)}
/>;
```

### PlainText

Component for rendering plain text messages with advanced features.

```tsx
import { PlainText } from "blip-cards-react-components";

<PlainText
  document="This is a plain text message with long content that can be truncated..."
  position="right"
  editable={true}
  deletable={true}
  showMoreText="Read more"
  onSave={(doc) => handleSave(doc)}
  onDelete={(doc) => handleDelete(doc)}
/>;
```

### QuickReply

Interactive quick reply buttons for user selections.

```tsx
const quickReplyDoc = {
  type: "application/vnd.lime.select+json",
  content: {
    text: "Choose an option:",
    options: [
      { text: "Option 1", value: { action: "option1" } },
      { text: "Option 2", value: { action: "option2" } },
    ],
  },
};

<BlipCard document={quickReplyDoc} position="left" />;
```

### WhatsApp Interactive

Support for WhatsApp Business API interactive messages.

```tsx
const whatsappList = {
  type: "application/json",
  content: {
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: "Select an option from the list:" },
      action: {
        button: "View Options",
        sections: [
          {
            rows: [
              { id: "1", title: "Option 1", description: "Description 1" },
              { id: "2", title: "Option 2", description: "Description 2" },
            ],
          },
        ],
      },
    },
  },
};

<BlipCard document={whatsappList} position="left" />;
```

## 🎨 Styling & Theming

The library uses CSS custom properties for easy customization:

```css
:root {
  /* Colors */
  --surface-0: #ffffff;
  --surface-1: #f8f9fa;
  --surface-2: #e9ecef;
  --surface-3: #dee2e6;

  /* Content */
  --content-default: #212529;
  --content-muted: #6c757d;

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 1rem;

  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;

  /* Border */
  --radius-sm: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --surface-0: #1a1a1a;
  --surface-1: #2d2d2d;
  --content-default: #ffffff;
  --content-muted: #a0a0a0;
}
```

## 📚 API Reference

### BlipDocument Interface

```typescript
interface BlipDocument {
  id?: string;
  to?: string;
  type: string;
  direction?: "sent" | "received";
  content?: any;
  date: string;
  status?: "received";
  metadata?: Record<string, any>;
}
```

### BlipCardProps Interface

```typescript
interface BlipCardProps {
  document: BlipDocument;
  position: "left" | "right";
  date?: string;
  status?: "sending" | "sent" | "received" | "failed";
  editable?: boolean;
  deletable?: boolean;
  memberInfo?: MemberInfo;
  photo?: string;
  editing?: boolean;
  externalMessage?: boolean;
  translations?: {
    externalMessageText?: string;
    messageDeleted?: string;
    showMoreText?: string;
  };
  onSave?: (document: BlipDocument) => void;
  onDelete?: (document: BlipDocument) => void;
  onCancel?: () => void;
  onEdit?: () => void;
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/lucasmiqueias/blip-cards-react-components.git
cd blip-cards-react-components

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build:lib
```

### Available Scripts

| Script                  | Description                        |
| ----------------------- | ---------------------------------- |
| `npm run dev`           | Start development server with Vite |
| `npm run build`         | Build for production               |
| `npm run build:lib`     | Build library for distribution     |
| `npm run test`          | Run tests with Vitest              |
| `npm run test:ui`       | Run tests with UI interface        |
| `npm run test:coverage` | Run tests with coverage report     |
| `npm run lint`          | Run ESLint                         |
| `npm run lint:fix`      | Fix ESLint issues automatically    |
| `npm run type-check`    | Run TypeScript type checking       |

### Publishing to NPM

This project includes automated publishing via GitHub Actions. To publish a new version:

1. **Update version**:

   ```bash
   npm version patch # or minor, major
   ```

2. **Create a GitHub release**:

   - Go to GitHub repository
   - Create a new release with the version tag
   - This will automatically trigger the publish workflow

3. **Manual publishing** (if needed):
   ```bash
   npm run prepublishOnly  # Run all checks
   npm publish             # Publish to NPM
   ```

### NPM Scripts for Publishing

- `npm run prepublishOnly` - Runs all checks before publishing
- `npm run version` - Builds and stages dist files
- `npm run postversion` - Pushes tags to GitHub

### Docker Development

```bash
# Start development environment
docker-compose up dev

# Run tests
docker-compose up test

# Build production
docker-compose up build
```

## 🧪 Testing

We maintain high test coverage with comprehensive unit and integration tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Test Structure

```
src/
├── components/
│   ├── __tests__/
│   │   ├── BlipCard.test.tsx
│   │   ├── PlainText.test.tsx
│   │   └── Reply.test.tsx
│   └── WhatsApp/
│       └── Interactive/
│           └── List/
│               └── __tests__/
│                   └── WhatsAppList.test.tsx
```

## 🤝 Contributing

We welcome contributions! This is a community-driven project.

### Development Workflow

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint:fix`
6. Commit your changes: `git commit -m 'feat: add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

- � [Report Issues](https://github.com/lucas/blip-cards-react-components/issues)
- � [Discussions](https://github.com/lucas/blip-cards-react-components/discussions)

## � Related Projects

- [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components) - **Official** Vue.js components (original project)
- [BLiP Platform](https://blip.ai) - Conversational AI platform
- [BLiP SDK for JavaScript](https://github.com/takenet/blip-sdk-js)

## 🏢 Official Support

For official BLiP support and enterprise features, please contact Take team directly:

- [BLiP Platform](https://blip.ai)
- [Take Website](https://take.net)

---

<div align="center">

**Community project inspired by [blip-cards-vue-components](https://github.com/takenet/blip-cards-vue-components)**

**Original BLiP Cards made with ❤️ by the [Take Team](https://github.com/takenet)**

</div>
