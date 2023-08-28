/* eslint-disable @typescript-eslint/camelcase */

const translations = {
    actions: {
        new: "Crear Nuevo",
        edit: "Actualizar",
        show: "Visualizar",
        delete: "Eliminar",
        bulkDelete: "Eliminar Todo",
        list: "Lista",
    },
    buttons: {
        login: "Iniciar Sesión",
        save: "Guardar",
        filter: "Filtrar",
        applyChanges: "Aplicar cambios",
        resetFilter: "Reestablecer",
        confirmRemovalMany: "Confirmar la eliminación del registro {{count}}",
        confirmRemovalMany_plural: "Confirmar la eliminación de los registros {{count}}",
        logout: "Cerrar Sesión",
        seeTheDocumentation: "Ver: <1>La documentación</1>",
        createFirstRecord: "Crear primer registro",
    },
    labels: {
        navigation: "Navegación",
        pages: "Paginas",
        selectedRecords: "Seleccionados ({{selected}})",
        filters: "Filtros",
        adminVersion: "Administrador: {{version}}",
        appVersion: "App: {{version}}",
        loginWelcome: "Bienvenidos a la platforma de Cristhian Pereira",
    },
    properties: {
        paisId: "Pais",
        usuarioId: "Usuario",
        departamentoId: "Departamento",
        ciudadId: "Ciudad",
        rolId: "Rol",
        membresiaId: "Membresía",
        membresiaItemId: "Caracteristica",
        regionId: "Region",
        generoId: "Genero",
        tipoDocumentoId: "Tipo Documento",
        createdAt: "Creado",
        updatedAt: "Actualizado",
        deletedAt: "Eliminado",
    },
    resources: {},
    messages: {
        loginWelcome: "Preparamos para ti accesos directos que te permitan encontrar rapidamente",
        successfullyBulkDeleted: "Registro {{count}} eliminado con éxito",
        successfullyBulkDeleted_plural: "Registros {{count}} eliminados con éxito",
        successfullyDeleted: "Registro eliminado con éxito",
        successfullyUpdated: "Registro actualizado con éxito",
        thereWereValidationErrors: "Hay errores de validación - échales un vistazo a continuación.",
        successfullyCreated: "Creó con éxito un nuevo registro",
        bulkDeleteError:
            "Se produjo un error al eliminar los registros. Consulte la consola para ver más información.",
        errorFetchingRecords:
            "Se produjo un error al obtener los registros. Consulte la consola para ver más información.",
        errorFetchingRecord:
            "Se produjo un error al obtener el registro. Consulte la consola para ver más información.",
        noRecordsSelected: "No ha seleccionado ningún registro",
        theseRecordsWillBeRemoved: "Se eliminará el siguiente registro",
        theseRecordsWillBeRemoved_plural: "Se eliminarán los siguientes registros",
        pickSomeFirstToRemove: "Para eliminar registros, primero debe seleccionarlos",
        error404Resource: "Recurso con ID {{resourceId}} proporcionado no se puede encontrar",
        error404Action:
            "Recurso con ID {{resourceId}} proporcionado no tiene una acción con el nombre: {{actionName}}",
        error404Record:
            "Recurso de la identificación dada: {{resourceId}} no tiene un registro con la identificación: {{recordId}}",
        seeConsoleForMore: "Consulte la consola de desarrollo para obtener más detalles...",
        noActionComponent: "Tienes que implementar el componente de acción para tu acción.",
        noRecordsInResource: "No hay registros en este recurso.",
        confirmDelete: "¿Realmente quieres eliminar este elemento?",
    },
};

module.exports = {
    language: "en",
    translations,
};
