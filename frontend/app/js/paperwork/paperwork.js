// @codekit-append "paperworkFilters.js", "paperworkRoutes.js", "paperworkNetService.js", "paperworkNotebooksService.js", "paperworkNotesService.js", "paperworkVersionsService.js", "paperworkMessageBoxService.js", "paperworkConstructorController.js", "paperworkDefaultController.js", "paperworkNotesAllController.js", "paperworkNotesShowController.js", "paperworkNotesEditController.js", "paperworkNotesListController.js", "paperworkSidebarNotebooksController.js", "paperworkSidebarNotesController.js", "paperworkVersionsController.js", "paperworkSearchController.js", "paperworkViewController.js", "paperworkFileUploadController.js", "paperworkMessageBoxController.js", "paperworkWaybackController.js", "paperworkFourOhFourController.js";
var paperworkApi = '/api/v1';
var paperworkModule = angular.module("paperworkNotes", ['ngRoute', 'ngSanitize', 'ngAnimate', 'angularFileUpload', 'ab-base64']);
