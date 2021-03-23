const title = document.getElementsByTagName('h1')[0]
console.log(title)
 title.addEventListener('mouseover', function(){
      title.style.color='red'
      title.addEventListener('mouseout',function(){
        title.style.color='black' 
      })
 })




 const headingOne = document.querySelectorAll('h2')[0]
console.log(headingOne)
 headingOne.addEventListener('mouseover', function(){
      headingOne.style.color='red'
      headingOne.addEventListener('mouseout',function(){
        headingOne.style.color='black' 
      })
 })

 const headingTwo =  document.querySelectorAll('h2')[1]
 console.log(headingTwo)
  headingTwo.addEventListener('mouseover', function(){
       headingTwo.style.color='red'
       headingTwo.addEventListener('mouseout',function(){
         headingTwo.style.color='black' 
       })
  })
 

  
 const headingThree=  document.querySelectorAll('h2')[2]
 console.log(headingThree)
  headingThree.addEventListener('mouseover', function(){
       headingThree.style.color='red'
       headingThree.addEventListener('mouseout',function(){
         headingThree.style.color='black' 
       })
  })
 


  
 const headingFour =  document.querySelectorAll('h2')[3]
 console.log(headingFour)
  headingFour.addEventListener('mouseover', function(){
       headingFour.style.color='red'
       headingFour.addEventListener('mouseout',function(){
         headingFour.style.color='black' 
       })
  })
 




const btn= document.getElementsByTagName('button')[0]
const fireImg = document.querySelector('.firenation-image')
console.log(fireImg)
btn.addEventListener('click',function(){
    fireImg.classList.toggle('show')
})


// const btn= document.getElementsByTagName('button')[0]
// const waterImg = document.getElementsByClassName('water')[0].lastElementChild
// // console.log(waterImg)
// btn.addEventListener('click',function(){
//      waterImg.classList.toggle('show')
// })


// const fBtn= document.getElementsByTagName('button')[1]
// console.log(fBtn)
// const fireImg = document.getElementsByClassName('fire')[0].lastElementChild
// console.log(fireImg)
// // fBtn.addEventListener('click',function(){
// //      fireImg.classList.toggle('show')
// // })

const waterBtn= document.getElementsByTagName('button')[1]
const waterImg = document.querySelector('.waternation-image')
console.log(waterImg)
waterBtn.addEventListener('click',function(){
    waterImg.classList.toggle('show')
})


// const fBtn= document.getElementsByTagName('button')[1]
// const fireImg = document.querySelector('.fire-image')
// console.log(fireImg)
// fBtn.addEventListener('click',function(){
//     fireImg.classList.toggle('show')
// })


const airBtn= document.getElementsByTagName('button')[2]
const airImg = document.querySelector('.airnation-image')
console.log(airImg)
airBtn.addEventListener('click',function(){
    airImg.classList.toggle('show')
})

const earthBtn= document.getElementsByTagName('button')[3]
const earthImg = document.querySelector('.earthnation-image')
console.log(airImg)
earthBtn.addEventListener('click',function(){
    earthImg.classList.toggle('show')
})



