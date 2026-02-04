# Copyright (c) 2025, eshetie@info.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RoomImages(Document):
    pass


@frappe.whitelist()
def get_room_images(room_id):
    return frappe.get_all(
        "Room Images",
        filters={"parent": room_id},
        fields=["image", "title"],
        ignore_permissions=True,  # Administrator can skip this if needed
    )
