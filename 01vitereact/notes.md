React Rules

1. Function / Component name should start with a Capital Letter

function Header() {
return <h1>Hello</h1>;
}

❌ Wrong:

function header() {
return <h1>Hello</h1>;
}

2. Component file name is recommended to start with a Capital Letter

✅ Example:

Header.jsx
LoginPage.jsx
UserProfile.jsx

❌ Avoid:

header.jsx
loginPage.jsx
userProfile.jsx

3. In Vite + React projects, component files usually use .jsx extension

✅ Example:

App.jsx
Header.jsx
Home.jsx

For components containing JSX code:

const Home = () => {
return <h1>Home Page</h1>;
};
export default Home;

Quick Revision:

- Component name → PascalCase (Header, LoginPage)
- File name → PascalCase (Header.jsx)
- File extension in Vite React → .jsx (commonly used for JSX components)
