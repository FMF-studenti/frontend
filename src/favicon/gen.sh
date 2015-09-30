apple=("57" "57@2x" "72" "72@2x" "76" "76@2x" "60@2x" "60@3x")
sizes=(57 114 72 144 76 152 120 180)

length=${#apple[@]}

mkdir out

for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png out/Icon_${apple[$i]}-tmp.png -a 28:28:572:572 -w ${sizes[$i]} favicon.svg
    inkscape --export-png out/Icon_${apple[$i]}-background.png -w ${sizes[$i]} background.svg
    composite -gravity center out/Icon_${apple[$i]}-tmp.png out/Icon_${apple[$i]}-background.png ../../public/assets/images/favicon/Icon_${apple[$i]}-precomposed.png
done

rm -r out
