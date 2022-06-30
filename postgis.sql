/*Granting access to user*/

grant all privileges on database databasename to username;


/*Change user password*/
ALTER USER username PASSWORD 'password';


/*Raster Operations */
/*https://postgis.net/docs/RT_ST_FromGDALRaster.html*/

/*Bytea to raster - originalimage is bytea object*/
select ST_FromGDALRaster(originalimage) from rasterlayers
select ST_MetaData(ST_FromGDALRaster(originalimage)) from rasterlayers
select ST_SRID(ST_FromGDALRaster(originalimage)),ST_NumBands(ST_FromGDALRaster(originalimage)), ST_Height(ST_FromGDALRaster(originalimage)),ST_Width(ST_FromGDALRaster(originalimage)) from rasterlayers
select ST_Summary(ST_FromGDALRaster(originalimage)) from rasterlayers
select ST_MemSize(ST_FromGDALRaster(originalimage)) from rasterlayers
select ST_ColorMap(ST_FromGDALRaster(originalimage)) from rasterlayers
