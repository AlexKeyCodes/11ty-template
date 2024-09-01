# 11ty Template Project

This project is a customizable starter template for creating static websites using [11ty (Eleventy)](https://www.11ty.dev/), with integrations for [Nunjucks](https://mozilla.github.io/nunjucks/), [TailwindCSS](https://tailwindcss.com/), [SASS](https://sass-lang.com/), and JavaScript. The template also includes plugins for navigation, sitemap generation, and file minification. It's designed for rapid development and deployment on Netlify.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **11ty (Eleventy):** Static site generation with flexible templating.
- **Nunjucks:** Powerful templating engine with support for logic and partials.
- **TailwindCSS:** Utility-first CSS framework with SASS integration.
- **SASS:** Extendable CSS with variables, nesting, and more.
- **JavaScript:** Custom scripts to enhance functionality.
- **11ty Plugins:**
  - **eleventy-navigation:** Simple, powerful navigation.
  - **eleventy-plugin-sitemap:** Generate a sitemap for SEO.
  - **eleventy-plugin-files-minifier:** Minify HTML, CSS, and JavaScript files for production.

## Project Structure

my-11ty-template/
├── .eleventy.js # Eleventy configuration
├── .gitignore # Files and directories to ignore in version control
├── netlify.toml # Netlify deployment configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration for TailwindCSS
├── tailwind.config.js # TailwindCSS configuration
├── src/ # Source files
│ ├── assets/ # Static assets (CSS, JS, images, etc.)
│ │ ├── css/ # Compiled CSS
│ │ ├── favicons/ # Favicons
│ │ ├── fonts/ # Custom fonts
│ │ ├── images/ # Images
│ │ ├── js/ # JavaScript files
│ │ ├── sass/ # SASS files
│ │ └── svgs/ # SVG files
│ ├── \_data/ # Global data accessible in templates
│ │ └── client.js # Client-specific data
│ ├── \_includes/ # Reusable templates and components
│ │ ├── layouts/ # Layout files
│ │ └── components/ # Template components (header, footer, etc.)
│ ├── pages/ # Static pages (e.g., About, Contact)
│ └── posts/ # Blog posts or other content
└── dist/ # Output directory (auto-generated)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/11ty-template.git
cd 11ty-template
Install dependencies:

bash
Copy code
npm install
Development
To start the development server with live reloading:

bash
Copy code
npm run serve
Visit http://localhost:8080 to view your site. Changes to the files in src/ will automatically rebuild and reload the site.

Available Scripts
npm run build: Build the project for production, generating the static files in the dist/ directory.
npm run serve: Start a local development server with live reloading.
npm run watch: Watch for changes and rebuild the CSS and Eleventy templates.
npm run build:css: Compile the SASS files into CSS using PostCSS and TailwindCSS.
npm run clean: Remove the dist/ directory to ensure a fresh build (add this script as needed).
Customization
TailwindCSS
Modify tailwind.config.js to customize TailwindCSS settings, such as colors, spacing, and fonts.
Add or update styles in src/assets/sass/styles.scss.
Nunjucks Templates
Add new layouts in src/\_includes/layouts/.
Create reusable components in src/\_includes/components/.
Store global data in src/\_data/.
Eleventy Plugins
Configure navigation in the eleventyConfig.addPlugin(eleventyNavigationPlugin) block in .eleventy.js.
Update sitemap settings in the eleventyConfig.addPlugin(sitemap) block in .eleventy.js.
Deployment
This project is configured for easy deployment to Netlify. You can customize the deployment settings in netlify.toml.

Deploy to Netlify:

Push your repository to a Git provider like GitHub.
Connect your repository to Netlify.
Netlify will automatically build and deploy your site on each push.
Build Locally for Production:

To generate a production-ready build:

bash
Copy code
npm run build
The output will be in the dist/ directory, ready to be served.

Contributing
If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. We welcome contributions that improve the project.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute this template as you see fit.
