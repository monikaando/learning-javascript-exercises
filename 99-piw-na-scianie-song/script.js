var word = "butelek";
    var word2= "butelka";
          var count = 99;
          while (count > 1)   {
          console.log(count + " " + word + " piwa na ścianie");
          console.log(count + " " + word + " piwa,");
          console.log("Jedną weź i podaj w koło,");
          count = count - 1;
          if (count > 1) {
            console.log(count + " " + word + " piwa na ścianie.");
          }
            else if (count = 1) {
              console.log(count + " " + word2 + " piwa na ścianie");
              console.log(count + " " + word2 + " piwa,");
              console.log(count + " " + word2 + " piwa,");
              console.log("Jedną weź i podaj w koło,");
              console.log("Nie ma już " + word + " piwa na ścianie.");
            }
           else {
          }
        }
