# 11ty Template Project

This project is a customizable starter template for creating static websites using [11ty (Eleventy)](https://www.11ty.dev/), with integrations for [Nunjucks](https://mozilla.github.io/nunjucks/), [TailwindCSS](https://tailwindcss.com/), [SASS](https://sass-lang.com/), and JavaScript. The template also includes plugins for navigation, sitemap generation, and file minification. It's designed for rapid development and deployment to your own server via rsync over SSH.

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

```
my-11ty-template/
├── .eleventy.js # Eleventy configuration
├── .gitignore # Files and directories to ignore in version control
├── deploy.sh # rsync deployment script
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
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

### Use this template:

1. Click the green "Use this template" button at the top of this repository
2. Choose "Create a new repository"
3. Name your new repository (e.g., `client-website`)
4. Clone your new repository:

```
git clone https://github.com/your-username/client-website.git
cd client-website
```

### Install dependencies:

```
npm install
```

### Development

To start the development server with live reloading:

```
npm run serve
```

Visit http://localhost:8080 to view your site. Changes to the files in src/ will automatically rebuild and reload the site.

### Available Scripts

npm run build: Build the project for production, generating the static files in the dist/ directory.
npm run serve: Start a local development server with live reloading.
npm run watch: Watch for changes and rebuild the CSS and Eleventy templates.
npm run build:css: Compile the SASS files into CSS using PostCSS and TailwindCSS.
npm run clean: Remove the dist/ directory to ensure a fresh build (add this script as needed).

### Customization

### TailwindCSS

Modify tailwind.config.js to customize TailwindCSS settings, such as colors, spacing, and fonts.
Add or update styles in src/assets/sass/styles.scss.

### Nunjucks Templates

Add new layouts in src/\_includes/layouts/.
Create reusable components in src/\_includes/components/.
Store global data in src/\_data/.

### Eleventy Plugins

Configure navigation in the eleventyConfig.addPlugin(eleventyNavigationPlugin) block in .eleventy.js.
Update sitemap settings in the eleventyConfig.addPlugin(sitemap) block in .eleventy.js.

### Deployment

This project deploys to your own server using rsync over SSH via the included `deploy.sh` script. Before using it:

1. Update the script with your server details:

   - Replace `username` with your server username
   - Replace `your-server-ip` with your server's IP address
   - Replace `/var/www/yourdomain.com/` with your server's web root directory

2. Make the script executable:

   ```bash
   chmod +x deploy.sh
   ```

3. Run the deployment:
   ```bash
   ./deploy.sh
   ```

The script will:

- Build the site using `npm run build`
- Sync the contents of the `dist/` directory to your server using rsync
- Delete any files on the server that don't exist in your local build

#### Build Locally for Production:

To generate a production-ready build:

```
npm run build
The output will be in the dist/ directory, ready to be served.
```
