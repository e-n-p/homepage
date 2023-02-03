import os
import re
import sys
import json
from datetime import datetime

import wget
import xmltodict


TMP = "/var/www/homepage/tmp/"
OUTPUT = "/var/www/homepage/homepage/src/assets/output.json"

SUBSCRIPTION = {
    "yt": [
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCrTNhL_yO3tPTdQ5XgmmWjA",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCv_vLHiWVBh_FR9vbeuiY-A"
    ],
    "pod": [
        "https://feeds.megaphone.fm/behindthebastards/",
        "https://feeds.megaphone.fm/dailyzeitgeist/",
        "https://feeds.megaphone.fm/thebechdelcast/",
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
    content['timestamp: '] = datetime.now().strftime("%m/%d/%Y %H:%M:%S")

    for media_type, sub_list in SUBSCRIPTION.items():
        for sub in sub_list:
            wget.download(sub, file_path, bar=None)
            with open(file_path) as feed:
                data_dict = xmltodict.parse(feed.read())

            if media_type == "yt":
                youtube(data_dict, content)
            elif media_type == "pod":
                podcasts(data_dict, content)

            remove_file(file_path)
    write_to_file(json.dumps(content))

if __name__ == "__main__":
    print_to_stdout("notice-feed")
    run()
