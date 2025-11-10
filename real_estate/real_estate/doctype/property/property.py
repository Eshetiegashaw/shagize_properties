# Copyright (c) 2025, eshetie@info.com and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Property(Document):
    pass


# property_name
# address
# property_type
# total_floors
# total_units
# company
# owner contact (company contact)
# amenities (table) (link to Amenity doctype)
# status (Active, Inactive, Under Maintenance)
# description
# images (attach images)
