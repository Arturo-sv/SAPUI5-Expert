sap.ui.define([
    "sap/ui/core/UIComponent",
    "Alfa/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

], /**
    * @param {typeof sap.ui.core.UIController} UIComponent
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
    function (UIComponent, Models, ResourceModel, HelloDialog) {


        return UIComponent.extend("Alfa.SAPUI5.Component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName": "Alfa.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"

                // }
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(Models.createRecipient());

                var i18nModel = new ResourceModel({ bundleName: "Alfa.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());

            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }
        });
    });