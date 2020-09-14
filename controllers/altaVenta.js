const {response} = require('express');
const Venta = require('../models/Venta');


const altaVenta = async(req,res = response)=>{
    const nuevaVenta = new Venta(req.body);
    const ventaOk = await nuevaVenta.save()
    res.json({
        ok: true,
        item: ventaOk
    });
}

module.exports = {
    altaVenta
}