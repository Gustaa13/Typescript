let height: number | string | undefined = 1.75;

height = document.getElementById('height')?.innerHTML;

function showHeight(height: number | string | undefined){
    if(height !== undefined){
        console.log('A altura é: ' + height);
    } else {
        console.log('A altura é: 1.60');
    }
}

showHeight(height);
showHeight(1.45);
showHeight('1.90');
showHeight(undefined);