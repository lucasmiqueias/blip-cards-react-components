# Contributing to BLiP Cards React Components

Thank you for your interest in contributing to BLiP Cards React Components! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun
- Git

### Development Setup

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/blip-cards-react-components.git
   cd blip-cards-react-components
   ```

   > Replace `YOUR_USERNAME` with your GitHub username. The original repository is at:
   > https://github.com/lucasmiqueias/blip-cards-react-components

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 🧪 Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements
- `chore/description` - Build/tooling changes

### Making Changes

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Write clean, readable code
   - Follow existing code style
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**

   ```bash
   # Run all tests
   npm test

   # Run tests with coverage
   npm run test:coverage

   # Run linting
   npm run lint

   # Check TypeScript types
   npm run type-check
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect meaning (white-space, formatting, etc)
- `refactor`: Code change that neither fixes bug nor adds feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat: add WhatsApp button interactive component
fix: resolve text overflow in quick reply buttons
docs: update installation instructions
style: format code according to prettier rules
refactor: simplify BlipCard props interface
test: add unit tests for Reply component
chore: update vite config for better tree shaking
```

## 🧪 Testing Guidelines

### Writing Tests

- Place test files alongside the component in `__tests__` folders
- Use descriptive test names
- Test both happy path and edge cases
- Aim for high coverage (>90%)

### Test Structure

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Component from "../Component";

describe("Component", () => {
  it("renders correctly with basic props", () => {
    render(<Component prop="value" />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });

  it("handles edge case", () => {
    // Test edge cases
  });
});
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── BlipCard.tsx     # Main card component
│   ├── PlainText/       # PlainText component
│   ├── QuickReply/      # QuickReply component
│   ├── Reply/           # Reply component
│   ├── WhatsApp/        # WhatsApp specific components
│   └── __tests__/       # Component tests
├── types/               # TypeScript type definitions
├── test/                # Test utilities
└── index.ts            # Main entry point
```

## 🎨 Code Style

### TypeScript

- Use strict TypeScript configuration
- Prefer interfaces over types for object shapes
- Export interfaces from `types/index.ts`
- Use proper JSDoc comments for public APIs

### React

- Use functional components with hooks
- Prefer composition over inheritance
- Use proper prop types and default values
- Follow React best practices

### CSS

- Use CSS custom properties for theming
- Follow BEM-like naming convention
- Keep styles modular and component-scoped
- Use semantic class names

### Example Component

```typescript
import React from "react";
import clsx from "clsx";
import { ComponentProps } from "../types";
import "./Component.css";

/**
 * Component for rendering something awesome
 */
const Component: React.FC<ComponentProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("component", `component--${variant}`, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Component;
```

## 🐛 Bug Reports

When filing a bug report, please include:

1. **Description** - Clear description of the issue
2. **Steps to reproduce** - Minimal steps to reproduce the issue
3. **Expected behavior** - What you expected to happen
4. **Actual behavior** - What actually happened
5. **Environment** - OS, Node.js version, package version
6. **Code example** - Minimal code example demonstrating the issue

### Bug Report Template

````markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Code Example**

```tsx
// Minimal code example
```
````

**Environment:**

- OS: [e.g. macOS 12.0]
- Node.js: [e.g. 18.17.0]
- Package version: [e.g. 1.2.3]
- React version: [e.g. 18.2.0]

**Additional context**
Add any other context about the problem here.

````

## 💡 Feature Requests

Feature requests are welcome! Please provide:

1. **Use case** - Describe your use case
2. **Proposed solution** - How would you like it to work?
3. **Alternatives** - What alternatives have you considered?
4. **Examples** - Any examples from other libraries?

## 📚 Documentation

### Adding Documentation

- Update README.md for new features
- Add JSDoc comments to components
- Update TypeScript interfaces
- Add examples for new components

### Documentation Structure

```typescript
/**
 * Component description
 *
 * @example
 * ```tsx
 * <Component prop="value">
 *   Content
 * </Component>
 * ```
 */
interface ComponentProps {
  /** Prop description */
  prop: string;
}
````

## 🔍 Code Review Process

1. **Automated checks** - All CI checks must pass
2. **Code review** - At least one maintainer review
3. **Testing** - Adequate test coverage
4. **Documentation** - Updated documentation if needed

### Review Checklist

- [ ] Code follows project conventions
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] Breaking changes are noted
- [ ] Performance impact is considered

## 🏷️ Release Process

1. **Version bump** - Update version in package.json
2. **Changelog** - Update CHANGELOG.md
3. **Git tag** - Create git tag
4. **NPM publish** - Automated via GitHub Actions
5. **GitHub release** - Create GitHub release

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/lucasmiqueias/blip-cards-react-components/discussions)
- 🐛 [GitHub Issues](https://github.com/lucasmiqueias/blip-cards-react-components/issues)
- 📧 [Email](mailto:blip-support@take.net)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to BLiP Cards React Components! 🎉
