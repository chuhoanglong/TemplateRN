#!/bin/bash
# $1: path of file which wanted to import. EX: ../src/utils/icon.ts
rm ../src/theme/icons.ts && touch../src/theme/icons.ts
for entry in icons/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    echo $ADDR
    for ((idx = 0; idx < ${#ADDR[@]}; ++idx)); do # access each element of array

        if [ $idx -eq 1 ]; then
            str="${ADDR[1]}"
            echo import $(echo ${str} | tr '[a-z]' '[A-Z]') "from './../../assets/icons/$(echo ${str}).png'" >>../src/theme/icons.ts
        fi
    done
done
echo export const Icons = { >>../src/theme/icons.ts

for entry in icons/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    str="${ADDR[1]}"
    echo $(echo ${str} | tr '[a-z]' '[A-Z]'), >>../src/theme/icons.ts
done

echo } >>../src/theme/icons.ts
