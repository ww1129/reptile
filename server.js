
// // 'use strict'

const request = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs-extra')
const path = require('path')

let url = 'https://www.jianshu.com'

const fetchDatas = [];
const countPage = 10;

/**
    睡眠模拟函数
    @param {Number} numberMillis 毫秒
*/
function sleep(numberMillis){
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while(true){
        now = new Date();
        if(now.getTime() > exitTime){
            return ;
        }
    }
}


/**
    随机数，介于最大值和最小值之间
*/
function random(min,max){
    return min+Math.floor(Math.random()*(max-min));
}


/**
    抓取数据
*/
async function fetchData(){
    console.log('开始获取数据...'+new Date());
   for(var i = 1; i <= countPage ; i++){
        const res = await request.get(url).query({"page":i});
        console.log(i)
        try{
                const $ = cheerio.load(res.text,{
                    decodeEntities : false
                });
                const noteLists = $('.note-list').find('li');
                for(let i = 0; i < noteLists.length; i++){
                     fetchDatas.push({
                        auth : noteLists.eq(i).find('.nickname').text(),
                        title : noteLists.eq(i).find('.title').text(),
                        href : noteLists.eq(i).find('.title').attr('href')
                    })
                }
               await sleep(random(1000, 5000));
            }catch(err){
                console.log("第"+i+'页数据获取失败')
            }
   }
    console.log("一共获取了"+fetchDatas.length+"条数据" + new Date());
    fs.writeFileSync('data.json',JSON.stringify(fetchDatas))
}

fetchData();
