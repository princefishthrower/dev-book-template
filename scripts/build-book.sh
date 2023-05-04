# build book with latex
cd Book
pdflatex --interaction=batchmode book.tex

# build cover with latex
cd ../Cover
pdflatex --interaction=batchmode cover.tex

# merge cover and book
cd ..
gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=book.pdf ./Cover/cover.pdf ./Book/book.pdf
