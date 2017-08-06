#-*- coding: utf-8 -*-
import requests
import urllib.request
from bs4 import BeautifulSoup
import json, re
import sys

cardlinks = []
imgnames = []
imgurls = []
goldimgurls = []
fulldata = {}

category = [['ability', 4], ['minion', 9], ['weapon', 1], ['hero', 1]]

def outerSpider(max_pages,url):
	count = 0
	page = 1
	while page <= max_pages:
		#crawling
		nurl = url + str(page)
		print(nurl)
		source_code = requests.get(nurl)
		soup = BeautifulSoup(source_code.text, 'lxml')
		for link in soup.find_all('div','card-image-item'):
			cardurl = 'http://www.hearthpwn.com' + link.a.get('href')
			imgname = re.sub('([0-9]+-)','',link.a.get('href'))[7:]
			imgnames.append(imgname)
			cardlinks.append([cardurl,imgname])
			print(cardurl)
			count += 1
		page += 1
	print(count, ' card urls crawled')

def innerSpider(link, imgname):
	source_code = requests.get(link)
	soup = BeautifulSoup(source_code.text, 'lxml')
	header = soup.find_all('header', limit=2)[1]
	cardname = header.h2.contents[0]
	cardsection = soup.find('section', 'u-typography-format')
	imgurl = cardsection.find('img','hscard-static').get('src')
	goldimgurl = cardsection.video.get('data-gifurl')
	imgurls.append(imgurl)
	goldimgurls.append(goldimgurl)
	fulldata[cardname] = imgname
	imageDownloader(imgurl, imgname + '.png')
	imageDownloader(goldimgurl, imgname + '-gold.gif')
	return cardname

def imageDownloader(link, filename):
	filename = 'images/' + filename
	response = urllib.request.urlopen(link)
	with open(filename, 'wb') as f:
		f.write(response.read())

count = 0
for item in category:
	url = 'http://www.hearthpwn.com/cards/' + item[0] + '?display=3&filter-premium=1&page='
	count += 1
	print('crawling',item[0], 'card links...[', count, '/', len(category), ']')
	outerSpider(item[1], url)
count = 0
for link in cardlinks:
	cardname = innerSpider(link[0],link[1])
	count += 1
	progress = str(count) + ' of ' + str(len(cardlinks)) + ' crawled,\t total ' + str((count // len(cardlinks)) * 100) + '%...'
	print(progress, end='\r')

with open('hsdata.json', 'w') as f:
	json.dump(fulldata, f, ensure_ascii=False)