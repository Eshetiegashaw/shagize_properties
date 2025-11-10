# Copyright (c) 2025, eshetie@info.com and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Rooms(Document):
    pass


# room_name
# floor (link to Floors doctype)
# room_number
# room_type (Single, Double, Suite, etc. or Studio, 1BHK, 2BHK, Office, Shop) Link to Room Type doctype

# size (in sqft or sqm)
# monthly_rent
# security_deposit
# status (Available, Occupied, Reserved, Under Maintenance)
# furnishing (Furnished, Semi-Furnished, Unfurnished)
# availability_start_date
# agent (link to Agent doctype)
# description
# images (attach images): lists of images of the room
