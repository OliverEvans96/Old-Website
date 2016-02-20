#!/bin/bash
#tosvg.sh
#Convert all pdfs in . to svg

for f in *.pdf
do
	new="${f%pdf}svg"
	pdf2svg $f $new
	echo $new
done
