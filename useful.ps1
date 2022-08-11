
# CSV içerisinde bulunan source ve dest ile belirtilmiş pathlere taşıma

Import-Csv C:\Users\username\Desktop\Test\move_list.csv -delimiter ";" |`
ForEach-Object {
    $old = $_.source
    $new = $_.dest
    Move-Item -Path $old -Destination $new
}  
