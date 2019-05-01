import Sequelize from "sequelize";
import model from './model';

const sequelize = new Sequelize('board','root','1234',{
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});
sequelize.authenticate()

    .then(()=>{
        console.log("DB 연결됨");
    }).catch((err)=>{
        if(err){
            console.log(err);
            console.log("DB 연결 안됨");
        }
    });
sequelize.define('user',model.user);
sequelize.sync({force:false});

export default sequelize;