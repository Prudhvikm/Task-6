//4.write a class to calculate uber price.
class Uber {
    constructor(BaseFare=40,BookingFee=20,CostPerMile=9,CostPerMinute=5,time=1,mile=2){

    this.BaseFare=BaseFare;
    this.BookingFee=BookingFee;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.time=time;
    this.mile=time;
    }
    totalPrice(time=this.time , mile=this.mile)
    {
        console.log(this.BaseFare)+(this.BookingFee)+(this.CostPerMinute)+(this.time)+(this.mile)
    }
}
let car = new Uber();
car.totalPrice(40,100); 
