import { BankAccount, calculateTotalArea, Retangle2 } from './oop/index';
import { Circle2 } from './oop/index';

//Encapsulation
const agribankAcocunt = new BankAccount(2000);
agribankAcocunt.withdrawingMoney(1);


const circle = new Circle2(5);
const retangle = new Retangle2(4, 6);
console.log("Area circle: ", calculateTotalArea(circle));
console.log("Area retangle: ", calculateTotalArea(retangle));
