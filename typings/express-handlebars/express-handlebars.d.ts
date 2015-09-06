///<reference path="../handlebars/handlebars.d.ts" />

declare module "express-handlebars" {
	import handlebars = require('handlebars');
	
	function exphbs(config: exphbs.IConfigOptions): exphbs.ExpressHandlebars;
	
	module exphbs {
		
		interface IConfigOptions {
			handlebars?: any;
			extname?: string;
			layoutsDir?: string;
			partialsDir?: string;
			defaultLayout: string;
			helpers?: {};
			compilerOptions?: {}
		}
		
		interface ExpressHandlebars {
			();
		}
	}
	
	export = exphbs;
}