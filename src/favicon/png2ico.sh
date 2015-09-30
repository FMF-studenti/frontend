mkdir out

inkscape --export-png out/16.png -a 28:28:572:572 -w 16 favicon-small.svg
inkscape --export-png out/32.png -a 28:28:572:572 -w 32 favicon-small.svg
inkscape --export-png out/48.png -a 28:28:572:572 -w 48 favicon-small.svg

png2ico ../../public/favicon.ico out/16.png out/32.png out/48.png

inkscape --export-png ../../public/assets/images/favicon/64.png -a 28:28:572:572 -w 64 favicon-small.svg
inkscape --export-png ../../public/assets/images/favicon/192.png -a 28:28:572:572 -w 192 favicon-small.svg

rm -r out
