import boto3
import json

def generate_json_file(bucket_name, folder_name):
    s3_client = boto3.client('s3')

    # List objects in the specified folder
    response = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=folder_name)

    objects = response['Contents'] if 'Contents' in response else []

    # Generate JSON content
    json_data = []
    for obj in objects:
        if obj['Key'] != folder_name:  # Exclude the folder itself
            url = f"https://{bucket_name}.s3.eu-west-1.amazonaws.com/{obj['Key']}"
            title = obj['Key'].split('/')[-1].split('.')[0]
            json_data.append({"url": url, "title": title})

    # Write JSON data to a file
    with open('./Imagesliderv2/src/slides-v2-output.json', 'w') as json_file:
        json.dump(json_data, json_file, indent=4)

# Specify the bucket and folder names
bucket_name = '00009999000088889999'
folder_name = 'ma-access'

# Call the function to generate the JSON file
generate_json_file(bucket_name, folder_name)
