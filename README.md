# JavaScript_Projects

## VS Code Extensions (Quick Reference)

- Auto Rename Tag: Renames matching HTML/XML tags automatically when you edit one of them.
- Houston (astro-build.houston): Adds Houston commands/tools in VS Code for Astro-related workflow support.
- VSCode Great Icons: Applies a richer file/folder icon theme to make project files easier to scan.
- Google Fonts: Helps find and insert Google Font families/snippets into your frontend code quickly.

## Newly Installed Extensions (Detailed Reference)

### CSS Peek

- What it does: Lets you jump from HTML class/id usage directly to matching CSS definitions.
- How it works: The extension indexes CSS/SCSS/LESS selectors in your workspace, then adds "Peek Definition" and "Go to Definition" support from markup files. When you place the cursor on a class (for example `btn-primary`) and peek definition, VS Code opens an inline panel showing matching style rules.

### Color Highlight

- What it does: Visually previews colors directly inside your code.
- How it works: It scans color values (hex, rgb/rgba, hsl/hsla, named colors, etc.) and draws a background/marker using that exact color next to or behind the value. This makes it much easier to compare palette choices without repeatedly switching to a browser.

### Thunder Client

- What it does: API client inside VS Code for testing REST endpoints.
- How it works: You create requests (method, URL, headers, auth, body), send them from the sidebar, and inspect status, headers, and JSON responses in-place. Collections and environments let you reuse requests and variables across local development workflows.

### REST Client

- What it does: Sends HTTP requests from plain text `.http` or `.rest` files.
- How it works: You write requests directly in files, click "Send Request", and view responses inline in the editor. It supports variables, multiple requests per file, and request history, making API testing easy to version with your project.

### DotENV

- What it does: Improves editing for `.env` files.
- How it works: Adds syntax highlighting and basic validation for environment-variable files (`KEY=value`), so configuration values are easier to read and less error-prone when managing local app settings.

### npm Dependency Links

- What it does: Turns dependency names into clickable links.
- How it works: In files like `package.json` and import contexts, package names become navigable links to dependency sources/details (for example, npm package pages or local package metadata), which speeds up dependency inspection.

### GitLens

- What it does: Adds rich Git insights directly in the editor.
- How it works: Shows inline blame annotations (who changed a line and when), file/repo history, commit details, and branch context. It layers Git metadata into normal editing so you can track code ownership and change intent without leaving VS Code.
