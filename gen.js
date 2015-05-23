var tibetDoc=require("tibetan").tibetDoc;
var mkdirp=require("./mkdirp");
var path=require("path");
var fs=require("fs");
var glob=require("glob");

var toHTML=function(fn,json) {
	var html = tibetDoc.JSONToHTML(json);
	var htmlfn="html"+fn.substr(3).replace(".dct",".html");

	var dir=path.dirname(htmlfn);
	mkdirp.sync(dir);	
	fs.writeFileSync(htmlfn,html,"utf8");	
}
var dofile=function(fn) {
	var buf=tibetDoc.parseFile(fn);
	var outfn="json"+fn.substr(3);
	outfn=outfn.replace(".dct",".json");
	console.log("converting",fn)
	var dir=path.dirname(outfn);
	mkdirp.sync(dir);
	fs.writeFileSync(outfn,JSON.stringify(buf),"utf8");

	toHTML(fn,buf);
}
glob("raw/**/*.dct",function(err,files){
	files.map(dofile);
})
