/*global QUnit*/

sap.ui.define([
	"project1/controller/OverView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OverView Controller");

	QUnit.test("I should test the OverView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
