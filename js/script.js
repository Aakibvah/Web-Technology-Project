function expandFun(ele) {
    target_id = (ele.parentElement.getAttribute('for'));
    if(ele.innerHTML == '+'){
        servDescArr = document.getElementsByClassName('services-desc');
        expandIconsArr = document.getElementsByClassName('plus-expand');
        for(i = 0; i < servDescArr.length; i++){
            servDescArr[i].style.display = 'none';
            expandIconsArr[i].innerHTML = '+'
            expandIconsArr[i].style.background = '#6d1a5c';
        }
        document.getElementById(target_id).nextElementSibling.style.display = 'block';
        ele.innerHTML = '-'
        ele.style.background = '#5c5c5c';
    }else{
        document.getElementById(target_id).nextElementSibling.style.display = 'none';
        ele.innerHTML = '+'
        ele.style.background = '#6d1a5c';
    }   
}