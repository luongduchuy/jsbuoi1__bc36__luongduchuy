/**
 * đầu vào:
 * cho người dùng nhập vào số ngày làm
 * cho tiền lương cố định bằng 100
 * xử lý: 
 * số ngày làm*lương
 * đầu ra:
 * tính ra tiền lương nhân viên
 */
document.getElementById("btn__TNV").onclick=function(){
    console.log("123");
    const LUONG=100000;
    var songaylam=document.getElementById("txt__songaylam").value ;

    var count=songaylam*LUONG;
    var currentformat= new Intl.NumberFormat("vn-VN");
    var countemployee= currentformat.format(count);
    var total="<div>số lương sau 3 ngày làm là:"+ countemployee + "VND </div>" ;
    document.getElementById("footer__TNV").innerHTML=total

}
/**
 * đầu vào:
 * nhập 5 số thực
 * xử lý:
 * lấy trung bình 5 số /5
 * đầu ra:
 * in ra kết quả trung bình 5 số
 */
document.getElementById("btn__TB").onclick=function(){
    var sothuc1=document.getElementById("txt__sothuc1").value *1;
    var sothuc2=document.getElementById("txt__sothuc2").value *1;
    var sothuc3=document.getElementById("txt__sothuc3").value *1;
    var sothuc4=document.getElementById("txt__sothuc4").value *1;
    var sothuc5=document.getElementById("txt__sothuc5").value *1;
     var count= (sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5;
     var total=count;
     document.getElementById("footer__TB").innerHTML=total;

}
/**
 * đầu vào:
 * cho người dùng nhập vào số tiền quy đổi
 * xử lý:
 * lấy số tiền nhập vào *23.500đ
 * đầu ra:
 * in ra số tiền quy đổi
 */
document.getElementById("btn__exchange").onclick=function(){
    const VND=23.500;
    var usd=    document.getElementById("txt__exchange").value *1;
    var count= usd*23.500;
    var currentformat= new Intl.NumberFormat("vn-VN");
    var countexchange= currentformat.format(count);
    var total = countexchange+"<span>.000</span>";
    document.getElementById("footer__exchange").innerHTML=total;

}
/**
 * đầu vào:
 * nhập chu vi, diện tích
 * xử lý:
 * diện tích: d*r
 * chu vi:(d+r)/2
 * đầu ra:
 * in ra kết quả
 * 
 */
document.getElementById("btn__chuvidientich").onclick=function(){
    var dai= document.getElementById("txt__dai").value *1
    var rong= document.getElementById("txt__rong").value *1
    var chuvi= (dai + rong)/2
    var dientich= dai*rong
    var total__chuvi= chuvi
    var total__dientich= dientich
    var total="<div>";
    total +="tổng chu vi:"+""+total__chuvi+"</br>"
    total +="tổng diện tích:"+""+total__dientich
    document.getElementById("footer__chuvidientich").innerHTML=total



}
/**
 * đầu vào:
 * nhập số có 2 chữ số
 * tạo ra biến số hàng chục, hàng đơn vị
 * xử lý:
 * số hàng đơn vị = số nhập %10
 * số hàng chục= số nhập /10
 * đầu ra:
 * in ra kết quả
 */
document.getElementById("btn__tong2so").onclick=function(){
    var tong2so= document.getElementById("txt__tong2so").value *1
    var hangdonvi= tong2so %10
    console.log("hangdonvi",hangdonvi);
    var hangchuc= Math.floor(tong2so /10)
    console.log("hangchuc",hangchuc);
    var count=hangdonvi+hangchuc
    total ="<span> kết quả tổng 2 số là:</span>"+count
    document.getElementById("footer__tong2so").innerHTML=total

}
