import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.css']
})
export class StudentcrudComponent {

  StudentArray: any[] =[];
  isResultLoaded = false;
  isUpdateFormActive = false;

  id: string ="";
  stname: string="";
  course: string="";

  currentStudentId = "";

  constructor(private http: HttpClient){
    this.getAllStudent();
  }

  ngOnInit(): void{
  }

  getAllStudent(){
    this.http.get("https://localhost:7191/api/Student/GetStudent")
    .subscribe((resultData: any)=>
    {
      this.isResultLoaded = true;
      console.log(resultData);
      this.StudentArray = resultData;
    })
  }

  register(){
    let bodyData = {
      "stname": this.stname,
      "course": this.course,
    };

    this.http.post("https://localhost:7191/api/Student/AddStudent",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Student Registered Successfully")
      this.getAllStudent();
    });
  }

  setUpdate(data: any)
  {
    this.stname = data.stname;
    this.course = data.course;

    this.currentStudentId = data.id;
  }

  UpdateRecords()
  {
    let bodyData =
    {
      "id": this.currentStudentId,
      "stname": this.stname,
      "course": this.course,
    };

    this.http.patch("https://localhost:7191/api/Student/UpdateStudent"+"/"+this.currentStudentId,bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Student Registered Updated")
      this.getAllStudent();
    });
  }

  save()
  {
    if(this.currentStudentId === '')
    {
      this.register();
    }
    else
    {
      this.UpdateRecords();
    }
  }

  setDelete(data: any)
  {
    this.http.delete("https://localhost:7191/api/Student/DeleteStudent"+"/"+data.id).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Student Deleted")
      this.getAllStudent();
    });
  }


}
