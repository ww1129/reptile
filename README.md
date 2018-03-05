#项目说明：    

本项目使用nodejs爬虫简书网为例,将爬到的信息放到json文件中。

#node版本说明:     

node中使用了async await，因此,_node版本需在v7.0以上_ 

#运行:    

 `npm install`安装项目   
 
 `node --harmony server` 启动服务器，运行项目   
 
 终端显示共获取n条数据时，表示获取爬虫完毕，会看到项目生成data.json文件。
 
#模块说明    

[superagent](http://visionmedia.github.io/superagent/)客户端请求代理模块
[cheerio](https://www.npmjs.com/package/cheerio)为服务器特别定制的，快速、灵活、实施的jQuery核心实现.
使用es6的*async*异步获取数据
 
 
 
