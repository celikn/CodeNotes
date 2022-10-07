

### ASTER Verisi indirme
username = 'xxxx'
password = 'xxxx'
import requests
import shutil
from requests.auth import HTTPDigestAuth


### BBOX içinde tanımlanmış alan içinde düşen raster verileri listeliyoruz.
req = requests.get('https://cmr.earthdata.nasa.gov/search/granules.json?short_name=ASTGTM&version=003&page_size=2000&pageNum=1&bounding_box=23,31,46,44',auth=HTTPDigestAuth(username, password)).json()['feed']['entry'] 
fileList = [g['links'][0]['href'] for g in req]
print (fileList)


from http import cookiejar
from urllib import request
from urllib.parse import urlencode

# Create a password manager to deal with the 401 response that is returned from
# Earthdata Login
password_manager = request.HTTPPasswordMgrWithDefaultRealm()
password_manager.add_password(None, "https://urs.earthdata.nasa.gov", username, password)
# Create a cookie jar for storing cookies. This is used to store and return
# the session cookie given to use by the data server (otherwise it will just
# keep sending us back to Earthdata Login to authenticate). Ideally, we
# should use a file based cookie jar to preserve cookies between runs. This
# will make it much more efficient.
cookie_jar = cookiejar.CookieJar()
# Install all the handlers.
opener = request.build_opener( request.HTTPBasicAuthHandler(password_manager), request.HTTPCookieProcessor(cookie_jar))
request.install_opener(opener)
# Create and submit the request. There are a wide range of exceptions that
# can be thrown here, including HTTPError and URLError. These should be
# caught and handled.


## Verilen url'deki dosyayı indirmemizi sağlayan fonksiyon 
def dowloadfile(url):
        myrequest = request.Request(url)
        response = request.urlopen(myrequest)

        # Check if status is OK
        if response.code != 200:
            raise ValueError

        response.begin()
        local_filename = url.split('/')[-1]
        with open(local_filename, 'wb') as f:
                while True:
                    chunk = response.read()
                    if chunk: 
                       f.write(chunk)
                    else:
                       break
        return local_filename


### BBOX ile elde ettiğimiz listeyi dönüyoruz.
for urlItem in fileList:
    dowloadfile(urlItem)

