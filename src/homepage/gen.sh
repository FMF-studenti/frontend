inkscape --export-png ../../public/assets/images/homepage/forum.png -h 64 forum.svg
inkscape --export-png ../../public/assets/images/homepage/forum@2x.png -h 128 forum.svg

inkscape --export-png ../../public/assets/images/homepage/izjave.png -h 64 izjave.svg
inkscape --export-png ../../public/assets/images/homepage/izjave@2x.png -h 128 izjave.svg

inkscape --export-png ../../public/assets/images/homepage/povezave.png -h 64 povezave.svg
inkscape --export-png ../../public/assets/images/homepage/povezave@2x.png -h 128 povezave.svg

# inkscape --export-png ../../public/assets/images/homepage/predmeti.png -h 64 predmeti.svg
# inkscape --export-png ../../public/assets/images/homepage/predmeti@2x.png -h 128 predmeti.svg

inkscape --export-png ../../public/assets/images/homepage/notes.png -h 64 notes.svg
inkscape --export-png ../../public/assets/images/homepage/notes@2x.png -h 128 notes.svg

convert revija.xcf -background 'none' -flatten -alpha on  ../../public/assets/images/homepage/revija.png
convert revija@2x.xcf -background 'none' -flatten -alpha on ../../public/assets/images/homepage/revija@2x.png
