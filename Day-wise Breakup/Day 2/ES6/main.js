console.log("in main.js");

import Foo, {add, divide} from './one.js';
import bar from './two.js';

import * as two from './two.js';


function foo(){
    console.log("in main foo");
}

foo();

Foo();
bar();

add();
two.add();