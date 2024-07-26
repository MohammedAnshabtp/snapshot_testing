# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

SnapShot Testing
----------------
Snapshot testing with Vitest is a powerful way to ensure your UI remains consistent over time. Vitest is a Vite-native testing framework, which makes it fast and efficient for projects using Vite as a build tool. 

Snapshot Test: 
The test in HelloWorld.test.jsx uses the render function from @testing-library/react to render the component. The asFragment function returns a DocumentFragment which is then used for the snapshot.

Snapshot Generation: 
The first time the test runs, Vitest generates a snapshot file and stores it in a __snapshots__ directory. Future test runs compare the output to this snapshot.
