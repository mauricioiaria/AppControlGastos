

//!Funcion para generar ID
export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
};

//!Funcion para fecha

export const formateaFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: "numeric",
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}
