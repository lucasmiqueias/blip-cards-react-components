---
name: Bug Report
about: Create a report to help us improve
title: "[BUG] "
labels: ["bug", "needs-triage"]
assignees: ""
---

## 🐛 Bug Description

A clear and concise description of what the bug is.

## 🔄 Steps to Reproduce

Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## ✅ Expected Behavior

A clear and concise description of what you expected to happen.

## ❌ Actual Behavior

A clear and concise description of what actually happened.

## 💻 Code Example

```tsx
// Please provide a minimal code example that demonstrates the issue
import { BlipCard } from "blip-cards-react-components";

function App() {
  return (
    <BlipCard
      document={{
        id: "1",
        type: "text/plain",
        content: "Hello World",
        date: "2024-01-01T10:00:00Z",
      }}
      position="left"
    />
  );
}
```

## 🌍 Environment

**Desktop:**

- OS: [e.g. macOS 12.0, Windows 11, Ubuntu 22.04]
- Node.js: [e.g. 18.17.0]
- npm/yarn: [e.g. npm 9.8.1]
- Package version: [e.g. 1.2.3]
- React version: [e.g. 18.2.0]
- Browser: [e.g. Chrome 115, Firefox 115, Safari 16]

**Mobile (if applicable):**

- Device: [e.g. iPhone 14, Samsung Galaxy S23]
- OS: [e.g. iOS 16.1, Android 13]
- Browser: [e.g. Safari, Chrome, Samsung Internet]

## 📱 Screenshots

If applicable, add screenshots to help explain your problem.

## 📋 Additional Context

Add any other context about the problem here.

## ✅ Checklist

- [ ] I have searched for existing issues
- [ ] I have provided a minimal code example
- [ ] I have included environment information
- [ ] I have tested with the latest version
