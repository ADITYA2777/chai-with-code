
const itemClassList = document.getElementsByClassName('list-item')

// !itemClassList.forEach(li => {
// !!   console.log(li);
//! });

//Array

// Array.from(itemClassList)

const ConvertArr = Array.from(itemClassList)
ConvertArr.forEach((li)=>{
    li.style.color='orange';
})