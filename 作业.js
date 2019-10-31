function change(){var str='hello world';
var arr=str.split(' ');
var arr1=[];
var str1;
for (var i =0;i<arr.length;i++)
{
    arr1.push(arr[i].substring(0,1).toUpperCase()+arr[i].substring(1));
}
str1=arr1.join(' ');
console.log(str1);}
function bulle(){
    var arr=[5,4,3,2,1];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var a=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=a;
            }
        }
    }
    console.log(arr);
}