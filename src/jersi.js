/**
* Jersi.js
* a javascript micro-templating engine inspired from weld and meld.
* @author Hapsoro Renaldy N <hapsoro.renaldy at gmail.com>
* version 0.0.1
*/
function jersi(tpl,data){
	if(!$.isArray(data)){
		$.each(data,function(name,val){
			$(tpl+' .'+name).html(val);
		});
	}else{
		var cl = $(tpl).clone();
		for(var i=0;i<data.length;i++){
			d = data[i];
			$.each(d,function(name,val){
				if(i>0){
					cl.find('.'+name).html(val);
				}else{
					$(tpl+' .'+name).html(val);
				}
			});
			if(i>0){
				$(tpl).append(cl.html());
			}
		}
	}
}