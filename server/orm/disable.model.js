// Define and export the sequelize model that represents the table disable.

module.exports=(sequelize,DataTypes)=>{
const disable=sequelize.define("disable",{
   id : {
     type:DataTypes.INTEGER,
     autoIncrement:true,
     primaryKey : true,
   },
   name:{
      type:DataTypes.STRING,
      allowNull : false
   },
   email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
   },
   password:{

      type:DataTypes.STRING,
      allowNull : false,
      unique : true
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
      allowNull: false,
      unique : true 
     },
},{timestamps:true})
return disable
}