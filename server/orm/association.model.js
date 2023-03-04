// Define and export the sequelize model that represents the table association.


module.exports=(sequelize,DataTypes)=>{
    const Association=sequelize.define("association",{
        
  
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
        
        email:{
            type:DataTypes.STRING,
            allowNull : false,
            unique :true,
        },


        password:{
            type:DataTypes.STRING,
            allowNull : false,
            unique:true

        },

        description:{
            type:DataTypes.STRING,
            allowNull : false,
        },


        image:{
            type:DataTypes.STRING,
            allowNull : true,
        },


        verify: {
             type: DataTypes.BOOLEAN,
             defaultValue: false,
             allowNull : true,
             },
             
        check:{
            type:DataTypes.STRING,
            defaultValue : false,
            allowNull:true,
        }
    })
    return Association
}