var GBMessage = (function(){

	function Controller(){
		this.errors = [];
	}

	Controller.prototype.showDialog = function(title, msg, opts){
		var title = title,
			msg = msg,
			html = [];

		html.push('<div class="gbmsg-dialog-icon">');
		html.push('<i class="' + opts.iconClass + '"></i>');
		html.push('</div>');
		html.push('<div class="gbmsg-dialog-container">');

		// msg为空，移除title，msg内容为title内容
		!!msg ? 
			html.push('<h5 class="gbmsg-dialog-title">' + title + '</h5>') :
			msg = title;

		// msg依然为空，移除msg，只会展示icon
		!!msg ?
			html.push('<div class="gbmsg-dialog-content">' + msg + '</div>') : 
			'';

		html.push('</div>');

		document.getElementsByClassName('gbmsg-dialog')[0].innerHTML = html.join('');	
	}

	// success
	Controller.prototype.success = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-checkCircle'
		});	
	}

	// failure
	Controller.prototype.failure = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-crossCircle'
		});
	}

	// wait
	Controller.prototype.wait = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-clock'
		});
	}

	// loading
	Controller.prototype.loading = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-reset'
		})
	}

	return {
		init: Controller
	}

}());

var msg = new GBMessage.init();
// msg.success('恭喜', '您的提供已经成功。');
// msg.failure('抱歉', '网络异常，请重试。')
// msg.wait('加载中，请稍候。');
// msg.loading('加载中...');
msg.loading();























// Polyfill
if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
}