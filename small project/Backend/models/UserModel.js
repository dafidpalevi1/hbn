import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    tanggalPasang: DataTypes.DATE,
    name: DataTypes.STRING,
    noHp: DataTypes.BIGINT,
    noId: DataTypes.BIGINT,
    paket: DataTypes.STRING,
    jumlahTagihan: DataTypes.BIGINT,
    jatuhTempoPembayaran: DataTypes.STRING,
    buktiPembayaran: DataTypes.STRING,
    hargaPembayaran: DataTypes.BIGINT,
    tanggalPembayaran: DataTypes.STRING,
    sisaPiutang: DataTypes.BIGINT,
    keterangan: DataTypes.TEXT
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();