# build cover with latex
cd ../Cover
lualatex -shell-escape -synctex=1 -interaction=nonstopmode -file-line-error -recorder cover.tex

# build book with latex
cd Book
lualatex -shell-escape -synctex=1 -interaction=nonstopmode -file-line-error -recorder book.tex

# merge cover and book
cd ..
gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=book.pdf ./Cover/cover.pdf ./Book/book.pdf
