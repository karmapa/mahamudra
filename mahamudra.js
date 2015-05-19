var config={
	name:"mahamudra"
	,meta:{
		config:"tibetan1"
		,template:"tibetan"
	},
	callbacks:{
	}
	,trim:true
	,estimatesize:419430400
	,segsep: "pb.id"
	,glob:"mahamudra.lst"
}
module.exports=config;
require("ksana-indexer").build(config);