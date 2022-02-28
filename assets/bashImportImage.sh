#!/bin/bash
rm ../src/theme/images.ts && touch ../src/theme/images.ts
for entry in images/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    echo $ADDR
    for ((idx = 0; idx < ${#ADDR[@]}; ++idx)); do # access each element of array

        if [ $idx -eq 1 ]; then
            str="${ADDR[1]}"
            echo import $(echo ${str} | tr '[a-z]' '[A-Z]') "from './../../assets/images/$(echo ${str}).png'" >>../src/theme/images.ts
        fi
    done

done
echo export const Images = { >> ../src/theme/images.ts

for entry in images/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    str="${ADDR[1]}"
    echo $(echo ${str} | tr '[a-z]' '[A-Z]'), >> ../src/theme/images.ts
done

echo } >> ../src/theme/images.ts
