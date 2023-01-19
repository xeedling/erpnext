// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Reservation", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Reservation List", {
// 	refresh(frm) {

// 	},

    validate: function(frm) {
        if(! /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(frm.doc.phone)) {
            msgprint('Invalid Phone Number, Add 10 digits number');
            validated = false;
        }
    },

    // table: function(frm) {
    //   set_field_options("no_of_seats", frm.table.no_of_seats)
    // },
        
});