//域名
const HOST='localhost';
//访问端口
const PORT = '3000';
//用户信息表
const USER_INFO = [
    {'username':'小玉','pwd':'000'},
    {'username':'小山','pwd':'111'},
    {'username':'小炯','pwd':'222'},
    {'username':'小铭','pwd':'333'},
    {'username':'小泰','pwd':'444'}
];
//奖品表
const PRODUCTS =[
    {'product':'跑步机','price':'1099'},
    {'product':'体脂秤','price':'299'},
    {'product':'100元抵用券','price':'100'},
    {'product':'73食盒周装','price':'499'}
];

module.exports = {
    USER_INFO,
    HOST,
    PORT,
    PRODUCTS
}