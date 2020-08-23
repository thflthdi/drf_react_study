const objectTest = () => {
  const grades = {
    list: { a: 33, b: 44, c: 55 },
    funct: function () {
      for (const name in this.list) {
        console.log('function: ', name);
      }
    },
  };
  grades['egoing'] = 10;
  grades.dongoo = 20;
  grades.list = { a: 33, b: 44, c: 55 };
  grades.funct();
  for (const key in grades) {
    console.log('key:', key, 'value:', grades[key]);
  }
};

const regTest = () => {
  const pattern = new RegExp('a');

  console.log(pattern.exec('bcsda'));
  //   console.log('2: ', pattern.test('sdafd'));
  //   console.log('3: ', 'abcd'.match(pattern));
  //   console.log('4: ', 'abcde'.replace(pattern, 'A'));

  const oi = /a/i;
  const og = /a/g;

  //   console.log('5: ', 'Abcd'.match(oi)); //대소문자 구분 안함
  //   console.log('6: ', 'abacda'.match(og)); //검색된 모든 결과 리턴

  const pattern2 = /(\w+)\s(\w+)/;
  const str = 'aa bb';

  console.log(str.replace(pattern2, '$2, $1')); //$는 ()단위의 패턴 그룹
  console.log(str.replace(/a/g, '*'));

  const pattern3 = /(\w)(\w)\s(\w)(\w)/;
  console.log(str.replace(pattern3, '$4$2 $3$1'));

  //   const urlPattern = /\b(?:https?):\/\/[\w~+=-_)(*&^%$#@!;:'",./?]*/gim;
  const urlPattern = /(?:https?)?:\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
  const content = 'asdf = ://naver.com';
  const result = content.replace(urlPattern, (url) => {
    return '네이버: ' + url;
  });
  console.log(result);
  const array = ['a', 'b'];
  array.input = 4;
  array.index = 5;
  console.log(array);
};

const funcTest = () => {
  // 함수에서 함수 리턴
  const cal = (mode) => {
    const funcs = {
      plus: (left, right) => {
        return left + right;
      },
      minus: (left, right) => {
        return left - right;
      },
    };
    return funcs[mode];
  };
  console.log(cal('plus')(1, 2));
  console.log(cal('minus')(3, 2));

  // 배열에서 함수 리턴
  const process = [
    (input) => {
      return input + 10;
    },
    (input) => {
      return input * input;
    },
    (input) => {
      return input - 1;
    },
  ];
  const input = 3;
  for (let i = 0; i < process.length; i++) {
    console.log(process[i](input));
  }
};

const closureTest = () => {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = (function (id) {
      return function () {
        return id;
      };
    })(i);
  }

  for (let index in arr) {
    console.log(arr[index]());
  }
};

const argTest = (...args) => {
  console.log(argTest.length);
  console.log(args.length);
  console.log(this);
};

function hello() {
  console.log(this);
}

//-----------------------------------------

// objectTest();
// regTest();
// funcTest();
// closureTest();
// argTest(1, 2, 3, 4);
// hello();
