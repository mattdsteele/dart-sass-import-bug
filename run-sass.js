// const sass = require('node-sass');
const sass = require('sass');
sass.render(
  {
    file: 'app/app.scss',
    includePaths: ['shared/foo/scss', 'shared/bar/scss']
  },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.css.toString());
    }
  }
);
