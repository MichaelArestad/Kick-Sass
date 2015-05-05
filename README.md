# Kick-Sass
Kicking the C out of CSS.

## Choices made so far:
* Reset instead of normalize. This is beneficial when working with components. Less overrides are needed.
* BEM in this syntax: `base-someElement-modifier`
* As little nesting as possible within reason.
* Very light global styles.
* No underscores in file names
* each component has its own folder regardless of number of files
* No `@extends` ever
