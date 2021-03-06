// get input element
let filterinput = document.getElementById('filterInput');

// add event listener
filterinput.addEventListener('keyup', filterNames);

function filterNames() {
    // get value of input
    let filterValue = document.getElementById('filterInput')
        .value.toUpperCase();
    console.log(filterValue);
    // Get names UL
    let ul = document.getElementById('names');
    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item')

    // Loop thru collection-item lis
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}