var express = require('express');
var Sequelize = require('sequelize');
var sequelizeApi = require('./mysql.js');



var Users = sequelizeApi.define('user_info_test', {
    name: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    sex: {
        type: Sequelize.STRING(3)
    },
    come_days: {
        type: Sequelize.INTEGER,
    },
    habit: {
        type: Sequelize.STRING
    },
    study_hours: {
        type: Sequelize.INTEGER
    }

})
//其他的表可以依次定义

Users.sync() //创建表
    .then(() => {
        // Users.update({
        //     name: 'xiaoyu',
        //     habit:'gitar'
        // }, {
        //     where: {
        //         name: 'xy'
        //     }
        // }).then(res => {
        //     console.log('updata----after', res);
        // })

    })

function findMsgFromLoginByNameAndPwd(resString) {
    return new Promise(function (resolve, reject) {
        Users.findAll({
                where: {
                    name: resString.name
                }
            })
            .then(res => {
                console.log('res--from-findAll--', res)
                //有数据且密码正确
                if (res[0]) {
                    if (resString.pwd == res[0].dataValues.password) {
                        res = {
                            code:0,
                            msg:'登录成功',
                            data:res[0].dataValues
                        }
                        console.log('res----', res)
                    } else {
                        res = {
                            code: 1,
                            msg: '密码错误'
                        }
                    }
                } else {
                    res = {
                        code: -1,
                        msg: '请先注册'
                    }
                }
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}


function findMsgByName(resString) {
    console.log('findMsgByName:    ', resString);
    return new Promise(function (resolve, reject) {
        Users.findAll({
                where: {
                    name: resString.name
                }
            })
            .then(res => {
                if (res[0].dataValues) {
                    console.log('findMsgByName  res     ', res);
                    res = res[0].dataValues
                } else {
                    res = {
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

function addUserToDatabase(resString) {
    return new Promise(function (resolve, reject) {
        Users.create({
            name: resString.name,
            password: resString.pwd,
            sex: '--',
            come_days: 1,
            habit: '--',
            study_hours: 0
        }).then(res => {
            console.log('this is addUserToDatabase -res--', res);
            if (res.dataValues) {
                res = {
                    code: 0,
                    msg: '添加成功',
                    data: res.dataValues
                }
            } else {
                res = {
                    code: 1,
                    msg: '添加失败'
                }
            }
            console.log('resolve--', res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}


function upDataToDatabase(resString, name) {
    console.log('orign updatas are -------------  ', resString.name, name);
    return new Promise(function (resolve, reject) {
        if (!resString.name) {
            resString.name = name;
            console.log('last updatas are -------------  ', resString);
        }
        Users.update(
            resString, {
                where: {
                    name: name
                }
            }).then(() => {
            Users.findAll({
                where: {
                    name: resString.name
                }
            }).then(res => {
                if (res[0].dataValues) {
                    res = {
                        code: 0,
                        msg: '修改成功',
                        data: res[0].dataValues
                    }
                } else {
                    res = {
                        code: 1,
                        msg: '修改失败'
                    }
                }
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })

    })
}


module.exports = {
    Users,
    findMsgFromLoginByNameAndPwd,
    addUserToDatabase,
    findMsgByName,
    upDataToDatabase
}