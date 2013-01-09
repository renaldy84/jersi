/**
* Jersi.js
* a javascript micro-templating engine inspired from weld and meld.
* @author Hapsoro Renaldy N <hapsoro.renaldy at gmail.com>
* version 0.0.1
*/
var jersi_tpls = {};//we store all templates inside here.
var jersi = function(tpl,data){

	if(typeof jersi_tpls['_'+tpl] === 'undefined'){
		console.log('cache template');
		jersi_tpls['_'+tpl] = $(tpl).clone();
	}	
	$(tpl).html('');//reset the content
	console.log($(tpl).html());
	if(!$.isArray(data)){
		$(tpl).append(jersi_tpls['_'+tpl].html());
		$.each(data,function(name,val){
			$(tpl+' .'+name).html(val);
		});
	}else{
		console.log('multi results');
		var cl = jersi_tpls['_'+tpl];
		for(var i=0;i<data.length;i++){
			d = data[i];
			$.each(d,function(name,val){
				cl.find('.'+name).html(val);
			});
			$(tpl).append(cl.html());
		}
		console.log($(tpl).html());
	}
}