# Angular-ASP.NET-Core
->In Sql Enabled Trust Server Certificate in connection Properties

->Added services.AddCors(); in Program.cs file (for issue: origin 'http://localhost:4200' has been blocked by CORS policy in Angular7)
	and app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200")); in Program.cs file 
	
->Added "id": this.currentStudentId in UpdateRecords() method as it was sending 0 in http request causing 500 error.