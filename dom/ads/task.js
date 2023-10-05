// const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

const rotators = Array.from(document.querySelectorAll('.rotator'));
// console.log(rotators);

rotators.forEach((element) => {
  // console.log(Array.from(element.children));
  setInterval(() => changeCase(Array.from(element.children)) , 1000);
})

let index = null;

function changeCase(array) {
  array.forEach((element, ind) => {
    if (element.classList.contains('rotator__case_active')) {
      index = ind;
    }
    return index;
  })

  if (index === array.length - 1) {
    nexIndex = 0;
  } else {
    nexIndex = index +1;
  }

  array[index].classList.remove('rotator__case_active');
  array[nexIndex].classList.add('rotator__case_active');
}

// setInterval(changeCase(rotatorCase) , 500);

// changeCase(rotatorCase);
// changeCase(rotatorCase);
// changeCase(rotatorCase);
// setInterval(() => changeCase(rotatorCase) , 1000);