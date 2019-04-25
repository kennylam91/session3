let year= parseInt(prompt("Nhap nam can kiem tra: "));
let leafYear=false;
if((year % 4)==0)
{
    if((year % 100)==0)
    {
        if((year % 400)==0)
        {
            leafYear=true;
        }
    }
    else
        {
            leafYear=true;
        }

}
if(leafYear)
{
    document.write("Nam "+year +" la nam nhuan");
}
else{
    document.write("Nam " +year +" khong phai nam nhuan");
}