// Define and export the sequelize model that represents the table disable.

module.exports=(sequelize,DataTypes)=>{
const Disable=sequelize.define("disable",{
   id : {
     type:DataTypes.STRING,
     primaryKey : true,
   },
   name:{
      type:DataTypes.STRING,
      allowNull : true
   },
   email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
   },

   
   image:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
     },
   longitude:{
      type:DataTypes.DOUBLE
   },
   latitude:{
      type:DataTypes.DOUBLE
   },
   verify: {
       type: DataTypes.BOOLEAN,
        defaultValue: false 
      },
   phoneNumber:{
      type:DataTypes.INTEGER,
      allowNull: true,
      unique : true 
     },
},{timestamps:true})
return Disable
}