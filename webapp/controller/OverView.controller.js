sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/base/Event"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.OverView", {
            onInit: function () {

            },
            onClickHelloButton: function () {
                new MessageToast.show("Onur")
                // alert("asdasdasd")
            },

            onChangeExpenseType: function (oEvent) {
                debugger;
                var sSelectedKey = this.byId("selectExpenseType").getSelectedKey();
                if (sSelectedKey === "SelectKeyAcc") {
                    this.byId("selectFoodType").setVisible(false);
                    this.byId("selectTransType").setVisible(false);
                }
            }
        });
    });
