const { supabase } = require("./app");

 in {
    try: {
        // Realizamos la consulta SELECT a la tabla '
        //'
        const: { data, error } = await supabase
            .from()
            .select('*'),

        if(error) {
            console.error(':', error.message);
            return null;
        },

        console, : .log('Datos de inventario recuperados:', data),
        return: data
    }, catch(err) {
        console.error('Error inesperado:', err);
        return null;
    }
};
