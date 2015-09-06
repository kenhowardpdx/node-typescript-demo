var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['typescript']);

gulp.task('typescript', function () {
	var tsResult = gulp.src([
			'./typings/tsd.d.ts',
			'./src/**/*.ts'
		])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject));
	
	return tsResult.js.pipe(sourcemaps.write())
		.pipe(gulp.dest('./src/'));
});