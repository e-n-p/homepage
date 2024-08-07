import os
import sys
import json
from datetime import datetime

import wget
import xmltodict


TMP = "/var/www/homepage/tmp/"
OUTPUT = "/var/www/homepage/homepage-backend/dist/homepage/assets/output.json"

SUBSCRIPTION = {
    "yt": [
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCrTNhL_yO3tPTdQ5XgmmWjA",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCv_vLHiWVBh_FR9vbeuiY-A"
    ],
    "pod": [
        "https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/39e934d7-2ddc-4b3e-bc73-ae2b00156363/ab6037f4-9a9a-449b-915d-ae2b00156375/podcast.rss",
        "https://omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/E5F91208-CC7E-4726-A312-AE280140AD11/D64F756D-6D5E-4FAE-B24F-AE280140AD36/podcast.rss",
        "https://omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/A50AC151-73F4-4192-A26A-AE320005BA2D/DC746010-090C-490A-82A3-AE320005BA3B/podcast.rss"
    ]
}

def print_to_stdout(*a):
    print(*a, file=sys.stdout)

def remove_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)

def write_to_file(input):
    with open(OUTPUT, "a") as output:
        output.write(input)

def podcasts(data_dict, content):
    thing = data_dict['rss']['channel']['title']
    latest_ep = data_dict['rss']['channel']['item'][000]
    content[thing] = latest_ep['title']

def youtube(data_dict, content):
    thing = data_dict['feed']['title']
    latest_ep = data_dict['feed']['entry'][00]
    content[thing] = latest_ep['title']

def run():
    file_path = TMP + "rss.xml"
    remove_file(file_path)
    remove_file(OUTPUT)
    content = {}
    content['timestamp: '] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    for media_type, sub_list in SUBSCRIPTION.items():
        for sub in sub_list:
            try:
                wget.download(sub, file_path, bar=None)
                with open(file_path) as feed:
                    data_dict = xmltodict.parse(feed.read())

                if media_type == "yt":
                    youtube(data_dict, content)
                elif media_type == "pod":
                    podcasts(data_dict, content)
            except Exception as e:
                if not content.get('errors', None):
                    content['errors'] = []
                content['errors'].append(str(e))

            remove_file(file_path)
    write_to_file(json.dumps(content))

if __name__ == "__main__":
    print_to_stdout("notice-feed")
    run()
