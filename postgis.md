```
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

/*----------------------------------------------------------------------------------------*/
/*Noktaya 30 km mesafedeki ilçeleri seçme*/
SELECT *
FROM tur_polbna_adm2
WHERE ST_DWithin(
        ST_Transform(geom,32637),
        ST_GeomFromText('POINT(488191 4179038.535)',32637),
        30000
      );

/*----------------------------------------------------------------------------------------*/
/*İlçelerinin noktaya km cinsinden mesafesi */
SELECT adm2_tr,
ST_Distance(
        ST_Transform(geom,32637),
        ST_GeomFromText('POINT(488191 4179038.535)',32637)     
      )/1000
FROM tur_polbna_adm2


/*----------------------------------------------------------------------------------------*/
/*Nokta ile kesişen ilçeyi veriyor. TRUE ile eşitlemek zorunda değiliz fakat ST_Intersect Boolean dönüyor. */
SELECT adm2_tr
FROM tur_polbna_adm2
WHERE ST_Intersects(geom, ST_GeomFromText('POINT(37 37)',4326))=TRUE


/*----------------------------------------------------------------------------------------*/
/*Kıbrıs parametresi ile ed50den wgs84 tablosu oluşturma */
CREATE TABLE kibris_wgs84
  AS 
(select inside,ST_Transform(ed50cyprus.geom, '+proj=longlat +ellps=intl +towgs84=-16.42119,-175.98464,-169.61745,-0.3769321,-1.9565521,3.4285257,-0.8430685 +no_defs'::text,4326) as geom from ed50cyprus)

/*----------------------------------------------------------------------------------------*/
/*Kıbris parametresi ile wgs84den ed50 tablosu oluşturma, ST Transform sonrasında set SRID gerekli */
CREATE TABLE kibris_ed50
  AS 
 (select inside,ST_SetSRID(ST_Transform(kibris_wgs84.geom, '+proj=longlat +ellps=intl +towgs84=-16.42119,-175.98464,-169.61745,-0.3769321,-1.9565521,3.4285257,-0.8430685 +no_defs'::text),4230) as geom from kibris_wgs84)
/*----------------------------------------------------------------------------------------*/
/* 50Binlik pafta index verisini pafta adlarını 100binlik olacak şekilde split edilip, grouplandırılarak birleştirilip 100binlik veri elde ediliyor. */
CREATE TABLE yuzbinlikpaftatablo AS
SELECT yuzbinlikadi, ST_Union(geom)
from
(select *,
    split_part(paftaadi::text, '-', 1) as yuzbinlikadi from pafta50000wgs84) as groupedyuzbinliktablo

GROUP BY yuzbinlikadi;
/*----------------------------------------------------------------------------------------*/
/*ST_SquareGrid ile 50 binlik pafta indexi tablosundan 25binlik pafta oluşturmayı sağlayan kod */
create table a_25000_test6 as
select *,
CASE
  WHEN (i%2=0) AND (j%2=1) THEN concat(paftaadi,'1')
  WHEN (i%2=1) AND (j%2=1) THEN concat(paftaadi,'2')
  WHEN (i%2=0) AND (j%2=0) THEN concat(paftaadi,'4')
  WHEN (i%2=1) AND (j%2=0) THEN concat(paftaadi,'3')
  END AS yirmibesbinpaftaadi
/*----------------------------------------------------------------------------------------*/
from (SELECT paftaadi,(ST_SquareGrid(0.25/2, geom)).*, geom as elligeom FROM pafta50000wgs84 ORDER BY i,j) as sub where ST_Within(ST_Centroid(geom),elligeom)
```
![Paftalar](https://user-images.githubusercontent.com/15700676/176743317-bb13d918-0ed6-4dd3-a0d6-99c230805e57.png)


Proj Strings
```
Kibris
'+proj=longlat +ellps=intl +towgs84=-16.42119,-175.98464,-169.61745,-0.3769321,-1.9565521,3.4285257,-0.8430685 +no_defs'
Deniz
+proj=latlong +ellps=intl +towgs84=-89.05,-87.03,-124.56,0,0,0,0
Kara
+proj=longlat +ellps=intl +towgs84=-84.8310,-103.9723,-127.4487,-0.17149,0,0.39951,1.0454 +no_defs'
```

