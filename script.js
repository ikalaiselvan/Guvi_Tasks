   document.body.innerHTML = `
     <div id="data"> </div>
     <div id="pagination">
        <button type="button" id="one" onclick="pageLoad(1)">First</button>
        <button type="button" onclick="previous()">Previous</button>
        <button type="button" id="two" onclick="pageLoad(2)">2</button>
        <button type="button" id="three" onclick="pageLoad(3)">3</button>
        <button type="button" id="four" onclick="pageLoad(4)">4</button>
        <button type="button" id="five" onclick="pageLoad(5)">5</button>
        <button type="button" id="six" onclick="pageLoad(6)">6</button>
        <button type="button" id="seven" onclick="pageLoad(7)">7</button>
        <button type="button" id="eight" onclick="pageLoad(8)">8</button>
        <button type="button" id="nine" onclick="pageLoad(9)">9</button>
        <button type="button" onclick="next()">Next</button>
        <button type="button" id="ten" onclick="pageLoad(10)">Last</button>
    </div>`;



   let mmg = ["https://tse1.mm.bing.net/th?id=OIP.0XJN4KAHminrbDl7sIfFaQHaFj&pid=Api&P=0",
       "https://tse3.explicit.bing.net/th?id=OIP.stIxPqe5G2JDyBOycjz2xAHaEK&pid=Api&P=0",
       "https://tse2.mm.bing.net/th?id=OIP.S2D2OMaZKpR4uAGL-S7GXQHaEJ&pid=Api&P=0",
       "https://tse1.mm.bing.net/th?id=OIP.Kgb00CppWEx3SyjucN8_JQHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122",
       "https://tse1.mm.bing.net/th?id=OIP.evUMYFwlMncUnlz-sqBP5wHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122",
       "https://tse4.mm.bing.net/th?id=OIP.ZgjoJkJRpU44F9zMNXijBgHaEo&pid=Api&P=0",
       "https://tse2.mm.bing.net/th?id=OIP.QGXYmjug6rvLsVaK0FSUZgHaEK&pid=Api&P=0",
       "https://tse3.mm.bing.net/th?id=OIP.UiKu8CQ-w5KKXz6T8-5vMgHaFP&pid=Api&P=0",
       "https://tse1.mm.bing.net/th?id=OIP.7Q5nxl78oSNxhUBpB0aTlwHaEo&pid=Api&P=0",
       "https://tse4.mm.bing.net/th?id=OIP.m88ha6ZtdV0BMH3W5i5YtAHaEo&pid=Api&P=0"
   ]

   let bodyContent = document.getElementById('data');

   let currentPage = '';

   function pageLoad(p) {
       let data = bodyContent.innerHTML = `Page : ${p}`;
       currentPage = p;

       let image = new Image();
       image.src = `${mmg[p-1]}`;
       bodyContent.appendChild(image);

       let array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
       let butClass = document.querySelector(`#${array[(p - 1)]}`);
       butClass.setAttribute("class", "active");
       reset(`#${array[(p - 1)]}`);

   }

   function previous() {
       if (currentPage > 1) {
           currentPage--;
           pageLoad(currentPage);
       }
   }

   function next() {
       if (currentPage < 10) {
           currentPage++;
           pageLoad(currentPage);
       }
   }

   pageLoad(1);