var GBMessage = (function(){

	function Message(){
		this.errors = [];
	}

	Message.prototype.showDialog = function(title, msg, opts){
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
	};

	// success
	Message.prototype.success = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-checkCircle'
		});	
	};

	// failure
	Message.prototype.failure = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-crossCircle'
		});
	};

	// info
	Message.prototype.info = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-exclamationCircle'
		});
	};

	// wait
	Message.prototype.wait = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-clock'
		});
	};

	// loading
	Message.prototype.loading = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-reset'
		})
	};

	return Message;

}());

var msg = new GBMessage();
// msg.success('恭喜', '您的提供已经成功。');
msg.failure('抱歉', '网络异常，请重试。');
// msg.info('警告', '您确定要删除这个吗？');
// msg.wait('加载中，请稍候。');
// msg.loading('加载中...');
// msg.loading();























// Polyfill
if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
}