/* eslint-disable @typescript-eslint/camelcase */

const translations = {
    actions: {
        new: "Add",
        edit: "Update",
        show: "View",
        delete: "Delere",
        bulkDelete: "Delete All",
        list: "List",
    },
    buttons: {
        login: "Sign In",
        save: "Save",
        filter: "Filter",
        applyChanges: "Apply",
        resetFilter: "Reset",
        confirmRemovalMany: "Confirm record deletion {{count}}",
        confirmRemovalMany_plural: "Confirm deletion of records {{count}}",
        logout: "Close Session",
        seeTheDocumentation: "Show: <1>The documentation</1>",
        createFirstRecord: "Add first record",
    },
    labels: {
        navigation: "Navigation",
        pages: "Pages",
        selectedRecords: "Selected ({{selected}})",
        filters: "Filters",
        adminVersion: "Administrator: {{version}}",
        appVersion: "App: {{version}}",
        loginWelcome: "Welcome to the Cristhian Pereira Platform",
    },
    properties: {
        paisId: "Country",
        usuarioId: "User",
        rolId: "Rol",
        generoId: "Gender",
        tipoDocumentoId: "Type Document",
        createdAt: "Created",
        updatedAt: "Updated",
        deletedAt: "Deleted",
    },
    resources: {},
    messages: {
        loginWelcome: "We prepare for you shortcuts that allow you to quickly find",
        successfullyBulkDeleted: "Record {{count}} deleted successfully",
        successfullyBulkDeleted_plural: "{{count}} records successfully deleted",
        successfullyDeleted: "Record deleted successfully",
        successfullyUpdated: "Record updated successfully",
        thereWereValidationErrors: "There are validation errors - check them out below.",
        successfullyCreated: "Successfully created a new record",
        bulkDeleteError:
            "An error occurred while deleting the records. Check the console for more information.",
        errorFetchingRecords:
            "An error occurred while getting the logs. Check the console for more information.",
        errorFetchingRecord:
            "An error occurred while getting the record. Check the console for more information.",
        noRecordsSelected: "You have not selected any record",
        theseRecordsWillBeRemoved: "The following record will be deleted",
        theseRecordsWillBeRemoved_plural: "The following records will be deleted",
        pickSomeFirstToRemove: "To delete records, you must first select them",
        error404Resource: "Resource with id {{resourceId}} provided cannot be found",
        error404Action:
            "Resource with ID {{resourceId}} provided does not have an action with name: {{actionName}}",
        error404Record: "Resource of given id: {{resourceId}} does not have a record with id: {{recordId}}",
        seeConsoleForMore: "See the developer console for more details...",
        noActionComponent: "You have to implement the action component for your action.",
        noRecordsInResource: "There are no records on this resource.",
        confirmDelete: "Do you really want to delete this item?",
    },
};

module.exports = {
    language: "en",
    translations,
};
