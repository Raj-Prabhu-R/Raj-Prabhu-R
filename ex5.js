let gra="";
$(document).ready(function(){
    $("#tot").click(function(){
        let s1=parseInt(document.getElementById("e1").value);
        let s2=parseInt(document.getElementById("e2").value);
        let s3=parseInt(document.getElementById("e3").value);
        let s4=parseInt(document.getElementById("e4").value);
        let s5=parseInt(document.getElementById("e5").value);
        if(s1>=0 && s1<=100 && s2>=0 && s2<=100 && s3>=0 && s3<=100 && s4>=0 && s4<=100 && s5>=0 && s5<=100){
        let total=s1+s2+s3+s4+s5;
        
        if(s1>=90)
        document.getElementById("label1").innerHTML="Exam 1: A+";
        else if(s1>=80)
        document.getElementById("label1").innerHTML="Exam 1: A";
        else if(s1>=70)
        document.getElementById("label1").innerHTML="Exam 1: B+";
        else if(s1>=60)
        document.getElementById("label1").innerHTML="Exam 1: B";
        else if(s1>=50)
        document.getElementById("label1").innerHTML="Exam 1: C+";
        else if(s1>=40)
        document.getElementById("label1").innerHTML="Exam 1: C";
        else{
        document.getElementById("label1").innerHTML="Exam 1: Fail";
        gra="Fail";
        }

        
        if(s2>=90)
        document.getElementById("label2").innerHTML="Exam 2: A+";
        else if(s2>=80)
        document.getElementById("label2").innerHTML="Exam 2: A";
        else if(s2>=70)
        document.getElementById("label2").innerHTML="Exam 2: B+";
        else if(s2>=60)
        document.getElementById("label2").innerHTML="Exam 2: B";
        else if(s2>=50)
        document.getElementById("label2").innerHTML="Exam 2: C+";
        else if(s2>=40)
        document.getElementById("label2").innerHTML="Exam 2: C";
        else{
        document.getElementById("label2").innerHTML="Exam 2: Fail";
        gra="Fail";
        }

        if(s3>=90)
        document.getElementById("label3").innerHTML="Exam 3: A+";
        else if(s3>=80)
        document.getElementById("label3").innerHTML="Exam 3: A";
        else if(s3>=70)
        document.getElementById("label3").innerHTML="Exam 3: B+";
        else if(s3>=60)
        document.getElementById("label3").innerHTML="Exam 3: B";
        else if(s3>=50)
        document.getElementById("label3").innerHTML="Exam 3: C+";
        else if(s3>=40)
        document.getElementById("label3").innerHTML="Exam 3: C";
        else{
        document.getElementById("label3").innerHTML="Exam 3: Fail";
        gra="Fail";
        }

        
        if(s4>=90)
        document.getElementById("label4").innerHTML="Exam 4: A+";
        else if(s4>=80)
        document.getElementById("label4").innerHTML="Exam 4: A";
        else if(s4>=70)
        document.getElementById("label4").innerHTML="Exam 4: B+";
        else if(s4>=60)
        document.getElementById("label4").innerHTML="Exam 4: B";
        else if(s4>=50)
        document.getElementById("label4").innerHTML="Exam 4: C+";
        else if(s4>=40)
        document.getElementById("label4").innerHTML="Exam 4: C";
        else{
        document.getElementById("label4").innerHTML="Exam 4: Fail";
        gra="Fail";
        }

        if(s5>=90)
        document.getElementById("label5").innerHTML="Exam 5: A+";
        else if(s5>=80)
        document.getElementById("label5").innerHTML="Exam 5: A";
        else if(s5>=70)
        document.getElementById("label5").innerHTML="Exam 5: B+";
        else if(s5>=60)
        document.getElementById("label5").innerHTML="Exam 5: B";
        else if(s5>=50)
        document.getElementById("label5").innerHTML="Exam 5: C+";
        else if(s5>=40)
        document.getElementById("label5").innerHTML="Exam 5: C";
        else{
            document.getElementById("label5").innerHTML="Exam 5: Fail";
            gra="Fail";
        }
        document.getElementById("tlabel").innerHTML="Total marks:"+total;
    }
        else{
            alert("Input Error: invalid input");
        }
    });
    $("#gra").click(function(){
        let s1=parseInt(document.getElementById("e1").value);
        let s2=parseInt(document.getElementById("e2").value);
        let s3=parseInt(document.getElementById("e3").value);
        let s4=parseInt(document.getElementById("e4").value);
        let s5=parseInt(document.getElementById("e5").value);
        
        if(s1>=0 && s1<=100 && s2>=0 && s2<=100 && s3>=0 && s3<=100 && s4>=0 && s4<=100 && s5>=0 && s5<=100){
        let total=s1+s2+s3+s4+s5;
        let avg=total/5.0;
        if(gra==""){
        document.getElementById("glabel").innerHTML="CGPA : "+avg;
        }else{
            document.getElementById("glabel").innerHTML="Fail";
            gra="";
        }
        }
        else{
            alert("Input Error: invalid input");
        }
    });
   
});
