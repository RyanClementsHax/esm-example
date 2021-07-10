import './test.js'
import { name } from './test2.js'
import TestThree, { name as newName } from './test3.js'

TestThree()

console.log("hello world!", name, newName)