# Gulp Starter using Babel with ES Modules

- Compiling your scss files to ``styles.css``
- Compiling ES Modules using Babel to an optimized file ``bundle.min.js``
- Automatically reload your browser when a change is detected

**Requirement:**
You need to install Node.js globally in your operating system, for more information please visit this link
https://nodejs.org/en.

### Installation
Install NPM packages
``npm install``

Then run the development server using ``npm start``<br>
**Happy coding! 🎉**

#### SASS folder structure
The organization of the scss file structure can be adapted according to your preferences, knowing that the output point is the ``styles.scss`` file.
```
sass/
|
|- abstracts/
|    |- _variables.scss
|    |- _media-query.scss
|    |- _colors.scss
|    ...
|    |- _index.scss
|
|- base/
|    |- _base.scss
|    |- _reset.scss
|    ...
|    |- _index.scss
|
|- utils/
|    |- _main.scss
|    |- _container.scss
|    |- _exceptions.scss
|    ...
|    |- _index.scss
|
|- components/
|    |- _buttons.scss
|    |- _carousel.scss
|    |- _dropdown.scss
|    ...
|    |- _index.scss
|
|- layout/
|    |- _header.scss
|    |- _sidebar.scss
|    |- _footer.scss
|    ...
|    |- _index.scss
|
|- pages/
|    |- _about.scss
|    |- _contact.scss
|    ...
|    |- _index.scss
|
|- themes/
|    |- _theme.scss
|    |- _admin.scss
|    ...
|    |- _index.scss
|
|- vendors/
|    |- _bootstrap.scss
|    |- _modern-reset.scss
|    ...
|    |- _index.scss
|
|- style.scss
```
