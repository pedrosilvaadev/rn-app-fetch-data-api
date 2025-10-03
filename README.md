# rn-app

<img width="451" height="867" alt="image" src="https://github.com/user-attachments/assets/defcc76f-b4e4-4cdc-bbd9-eca90249b894" />
<img width="472" height="894" alt="image" src="https://github.com/user-attachments/assets/44752037-6aaf-4bd1-8a46-82829559a8cc" />
<img width="428" height="868" alt="image" src="https://github.com/user-attachments/assets/59d8c704-e5e8-47bf-9591-f454e65b43b0" />

This is a simple React Native project using Expo, demonstrating fetching and displaying posts from an API with navigation between screens.

## Features

- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Displays a list of posts with a filter by title
- Navigates to a details screen for each post
- Handles loading and error states
- Uses React Navigation and Safe Area Context

## Project Structure

```
.
├── assets/           # App icons and images
├── src/
│   ├── api/          # API logic
│   ├── components/   # Reusable UI components (Loading, Error)
│   ├── pages/        # Screens (Home, Details)
│   ├── routes/       # Navigation stack
│   └── types/        # TypeScript types
├── App.tsx           # App entry point
├── index.ts          # Expo entry point
├── package.json      # Project metadata and scripts
├── tsconfig.json     # TypeScript configuration
└── app.json          # Expo configuration
```

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm start
   ```

3. **Run on your device or emulator:**
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Dependencies

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This project is for educational purposes.
