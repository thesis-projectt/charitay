// Define and export the sequelize model that represents the table disable.

module.exports=(sequelize,DataTypes)=>{
const disable=sequelize.define("disable",{
   name:{type:DataTypes.STRING},
   email:{type:DataTypes.STRING},
   password:{type:DataTypes.STRING},
   image:{type:DataTypes.STRING},
   langitude:{type:DataTypes.DOUBLE},
   latitude:{type:DataTypes.DOUBLE},
   verify: { type: DataTypes.BOOLEAN, defaultValue: false },
   phoneNumber:{type:DataTypes.INTEGER},
},{timestamps:true})
return disable
}