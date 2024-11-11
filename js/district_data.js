// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Acceder al contenedor donde se mostrará la tabla
    const tablaDiv = document.getElementById('elem-district-table');
    
    // Asegúrate de que `distritosBasura` esté disponible antes de usarlo
    if (typeof distritosBasura !== 'undefined' && Array.isArray(distritosBasura)) {
        let tablaHTML = '<table border="1"><tr><th>Distrito</th><th>Generación de Basura por Día</th></tr>';
        distritosBasura.forEach(distrito => {
            tablaHTML += `<tr><td>${distrito.distrito}</td><td>${distrito.basuraPorDia}</td></tr>`;
        });
        tablaHTML += '</table>';
        tablaDiv.innerHTML = tablaHTML;
    } else {
        tablaDiv.innerHTML = '<p>Error: Los datos de los distritos no están disponibles.</p>';
    }
});
