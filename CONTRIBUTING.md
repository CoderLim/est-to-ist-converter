# Contributing to EST to IST Converter

Thank you for your interest in contributing to the EST to IST Converter! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm
- Git

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/est-to-ist-converter.git
   cd est-to-ist-converter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug fixes**: Fix issues and improve stability
- **New features**: Add new functionality to the converter
- **Documentation**: Improve README, code comments, and guides
- **UI/UX improvements**: Enhance the user interface and experience
- **Performance optimizations**: Improve loading times and efficiency
- **Accessibility**: Make the app more accessible to all users
- **Internationalization**: Add support for new languages

### Reporting Issues

Before creating an issue, please:

1. **Check existing issues** to avoid duplicates
2. **Use the issue template** when available
3. **Provide detailed information**:
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots if applicable

### Submitting Pull Requests

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   pnpm lint
   pnpm build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Follow the existing component structure
- Use proper prop types
- Keep components focused and reusable

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design
- Maintain accessibility standards

### File Organization

- Place components in appropriate directories
- Use descriptive file names
- Group related files together
- Follow the existing project structure

## 🧪 Testing

### Manual Testing

Before submitting a PR, please test:

- [ ] Time conversion accuracy
- [ ] Responsive design on different screen sizes
- [ ] Keyboard navigation
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Performance on slower devices

### Automated Testing

Run the following commands to ensure code quality:

```bash
# Linting
pnpm lint

# Type checking
pnpm build
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Use meaningful variable names
- Include inline comments for complex logic
- Update README for new features

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Examples:
```
feat: add dark mode support
fix: resolve timezone calculation error
docs: update installation instructions
```

## 🎨 Design Guidelines

### UI/UX Principles

- **Simplicity**: Keep the interface clean and intuitive
- **Accessibility**: Ensure the app is usable by everyone
- **Consistency**: Follow the existing design patterns
- **Performance**: Optimize for fast loading and smooth interactions

### Color Scheme

- Use the existing color tokens from the design system
- Maintain good contrast ratios
- Support both light and dark themes

### Typography

- Use the Geist font family
- Maintain consistent font sizes and weights
- Ensure good readability

## 🌍 Internationalization

### Adding New Languages

1. Create a new locale file in `lib/i18n/locales/`
2. Update the `locales` array in `lib/i18n/config.ts`
3. Add the new locale to the translations object
4. Test the new language thoroughly

### Translation Guidelines

- Use clear, concise language
- Maintain consistency with existing translations
- Consider cultural context
- Test with native speakers when possible

## 🚀 Release Process

### Version Bumping

We follow [Semantic Versioning](https://semver.org/):

- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backward compatible
- **Patch** (0.0.1): Bug fixes, backward compatible

### Release Checklist

- [ ] Update version in `package.json`
- [ ] Update CHANGELOG.md
- [ ] Test all functionality
- [ ] Update documentation
- [ ] Create release notes

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's values

### Communication

- Use clear, professional language
- Be patient with questions
- Provide helpful responses
- Keep discussions focused

## 📞 Getting Help

If you need help:

1. **Check the documentation** first
2. **Search existing issues** for similar problems
3. **Ask questions** in GitHub Discussions
4. **Contact maintainers** for urgent issues

## 🙏 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to the EST to IST Converter! 🎉
