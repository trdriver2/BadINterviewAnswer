/*How much money could you have made yesterday 
if you spent all day trading google stocks?
1.Get historic stock prices from yesterday
2. This list may be an arryay with munutes after 
opening bell as indices. Value are price in USD of 
share of stock at that time

For example, if the stoc cost $500 at 10:30am:
'stockPrice[60] = 500'

Write an efficient function that takes the 
stock price data and returns the best profit
you could make from one purchase of one share 
yesterday.

You may not short. You cannot buy and sell in 
the same minute; at least one minute should 
pass between buying and selling.*/

//Starting off with a single stock

function binarySearch(array, check, l = 0, r = array.length - 1) {
  center = (l + r) / 2;
  if (l === r || check === array[center]) {
    return center;
  } else if (check > array[center]) {
    return binarySearch(array, check, center + 1, r);
  } else {
    return binarySearch(array, check, l, r - 1);
  }
}

function binaryInsert(array, check) {
  let copy = [...array];
  copy.splice(binarySearch(copy, check), 0, check);
  return copy;
}

function bestPrice(stock) {
  let buy = [0];
  buyPos = 1;
  let tempBuy = buy;
  tempPost = 0;
  let sell = [0];
  let answers = {};

  for (let i = 1; i < stock.length; i++) {
    if (stock[sell] < stock[i]) {
      sell = [i];
      buyPos = buy.length;
      answers = [[buy, sell]];
    } else if (stock[sell] === stock[i]) {
      sell.push(i);
      buyPos = buy.length;
    }
    if (tempBuy < i && stock[i] - stock[tempBuy] > stock[sell] - stock[buy]) {
      buy = tempBuy;
      sell = [i];
      buy;

      answers = [[buy, sell]];
    } else if (
      buy !== tempBuy &&
      tempBuy < i &&
      stock[i] - stock[tempBuy] === stock[sell] - stock[buy]
    ) {
      sell.push(sell)
      sell.push()
      answers.push([tempBuy, i]);
    }
    if (stock[i] < stock[buy]) {
      tempBuy = i;
    }
  }
  return answers;
}

let stocks = [8, 5, 12, 8, 6, 14];
//let test = [1, 2, 3, 4, 6, 7, 8];
console.log(bestPrice(stocks));

module.exports = { binarySearch, binaryInsert, bestPrice };
