let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Nesting arrays

// Đặt berries vào trong fruits
fruits.push(berries);

// Bây giờ chúng ta có thể truy cập 'blueberry' như sau
x = fruits[3][1];

// Tạo một biến mới và đặt cả hai mảng vào
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Nối các mảng
x = fruits.concat(berries);

// spread operator (...) - Nối với
x = [...fruits, ...berries];

// flat() - Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Các phương thức tĩnh của đối tượng Array

// isArray() - Kiểm tra xem có phải là mảng không
x = Array.isArray(fruits);

// from() - Tạo một mảng từ một giá trị giống như mảng
x = Array.from('12345'); // x = ['1', '2', '3', '4', '5']

// of() - Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // x = [1, 2, 3]

console.log(x);
