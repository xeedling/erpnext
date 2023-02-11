// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Reservation", {
// 	refresh(frm) {

// 	},
    
    validate: function(frm) {
        frm.doc.reservation_list.forEach(element => {
            if(! /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(element.phone)) {
                msgprint('Invalid Phone Number, Add 10 digits number');
                validated = false;
            }
        });
    }
});