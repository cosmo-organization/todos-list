
var ghpages=require('gh-pages')

ghpages.publish('build',{
	branch:'gh-pages',
	repo:'https://github.com/cosmo-organization/todos-list.git'
},(e)=>{
	console.log("Something wrong",e)
})