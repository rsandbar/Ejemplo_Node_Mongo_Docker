const mongoose = require('mongoose')

const SinadefSchema = new mongoose.Schema(
    {
        Id:{type:Number},
        TIPO_SEGURO:{type:String},
        SEXO:{type:String},
        EDAD:{type:Number},
        EDAD_RANGO:{type:String},
        TIEMPO_EDAD:{type:String},
        ESTADO_CIVIL:{type:String},
        NIVEL_INSTRUCCION:{type:String},
        COD_UBIGEO_DOMICILIO:{type:String},
        PAIS_DOMICILIO:{type:String},
        PROVINCIA_DOMICILIO:{type:String},
        DISTRITO_DOMICILIO:{type:String},
        FECHA:{type:Date},
        ANIO:{type:String},
        MES:{type:Number},
        ANIOMES:{type:String},
        MESNOMB:{type:String},
        TIPO_LUGAR:{type:String},
        INSTITUCION:{type:String},
        MUERTE_VIOLENTA:{type:String},
        NECROPSIA:{type:String},
        DEBIDO_A_CAUSA_A:{type:String},
        CAUSA_A_CIE_X:{type:String},
        DEBIDO_A_CAUSA_B:{type:String},
        CAUSA_B_CIE_X:{type:String},
        DEBIDO_A_CAUSA_C:{type:String},
        CAUSA_C_CIE_X:{type:String},
        DEBIDO_A_CAUSA_D:{type:String},
        CAUSA_D_CIE_X:{type:String},
        DEBIDO_A_CAUSA_E:{type:String},
        CAUSA_E_CIE_X:{type:String},
        DEBIDO_A_CAUSA_F:{type:String},
        CAUSA_F_CIE_X:{type:String}
    }
)

const Sinadef = new mongoose.model('sinadef', SinadefSchema)

module.exports = {Sinadef}