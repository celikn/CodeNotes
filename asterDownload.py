

### ASTER Verisi indirme
username = 'xxxx'
password = 'xxxx'
import requests
import shutil
from requests.auth import HTTPDigestAuth


### BBOX içinde tanımlanmış alan içinde düşen raster verileri listeliyoruz.
req = requests.get('https://cmr.earthdata.nasa.gov/search/granules.json?short_name=ASTGTM&version=003&page_size=2000&pageNum=1&bounding_box=29,31,30,44',auth=HTTPDigestAuth(username, password)).json()['feed']['entry'] 
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



def main():
       
        parallelRun=3 

        
        if parallelRun == 0: ## No parallel run 
                ### BBOX ile elde ettiğimiz listeyi dönüyoruz.

            for urlItem in fileList:
                dowloadfile(urlItem)

        elif parallelRun == 1: ## parallel with multiprocessing, main function'in  if __name__ == '__main__' ile cagirilmasi gerekli

            import multiprocessing
            from multiprocessing import cpu_count
            with multiprocessing.Pool(cpu_count()) as pool:
                # call the function for each item in parallel
                pool.map(dowloadfile, fileList)

        elif parallelRun == 2: ## Using asyncio 
            import asyncio

            def background(f):
                def wrapped(*args, **kwargs):
                    return asyncio.get_event_loop().run_in_executor(None, f, *args, **kwargs)

                return wrapped

            @background
            def dowloadfileAsyncio(url):
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

            for urlItem in fileList:
                dowloadfileAsyncio(urlItem)

        elif parallelRun == 3: ## joblib Not: prefer theads opsiyonu eklenmemesi durumunda 
            ## TerminatedWorkerError hatası alınıyor. 
            from joblib import Parallel, delayed
            Parallel(n_jobs=2, prefer="threads")(delayed(dowloadfile)(urlItem) for urlItem in fileList)

        
        

if __name__ == '__main__':
    main()
