function getParams(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
		r = window.location.search.substr(1).match(reg);
	if(r) {
		return decodeURI(r[2]);
	}
	return null;
}