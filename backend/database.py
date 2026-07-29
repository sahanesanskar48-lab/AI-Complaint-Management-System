import mysql.connector


def get_connection():

    connection = mysql.connector.connect(

        host="localhost",

        user="root",

        password="sanskar@2004",      # <-- Put your MySQL password here

        database="aivoa_complaint_system"

    )

    return connection


def save_complaint(data):

    connection = get_connection()

    cursor = connection.cursor()

    query = """
    INSERT INTO complaints
    (
        complaint_source,
        customer_name,
        product_name,
        batch_number,
        manufacturing_date,
        expiry_date,
        description,
        risk_level,
        summary
    )
    VALUES
    (%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """

    values = (

        data["complaint_source"],

        data["customer_name"],

        data["product_name"],

        data["batch_number"],

        data["manufacturing_date"],

        data["expiry_date"],

        data["description"],

        data["risk_level"],

        data["summary"]

    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()

    connection.close()