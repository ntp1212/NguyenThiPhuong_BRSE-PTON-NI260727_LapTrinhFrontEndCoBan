
// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
//  Sau đó truy xuất các thuộc tính của đối tượng trên
let peopleInfor = [
    {
        id: 1,
        name: 'Phuong',
        age: '27',
        address: 'VN',
    },
    {
        id: 2,
        name: 'Hoa',
        age: '25',
        address: 'VN',
    }
]
let callPeople = ()=> {
    peopleInfor.forEach(i=>{
        console.log(i.name);
        console.log(i.age);
        console.log(i.address);
        ;
    })
};
callPeople();
// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
//  sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền).
//  Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất
//  các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”

// tao student
let student= {
    id: 1,
    name: 'Nguyen Van A',
    gender: 'nam',
    age: 20,
    mark: 8,
};

//tao newStudent
let newStudent= {
    id: 2,
    name: 'Nguyen Van B',
    gender: 'nam',
    age: 22,
    mark: 9,
};

// dua ca hai vao students
let students = [student,newStudent];

// truy xuat newstudent

console.log(students[1]);
// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất
//  và in ra toàn bộ thông tin của học sinh đó
let minMark = students[0].mark;
let flag = 0;
console.log(minMark);
for(i=0;i<students.length;i++) {
    let markI = students[i].mark;
    if(minMark> markI) {
        minMark = markI;
    }
}
console.log(minMark);
