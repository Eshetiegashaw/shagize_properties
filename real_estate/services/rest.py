import frappe


@frappe.whitelist(allow_guest=True)
def get_company_info():
    company = frappe.get_all("Company", fields=["name"], ignore_permissions=True)
    return company[0].name if company else ""
