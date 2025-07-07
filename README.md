# Angular & TypeScript Quiz App

A modern, interactive quiz application built with Angular 19 and PrimeNG, featuring TypeScript and Angular-related questions. This project demonstrates modern Angular development practices using standalone components, signals, and the latest Angular features.

## 🚀 Features

- **Interactive Quiz Interface**: Clean, responsive design with PrimeNG components
- **9 TypeScript/Angular Questions**: Carefully curated questions covering TypeScript fundamentals and Angular concepts
- **Real-time Scoring**: Dynamic point calculation (+10 for correct, -10 for incorrect answers)
- **Timer System**: 60-second countdown per question with automatic progression
- **Progress Tracking**: Visual progress bar showing quiz completion percentage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Angular Architecture**: Built with standalone components and latest Angular 19 features

## 🛠️ Tech Stack

### Frontend Framework
- **Angular 19.0.0** - Latest version with standalone components
- **TypeScript 5.6.3** - Type-safe JavaScript development
- **RxJS 7.8.1** - Reactive programming with observables

### UI Components & Styling
- **PrimeNG 19.0.5** - Rich UI component library
- **PrimeIcons 7.0.0** - Comprehensive icon set
- **PrimeFlex 3.3.1** - CSS utility framework
- **@primeng/themes 19.0.5** - Modern theming system with Aura theme

### Development Tools
- **Angular CLI 19.0.2** - Command line interface for Angular
- **Angular DevKit 19.0.2** - Development and build tools
- **ESLint 8.57.0** - Code linting and formatting
- **Karma & Jasmine** - Testing framework

### Modern Angular Features Used
- ✅ Standalone Components (no NgModules)
- ✅ Dependency Injection with `inject()` function
- ✅ Angular Signals for reactive state management
- ✅ Control Flow Syntax (`@if`, `@for`)
- ✅ Modern Router with lazy loading
- ✅ HttpClient for data fetching
- ✅ Custom Directives with modern syntax

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (optional, for development)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🎮 How to Use

1. **Welcome Screen**: Enter your name to start the quiz
2. **Quiz Interface**: 
   - Read each question carefully
   - Click on your chosen answer
   - Watch the timer (60 seconds per question)
   - Track your progress with the progress bar
3. **Navigation**: Use Previous/Next buttons or let the timer auto-advance
4. **Results**: View your final score and detailed results at the end
5. **Restart**: Use the refresh button to restart the quiz anytime

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Header component
│   │   ├── welcome/             # Welcome/login screen
│   │   ├── question/            # Main quiz component
│   │   └── not-found/           # 404 page
│   ├── services/
│   │   └── question.service.ts  # Quiz data service
│   ├── models/
│   │   └── IUser.ts            # User interface
│   ├── directives/
│   │   └── change-background.directive.ts  # Answer feedback directive
│   ├── app.config.ts           # App configuration
│   └── app-routes.ts           # Routing configuration
├── assets/
│   ├── question.json           # Quiz questions data
│   └── styles/                 # SCSS stylesheets
└── environments/               # Environment configurations
```

## 🎯 Quiz Rules

- **9 Questions Total**: Each question covers TypeScript or Angular concepts
- **60 Seconds Per Question**: Timer automatically advances to next question
- **Scoring System**:
  - ✅ Correct Answer: +10 points
  - ❌ Incorrect Answer: -10 points
  - ⏰ Timeout: -10 points
- **Final Results**: View total score and detailed breakdown

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

### Code Scaffolding

Generate new components:
```bash
ng generate component component-name
ng generate service service-name
ng generate directive directive-name
```

### Building for Production

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Tests are configured with Karma and Jasmine.

## 🎨 Customization

### Adding New Questions
Edit `src/assets/question.json` to add or modify quiz questions:

```json
{
  "questionText": "Your question here?",
  "options": [
    {"text": "Option 1", "correct": true},
    {"text": "Option 2"},
    {"text": "Option 3"},
    {"text": "Option 4"}
  ],
  "explanation": "Explanation for the correct answer"
}
```

### Styling
- Global styles: `src/styles.scss`
- Component styles: Individual `.scss` files
- PrimeNG theme: Configured in `app.config.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- UI components by [PrimeNG](https://primeng.org/)
- Icons by [PrimeIcons](https://primeicons.org/)
- Quiz questions focused on TypeScript and Angular fundamentals

---

**Happy Coding!** 🚀
