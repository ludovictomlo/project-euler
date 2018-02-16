// < 1000
// % 3 || 5
// sum of the elements

function sumAllEven(number) {
    let number_of_pairs = number / 2;
    let pair_total = 1 + number;
    let final_number = number_of_pairs * pair_total;
    console.log('2.SumEven: ', final_number);

    return final_number;
}

function sumAllOdd(number) {
    let number_of_pairs = (number - 1) / 2;
    let pair_total = 1 + number;
    let middle = (number + 1) / 2;
    let final_number = (number_of_pairs * pair_total) + middle;
    console.log('2.SumOdd: ', final_number);

    return final_number;
}

let sum_of_all = (3*sumAllOdd(999/3)) + (5*sumAllOdd(995/5)) - (15*sumAllOdd(990/15));
console.log('sum_final: ', sum_of_all);