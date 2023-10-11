let guest_list:string [] = ["Umer","Usman","Ali"];
console.log(`Hi! ${guest_list[0]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[1]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[2]} I would like to invite you to a dinner.`);

let deceased_guest = guest_list.pop();
// console.log(`${deceased_guest} can't join us tonight dinner.`);

console.log(guest_list);

let new_guest = guest_list.push("Bilal");
console.log(`${guest_list[2]} I would like to invite you to for a dinner.`);
console.log(guest_list);


guest_list.unshift("Hamza"); // Add new guest at the first position 
guest_list.splice(2,0,"Razi"); // Add new guest at the middle
guest_list.push("Raja"); // Add new guets at the end 
console.log(guest_list); 

console.log(`Hi! ${guest_list[0]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[1]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[2]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[3]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[4]} I would like to invite you to a dinner.`);
console.log(`Hi! ${guest_list[5]} I would like to invite you to a dinner.`);

