


import os 
import segyio
import glob
import pandas as pd
import shutil

def prepareSegyDoc(dirSegys):
    segyFileList=[]
    listFiles = os.listdir(dirSegys)
    for file in listFiles :
            path = dirSegys + "/" + file
            segyFileList.append(path)
    return segyFileList


def copyFileWithFolders(fullfilePath,basePath):
        absolutePath= fullfilePath.split(basePath)[1] ## Gelen absolute path
        dstfolder =os.path.join("Data",os.path.dirname(absolutePath))  ## Data içerisine folder açacağı dosyaların pathi 
        fileName=os.path.basename(fullfilePath)
        newFileName=fileName.split(".segy.")[0]+"_"+fileName.split(".segy.")[1].replace(".","_")+'.segy'
        destinationFilePath=os.path.join(dstfolder,newFileName)
        if not os.path.exists(dstfolder):
            os.makedirs(dstfolder)
        shutil.copy(fullfilePath,destinationFilePath)




def get_files(mainFolder):
    ##lista=pd.read_csv('listOfFiles.txt', sep=",", header=None)[0].tolist()
    lista=pd.read_excel('PetrobankSeismicList.xls',  sheet_name=0)
    listb = list(lista['segyfilepa2'])

    pathOfAllFiles =[os.path.join(mainFolder,file) for file in listb]
    return [pathOfAllFiles,lista]



def readSegyEpstic(filePath):
    

    with segyio.open(filePath,  ignore_geometry = True) as f:
        segyFileTextHeader = str(f.text).upper()
        if any(s in segyFileTextHeader for s in ('WGS 84', 'WGS84', 'WGS-84','WGS_84', 'WGS 1984','WGS1984', 'WGS-1984', 'WGS_1984')):
            return [filePath,"WGS84"]
        elif any(s in segyFileTextHeader for s in ('ED 50','ED50', 'ED-50','ED_50', 'ED 1950','ED1950', 'ED-1950','ED_1950','ED50_KRD')):
            return [filePath,"ED50"]
        # elif any(s in segyFileTextHeader for s in ('CDPX','CDPY','CDP-X','CDP_X','CDP-Y','CDP_Y')):
        #     return filePath
        else:
            return [filePath,None]


        
def main():
        folderPath="U:/retrieved_data/"
        segyFileList,pandaList= get_files(folderPath)
        listWGS84=[]
        for idx, segyFile in enumerate(segyFileList):
            try: 
                returnFilePath,coordType=readSegyEpstic(segyFile)
                if coordType!=None:
                    listWGS84.append(returnFilePath)
                    print (returnFilePath)
                    pandaList.at[idx, 'Datum']=coordType

                    copyFileWithFolders(segyFile,folderPath)

            except: 
                  print ('cannot open ',segyFile)
            
        pandaList.to_excel (r'export_dataframe.xlsx', index = False, header=True)

def main2():
        folderPath="U:/retrieved_data/"
        segyFileList,pandaList= get_files(folderPath)
        newDf = pd.DataFrame(columns=['segyFilePaths', "Datum"])
        segyFileList=list(set(segyFileList))
        for idx, segyFile in enumerate(segyFileList):
            try: 
                segyFileAbsPath = os.path.dirname(segyFile)
                print (segyFileAbsPath)
                filesInSameDir= prepareSegyDoc(segyFileAbsPath)
                for id,fileItem in enumerate(filesInSameDir):
                        returnFilePath,coordType=readSegyEpstic(fileItem)

                        if coordType!=None:
                            dflen=len(newDf.index)
                            print(returnFilePath,coordType)
                            print (len(newDf.index))
                            
                            newDf.at[dflen, 'Datum']=coordType
                            newDf.at[dflen, 'segyFilePaths']=returnFilePath
                            copyFileWithFolders(returnFilePath,folderPath)

            except: 
                  print ('cannot open ',segyFile)
            
        newDf.to_excel (r'newDf.xlsx', index = False, header=True)



if __name__ == '__main__':
    main2()

