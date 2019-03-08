var express = require('express');
var Sequelize = require('sequelize');
var sequelizeApi = require('./mysql.js');

var Classes = sequelizeApi.define('class_info', {
    class_id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        // autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(50),
    },
    price: {
        type: Sequelize.STRING(30),
    },
    img_url: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    // 类别
    category: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    //级别
    grade: {
        type: Sequelize.STRING(26),
        allowNull: false
    },
    describe: {
        type: Sequelize.STRING
    }
})

Classes.sync()
    .then(() => {
        // Classes.create({
        //     class_id:12,
        //     title:'架子鼓嘀嘀嘀',
        //     price:'免费',
        //     grade:'入门',
        //     img_url:'http://localhost:3000/imgs/s_jiazigu.jpg',
        //     category:'架子鼓',
        //     describe:'数据的啦啦队可就是发快递的萨芬道路建设罚款' 
        // })
        // console.log('课程表创建成功')
        // Classes.update({
        //     img_url:'http://localhost:3000/imgs/s_saks.jpg',
        // }, {
        //     where: {
        //         class_id:3
        //     }
        // })
    });

function findClassInfoByCategory(resString) {
    console.log('res--from--search- resString-', resString)
    return new Promise(function (resolve, reject) {
        Classes.findAll({
                where: {
                    category: resString.category
                }
            })
            .then(res => {
                console.log('res--from--search-', res)
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}


function findAllClassInfo(resString) {
    return new Promise(function (resolve, reject) {
        Classes.findAll({})
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}

function findClassByClassId(resString) {
    console.log('res--from--search- resString-', resString)
    return new Promise(function (resolve, reject) {
        Users.findAll({
                where: {
                    calss_id: resString.class_id
                }
            })
            .then(res => {
                console.log('res--from--search-', res)
                if (res[0]) {
                    res = {
                        code: 0,
                        msg: '成功',
                        data: res[0].dataValues
                    }
                } else {
                    res = {
                        code: 1,
                        msg: '沒有本信息'
                    }
                }
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}

module.exports = {
    Classes,
    findClassByClassId,
    findClassInfoByCategory,
    findAllClassInfo
}