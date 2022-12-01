import React from "react";
import './Fecha.css'

export const Fecha = () => {

    var fecha = new Date();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const ano = fecha.getFullYear()

    return (
<p className="fecha">
    {dia}.{mes}.{ano}
</p>
    )
}
