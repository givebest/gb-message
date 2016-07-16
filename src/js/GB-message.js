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

		// msg为空，移除title，msg展示title内容
		!!msg ? 
			html.push('<h5 class="gbmsg-dialog-title">' + title + '</h5>') :
			msg = title;

		// msg依然为空，移除msg，只展示icon
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

	// waitting
	Message.prototype.waitting = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-clock'
		});
	};

	// loading
	Message.prototype.loading = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-reset'
		});
	};

	// frown
	Message.prototype.frown = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-frown'
		});
	};

	// smile
	Message.prototype.smile = function(title, msg){
		this.showDialog(title, msg, {
			'iconClass': 'icono-smile'
		});
	};

	return Message;

}());

var msg = new GBMessage();
// msg.success('恭喜', '您的提供已经成功。');
// msg.failure('抱歉', '网络异常，请重试。');
// msg.info('警告', '您确定要删除这个吗？');
// msg.waitting('加载中，请稍候。');
// msg.loading('加载中...');
// msg.loading();
// msg.frown('很遗憾', '亲未能抽中大奖');
msg.smile('恭喜', '小手一点，大奖到手');






















// Polyfill
if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
}