# GB-Message
----

## 简介

简易的消息弹提示，包含成功、失败、警告/信息、等待、Loading、笑脸、哭脸几种常用状态 Icon，其中`等待`、`Loading`会一直显示，其它状态默认`1秒`自动隐藏。   
  

## 使用


	<link href="css/gb-message.css" rel="stylesheet">     
	<script src="js/gb-message.js"></script> 


### 功能

	gbmsg.method(title, msg);   

> `method`： success/failure/info/waitting/loading/frown/smile    
> `title`：消息标题(可选)    
> `msg`： 消息内容(可选)


### 示例

	gbmsg.success('恭喜', '您的提供已经成功。');
	gbmsg.failure('抱歉', '网络异常，请重试。');
	gbmsg.info('警告', '您确定要删除这个吗？');
	gbmsg.waitting('正在操作，请稍候。');
	gbmsg.loading('加载中...');
	gbmsg.loading();
	gbmsg.frown('很遗憾', '亲未能抽中大奖');
	gbmsg.smile('恭喜', '小手一点，大奖到手');






## 感谢他们

演示网页排版来自： [https://github.com/sofish/typo.css](https://github.com/sofish/typo.css)       
消息状态Icon来自：[https://github.com/saeedalipoor/icono](https://github.com/saeedalipoor/icono)



## License

[MIT](./LICENSE) © 2016 [givebest](https://github.com/givebest)

 
