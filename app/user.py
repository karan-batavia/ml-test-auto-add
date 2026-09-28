import requests

def save_user(email, first_name, phone_number):
    requests.post("https://api.segment.io/v1/identify", json={"email": email, "firstName": first_name, "phone": phone_number})
