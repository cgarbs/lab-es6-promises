// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const steakPromise = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const steakImg = document.createElement('img');
                steakImg.src = './public/images/steak.jpg';
                document.getElementById('table').appendChild(steakImg);
              });
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`
const mashPotatoesPromise = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const mashedPotatoes = document.createElement('img');
          mashedPotatoes.src = "./public/images/mashPotatoes.jpg";
          document.getElementById("table").appendChild(mashedPotatoes);
        });
      });
    });
  });
  addFood(mashPotatoes[1], '#mashPotatoes')
});

// Iteration 3 using async and await

  async function makeFood(step) {
    for(let i = 0; i < step.length; i++) {
      await addFood(step[i], "#brusselSprouts")
    }
    const brusselSprouts = document.createElement("img");
    brusselSprouts.src = "./public/images/brusselSprouts.jpg";
    document.getElementById("table").appendChild(brusselSprouts);
  }

  const brusselSproutsPromise = makeFood(brusselSprouts);


  Promise.all([steakPromise, mashPotatoesPromise, brusselSproutsPromise]).then(() => {
    const finalAlert = document.querySelector('body');
    finalAlert.innerHTML += '<button>Dinner is served!!</button>';
  });
