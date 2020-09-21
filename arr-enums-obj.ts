// const myself: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Ilya",
//     age: 19,
//     hobbies: ['Lazy on the sofa', 'programming', 'running'],
//     role: [2, 'sportsmen']
// };

// let hobbies: string[];
// hobbies = ['reading'];
//
// for (const hobby of hobbies) {
//     console.log(hobby);
// }
//
// myself.role.push('admin');

enum Role { ADMIN = 10, BILLIONAIRE }

const myself = {
    name: "Ilya",
    age: 19,
    hobbies: ['Lazy on the sofa', 'programming', 'running'],
    role: Role.ADMIN
}
console.log(myself.role);