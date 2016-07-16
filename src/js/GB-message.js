var GBMessage = (function(){

	var domBody = document.body,
		overlay,   // 遮罩层
		dialog;    // 信息层

	function Message(){
		var target = document.createElement('div');
		target.id = 'GBMsg';
		target.className = 'gbmsg-overlay';
		target.innerHTML = '<div class="gbmsg-dialog"></div>';
		domBody.appendChild(target);

		overlay = document.getElementById('GBMsg');
		dialog = GBMsg.children[0];
	}

	Message.prototype.showDialog = function(title, msg, opts){
		var title = title,
			msg = msg,
			html = [];

		html.push('<div class="gbmsg-dialog-icon">');
		html.push('<i class="' + opts.iconClass + '"></i>');
		html.push('</div>');
		// html.push('<div class="gbmsg-dialog-container">');

		// msg为空，移除title，msg展示title内容
		!!msg ? 
			html.push('<div class="gbmsg-dialog-container"><h5 class="gbmsg-dialog-title">' + title + '</h5>') :
			msg = title;

		// msg依然为空，移除msg，只展示icon
		!!msg ?
			html.push('<div class="gbmsg-dialog-container"><div class="gbmsg-dialog-content">' + msg + '</div></div>') : 
			'';

		html.push('</div>');

		dialog.innerHTML = html.join('');	
		overlay.style.display = 'block';
	};

	Message.prototype.hideDialog = function(){
		overlay.style.display = 'none';	
	}

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

	// hide
	Message.prototype.hide = function(){
		this.hideDialog();
	}

	return Message;

}());

var gbmsg = new GBMessage();
window.gbmsg = gbmsg;
// module.exports = gbmsg;



// gbmsg.success('恭喜', '您的提供已经成功。');
// gbmsg.failure('抱歉', '网络异常，请重试。');
// gbmsg.info('警告', '您确定要删除这个吗？');
// gbmsg.waitting('加载中，请稍候。');
// gbmsg.loading('加载中...');
// gbmsg.loading();
// gbmsg.frown('很遗憾', '亲未能抽中大奖');
// gbmsg.smile('恭喜', '小手一点，大奖到手');






















// Polyfill
if(!Object.create){
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
}