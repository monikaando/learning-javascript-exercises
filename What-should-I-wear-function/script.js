function WhatShallIWear(temp) {
  if (temp < 15) {
  console.log("Take a jacket.");
  }
  else if (temp < 25) {
    console.log("Take a sweater.");
  }
  else {
    console.log("You can wear a t-shirt!");
  }
}
/*WhatShallIWear(15);
WhatShallIWear(30);
WhatShallIWear(10);*/

var message = prompt ("How many degrees today?")
WhatShallIWear(message);
