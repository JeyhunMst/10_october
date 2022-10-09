function sortFunc(array,func){
    for (let i = 0; i < array.length-1; i++) {
        let  minIndex=i;
        for (let j = i+1; j < array.length; j++) {
            if (array[minIndex].firstName[0]>array[j].firstName[0]) {
                minIndex=j;
            } 
        }
        let temp=array[minIndex];
        array[minIndex]=array[i];
        array[i]=temp;
    }
    func(array);
}
const personElnur = {
    firstName: "Zuleyxka",
    lastName: "Azizova",
    salary: 150,
  };
  const personIbrahim = {
    firstName: "Adam",
    lastName: "Aliyev",
    salary: 5000,
  };
  const personJeyhun = {
    firstName: "Jeyhun",
    lastName: "Mustafayev",
    salary: 5000,
  };
  const personMurad = {
    firstName: "Murad",
    lastName: "Aliyev",
    salary: 5000,
  };
const arr=[personElnur,personIbrahim,personMurad,personJeyhun];

sortFunc(arr,(array)=>{console.log(array);})
