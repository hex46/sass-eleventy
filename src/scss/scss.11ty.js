const path = require('path');
const sass = require('sass');

/*
 * Il n'est pas nécessaire de garder le nom de la classe.
 * On peut directement l'exporter.
 */
module.exports = class {

    data() {
        const scssDir = path.join(__dirname, '.');
        const rawFilepath = path.join(scssDir, 'styles.scss');

        return {
            permalink: '/css/styles.css',
            rawFilepath: rawFilepath
        }
    }

    render({ rawFilepath }) {
        var sassRenderResult = sass.renderSync({
            file: rawFilepath,
            outputStyle: "compressed",
        });

        return sassRenderResult.css.toString();
    }
}