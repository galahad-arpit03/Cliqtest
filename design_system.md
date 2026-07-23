# Design System

## Fonts
The project utilizes the following Google Fonts:
- **Primary Font**: `Space Grotesk` (Used for general sans-serif text and body content).
- **Secondary Font**: `Alata` (Used for specific stylings, headings, or accents).

## Colors

The application implements a dynamic theming system with Dark Mode and Light Mode, defined via CSS variables.

### Dark Theme (Default)
- **Background**: `#000000` (Pitch Black)
- **Surface**: `#0A0A0A`
- **Surface Hover**: `#111111`
- **Foreground (Text)**: `#ffffff` (White)
- **Foreground Invert**: `#000000`
- **Muted Text**: `rgba(255, 255, 255, 0.6)`
- **Border**: `rgba(255, 255, 255, 0.1)`
- **Border Hover**: `rgba(255, 255, 255, 0.2)`

### Light Theme
- **Background**: `#ffffff` (White)
- **Surface**: `#FAFAFA`
- **Surface Hover**: `rgba(0, 0, 0, 0.05)`
- **Foreground (Text)**: `#000000` (Black)
- **Foreground Invert**: `#ffffff`
- **Muted Text**: `rgba(0, 0, 0, 0.6)`
- **Border**: `rgba(0, 0, 0, 0.1)`
- **Border Hover**: `rgba(0, 0, 0, 0.2)`

### Accent Colors / Gradients
- **Purple**: `#6843B7`
- **Green (Dark Mode)**: `#00F2B0`
- **Green (Light Mode)**: `#00A67A`

## Typography & Styling
- The default text is set to `Space Grotesk`.
- Base Global Radius: `0.5rem` (Tailwind rounded classes scale based on this).
