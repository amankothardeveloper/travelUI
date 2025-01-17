# https://amankothardeveloper.github.io/travelUI/

### (Please Read Doc First For Better Understanding)

# Figma to HTML Conversion Project

## Features and Implementation Details

### 1. Semantic HTML for SEO
- Used semantic HTML elements to ensure better accessibility and improved SEO performance.

### 2. SCSS for Improved Developer Experience
- Leveraged SCSS to write modular, readable, and maintainable code.
- Utilized SCSS features like variables, mixins, and nesting for cross-browser compatibility and streamlined development.

### 3. Custom Utility CSS Classes
- Avoided using CSS frameworks like Bootstrap or Tailwind CSS.
- Created a custom utility-based CSS system, adhering to the DRY (Don't Repeat Yourself) principle to ensure reusable and maintainable classes.

### 4. Global CSS Variables
- Developed a global CSS file to initialize all CSS values as variables.
- Ensured no hardcoded CSS values, allowing easy updates and centralized control over the website's styling.

### 5. Dark and Light Mode Switcher
- Implemented a theme switcher for dark and light modes.
- Stored the user's preference in local storage, ensuring the mode persists across sessions.

### 6. SVG Icon Management
- Created a `Database.svg` file to consolidate all icons in a single location.
- Reduced HTTP requests by referencing icons from the SVG file using `<symbol>`.
- Enabled styling of SVG inner elements to synchronize icons with the website's theme colors.
- Leveraged SVGs for their small file size and flexibility.

### 7. Theme Color Picker
- Added a color picker that allows users to customize the website's theme color.
- Saved the selected theme color in local storage for future visits.

### 8. Fully Responsive for Large Devices
- Designed and tested responsiveness for the largest available screen sizes.
- Verified responsiveness using browser zoom-out functionality (e.g., `Ctrl + (-)`).

### 9. Mobile Responsiveness (Pending)
- Mobile responsiveness is a known limitation due to time constraints and will be addressed in future updates.

## Future Improvements
- Complete mobile responsiveness.
- Enhance accessibility features for improved user experience.
- Further optimization for faster loading and better performance.

## How to Run the Project
1. Clone the repository to your local machine.
2. Open the project in Visual Studio Code.
3. Use the Live Server extension to run the `index.html` file.
   - Note: Opening the `index.html` file directly in a browser will prevent the icons from appearing.
4. SCSS files are compiled into CSS. Ensure SCSS is compiled using a preprocessor if changes are made.

## Additional Notes
- The project follows modern best practices for frontend development.
- Emphasis has been placed on performance, scalability, and maintainability.

---

Thank you for exploring the project!

