node generateData \
  | npx map '{...d, total: Number(d.price) * d.amount}' \
  | npx pick 'product,total' \
  | npx group 'd.product' \
  | npx map '{product:d[0].product, sum: d.reduce((r,{total}) => r + total, 0)}' \
  | npx pie -l product -v sum -n true \
  | npx vl2svg \
  > ventes.svg