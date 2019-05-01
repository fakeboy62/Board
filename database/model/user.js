import Sequelize from 'sequelize';

const user = {
    user_title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    user_contents:{
        type: Sequelize.STRING,
        allowNull:false
    }
}
export default user;