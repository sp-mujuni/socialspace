/*=========== immediately invoked function expression ==============*/
(function() {

    const btn = document.querySelector('.btn');
    const tb = document.querySelector('tbody')
    
    btn.addEventListener('click', function() {
        getData();
    });

    function getData() {
        const education = document.querySelector('.education').value;
        const statement = document.querySelector('.statement').value;
        const image = document.querySelector('.image').value;
        const hobbies = document.querySelector('.hobbies').value;
        const data = { education, statement, image, hobbies };
        let dataArray = [];
        dataArray.push(data);

        dataArray.forEach((item) => {
            const tr = document.createElement('tr');
            let image = new Image();
            image.src = `${item.image}`
            const trContent = `
                <td class='tdata'>${item.education}</td>
                <td class='tdata'>${item.statement}</td>
                <td><img src='${image}'></td>
                <td class ='tdata'>${item.hobbies}</td>
                <td class='actions'><div class='delete'>Delete profile</div></td>
            `;
            
            tr.innerHTML = trContent;
            tb.appendChild(tr)
            
        });

    }

    /*====== TOGGLE BACKGROUND ==========*/
    const themeToggler = document.querySelector(".right--1");

    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');
    })

    /*====== HIDE FORM =========*/
    const formHideToggler = document.querySelector(".header--left-1");

    formHideToggler.addEventListener('click', () => {
        
        document.getElementById("container").style.display="";
    })

    /*====== SHOW FORM =========*/
    const formShowToggler = document.querySelector(".header--left-2");

    formShowToggler.addEventListener('click', () => {
        
        document.getElementById("container").style.display="none";
    })
    
      /*====== DELETE PROFILE ==========*/
      tb.addEventListener('click', function(e) {
        if(e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        }
    })

    /*====== FONT COLORS =========*/
    const fontRedToggler = document.getElementById("red");

    fontRedToggler.addEventListener('click', function() {
    const formred = document.getElementById('form--back');
    formred.style.color='red';
    })

    const fontRedTableToggler = document.getElementById("red");

    fontRedTableToggler.addEventListener('click', function() {
    const tablered = document.getElementById('table');
    tablered.style.color='red';
    })

    const fontRedTdataToggler = document.getElementById("red");

    fontRedTdataToggler.addEventListener('click', function() {
        const tdata = document.querySelectorAll('.tdata');
        tdata.forEach((data) => {
            data.style.color='red';
        })
        
    })
    
    const fontgreenToggler = document.getElementById("green");

    fontgreenToggler.addEventListener('click', function() {
    const formgreen = document.getElementById('form--back');
    formgreen.style.color='green';
    })

    const fontGreenTableToggler = document.getElementById("green");

    fontGreenTableToggler.addEventListener('click', function() {
    const tablegreen = document.getElementById('table');
    tablegreen.style.color='green';
    })

    const fontGreenTdataToggler = document.getElementById("green");

    fontGreenTdataToggler.addEventListener('click', function() {
        const tdata = document.querySelectorAll('.tdata');
        tdata.forEach((data) => {
            data.style.color='green';
        })
        
    })

    const fontblackToggler = document.getElementById("orange");

    fontblackToggler.addEventListener('click', function() {
    const formorange = document.getElementById('form--back');
    formorange.style.color='orange';
    })

    const fontOrangeTableToggler = document.getElementById("orange");

    fontOrangeTableToggler.addEventListener('click', function() {
    const tableorange = document.getElementById('table');
    tableorange.style.color='orange';
    })

    const fontOrangeTdataToggler = document.getElementById("orange");

    fontOrangeTdataToggler.addEventListener('click', function() {
        const tdata = document.querySelectorAll('.tdata');
        tdata.forEach((data) => {
            data.style.color='orange';
        })
        
    })

    /*====== FONT TYPES =========*/
    const fontArialToggler = document.getElementById("arial");

    fontArialToggler.addEventListener('click', function() {
    const formred = document.getElementById('form--back');
    formred.style.fontFamily='arial';
    })

    const fontArialTableToggler = document.getElementById("arial");

    fontArialTableToggler.addEventListener('click', function() {
    const tablered = document.getElementById('table');
    tablered.style.fontFamily='arial';
    })
    
    const fontVerdanaToggler = document.getElementById("verdana");

    fontVerdanaToggler.addEventListener('click', function() {
    const formgreen = document.getElementById('form--back');
    formgreen.style.fontFamily='verdana';
    })

    const fontVerdanaTableToggler = document.getElementById("verdana");

    fontVerdanaTableToggler.addEventListener('click', function() {
    const tablegreen = document.getElementById('table');
    tablegreen.style.fontFamily='verdana';
    })
    
    const fontPoppinsToggler = document.getElementById("century");

    fontPoppinsToggler.addEventListener('click', function() {
    const formorange = document.getElementById('form--back');
    formorange.style.fontFamily='century';
    })

    
    const fontCenturyTableToggler = document.getElementById("century");

    fontCenturyTableToggler.addEventListener('click', function() {
    const tableorange = document.getElementById('table');
    tableorange.style.fontFamily='century';
    })

}())