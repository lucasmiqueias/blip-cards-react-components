# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial React port of blip-cards-vue-components
- BlipCard main component with automatic type detection
- PlainText component with advanced features (editing, deletion, show more)
- QuickReply component for interactive button selections
- Reply component for message replies
- WhatsApp Interactive List component
- Complete TypeScript type definitions
- Comprehensive test suite with Vitest
- CSS custom properties for theming via `@lucasmiqueias/blip-tokens`
- Dark mode support
- Tree shaking support with ESM build
- Vite build system with optimized output
- GitHub Actions CI/CD pipeline
- Automated NPM publishing workflow

### Changed

- Replaced local `@blip/design-tokens` with published `@lucasmiqueias/blip-tokens` package

### Technical Details

- Built with React 18 and TypeScript 5
- Uses Vite for fast development and optimized builds
- Comprehensive test coverage with Vitest and Testing Library
- ESLint and Prettier for code quality
- Design system powered by `@lucasmiqueias/blip-tokens`
- Supports peer dependencies for React 18+

## [1.0.0] - TBD

### Added

- Initial release of BLiP Cards React Components
- Core functionality ported from Vue.js version
- Complete component library for BLiP conversational messages

---

## How to Update This Changelog

When making changes to the project:

1. Add new features under `## [Unreleased] > ### Added`
2. Add bug fixes under `## [Unreleased] > ### Fixed`
3. Add breaking changes under `## [Unreleased] > ### Changed`
4. When releasing, move unreleased changes to a new version section

### Categories

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities
