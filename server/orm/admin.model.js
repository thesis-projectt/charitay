// Define and export the sequelize model that represents the table admin.
module.exports=(sequelize,DataTypes)=>{
    const admin= sequelize.define("admin",{
       
        name:{
            type:DataTypes.STRING
        },
        
        password:{
            type:DataTypes.STRING
        },
    })
    return admin
}