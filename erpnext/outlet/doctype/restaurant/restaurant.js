// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Restaurant", {
// 	refresh(frm) {

// 	},

    validate: function(frm) {
        if(! /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(frm.doc.phone)) {
            msgprint('Invalid Phone Number, Add 10 digits number');
            validated = false;
        }
    }
});
