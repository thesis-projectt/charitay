// Define and export the sequelize model that represents the table association.
module.exports=(sequelize,DataTypes)=>{
    const association=sequelize.define("association",{
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        password:{type:DataTypes.STRING},
        description:{type:DataTypes.STRING},
        image:{type:DataTypes.STRING},
        verify: { type: DataTypes.BOOLEAN, defaultValue: false },
        check:{type:DataTypes.STRING}
    })
    return association
}